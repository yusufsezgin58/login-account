import React from 'react'
import { useContext, useState } from 'react'
import styles from './styles.module.css'
import ThemeContext from '../../Context/Context'
import { Link, Outlet } from 'react-router-dom'

function Index() {

    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")
    const [visibility, setVisibility] = useState("hidden");
    const { users, setUsers, permission, setPermission } = useContext(ThemeContext)

    const onclickFunc = (e) => {
        e.preventDefault()
        let user_DATA = (users[0].user);
        let password_DATA = (users[0].password);
        if ((user === user_DATA) && (password === password_DATA)) {
            console.log("giris");
            console.log(permission);
            if (permission === "false") {
                setPermission("true")
            }
            else {
                setPermission("false")
            }
        }
    }

    return (
        <div className='d-flex flex-column shadow rounded' id={styles.Layout}>
            <div className={styles.Login}>
                <h4 className='fs-1 fw-bolder'>Log in</h4>
            </div>
            <div className='mt-3'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={user} onChange={(e) => { setUser(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type={visibility == "hidden" ? "password" : "text"} value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <input className="form-check-input" onClick={() => { setVisibility(visibility == "hidden" ? "visible" : "hidden") }} type="checkbox" value="" aria-label="Checkbox for following text input" />
                        <label className='form-label mt-3 ms-2'>Show password</label>
                    </div>
                    <button type="submit" onClick={onclickFunc} className="btn btn-primary float-end">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Index
