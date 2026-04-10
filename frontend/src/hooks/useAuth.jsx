import { useState } from "react";

export function useAuth(){
    const [user, setUser] = useState(null);

    function saveToken(token){
        localStorage.setItem("token", token);
    }

    function logout(){
        localStorage.removeItem("token");
        setUser(null);
    }

    return{
        user,
        saveToken,
        logout,
    };
}