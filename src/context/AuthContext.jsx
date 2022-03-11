import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [token,setToken] = useState("");
    const handleLogin = (newToken)=>{
        setToken(newToken);
    }
    const handleLogout = ()=>{
        setToken("")
    }
    return (
        <AuthContext.Provider value={{token, handleLogin,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}