import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
    if (!user) {
        axios
        .get("/profile")
        .then(response => {
            setUser(response.data);
            // console.log('profile', response.data);
        })
        .catch(error => {
            console.log("Error fetching user profile:", error);
        });
    }
    }, []);



    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};
