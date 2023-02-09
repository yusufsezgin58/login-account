import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ( { children } ) => {


    let USERS = [
        {
            user: "sezgin58yusuf34@gmail.com",
            password: "1234"
        }
    ]

    const [users, setUsers] = useState(USERS)
    const [permission, setPermission] = useState("false")

    const data = {
        users, setUsers, permission, setPermission
    }

    return (
        <ThemeContext.Provider value={data}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;