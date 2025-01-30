import {useState} from "react";
import {UserContext} from "./userContext.jsx";

export default function UserContextProvider({ children }) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

