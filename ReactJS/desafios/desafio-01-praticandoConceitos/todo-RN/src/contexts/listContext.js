// import React, { createContext, useState } from "react";
import react, {useState, createContext} from "react"

export const ListContext = createContext({})

export function ListProvider({ children }) {
    const [taskList, setTaskList]=useState([])

    function addTask(text){
        setTaskList(taskList => [...taskList, {
            id: Math.random(),
            text: text,
            checked:false
        }])
    }

    function deleteTask(id){
        let novaLista=taskList.filter((item)=>{
            return item.id !== id
        })

        setTaskList(novaLista)


    }
    return (
        <ListContext.Provider value={{
            taskList,

            addTask,
            deleteTask
        }}>
            {children}
        </ListContext.Provider> 
    )
}