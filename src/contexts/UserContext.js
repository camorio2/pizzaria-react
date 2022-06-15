import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user'))
        if(savedUser) {
            setUser(savedUser)
        }
    }, [])

    return <UserContext.Provider value={{user, setUser}}>
            {children}
    </UserContext.Provider>;
}