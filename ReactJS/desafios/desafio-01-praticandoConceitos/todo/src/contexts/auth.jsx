import React, { createContext, useState } from "react";

export const AuthContext=createContext({})

export function AuthProvider({children}){
    const [tasklist, setTaskList]=useState([])

    function adicionarTarefa(text){
        setTaskList([...tasklist,text])
    }

    return(
        <AuthContext.Provider value={{
            tasklist,
            adicionarTarefa
        }}>
            {children}
        </AuthContext.Provider>
    )
}