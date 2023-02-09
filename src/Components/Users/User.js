import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../Context/Context'

function User() {

  const {users, setUsers} = useContext(ThemeContext)

  return (
    <div className='bg-warning p-4 rounded d-flex flex-column justify-content-center align-items-center'>
      <h4 className='bg-warning fs-4 text-center fw-semibold'>Welcome <br /> <br /> E-mail : {users[0].user} <br /> Password : {users[0].password  }</h4>
      <Link to={"/"} className={"bg-warning"}>
        <button type='button' className='btn btn-primary px-5 justify-content-center py-2 mt-3'>
          Log out
        </button>
      </Link>
    </div>
  )
}

export default User
