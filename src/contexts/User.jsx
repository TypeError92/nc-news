import { createContext, useState } from "react";

export const UserContext = createContext()

// The user is set to a default for now for testing and demo purposes
export function UserProvider({children}){
    const [user, setUser] = useState({
        "username": "grumpy19",
        "name": "Paul Grump",
        "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
    })
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}