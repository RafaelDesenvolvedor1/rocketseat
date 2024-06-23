import React, { createContext, useState } from "react";

export const AuthContext=createContext({})

export function AuthProvider({children}){
    const [tasklist, setTaskList]=useState([])
    // const [taskStatus, setTaskStatus]=useState(0)
    const [taskConclude, setTaskConclude]=useState(0)

    function adicionarTarefa(text){

        let task={
            id:Math.random(),
            taskText: text,
            status:false
        }

        setTaskList([...tasklist, task])
    }

    function alterarStatusDaTask(id, novoStatus){
        let guardarPosicao= tasklist.findIndex(task=>task.id===id)

        let newList=tasklist

        newList[guardarPosicao].status=novoStatus

        setTaskList(newList)
        tasksConcludes(newList)


        // setTaskConclude(tasklist.filter(task=>task.status).length)


        // setTaskStatus(taskStatus+1)
    }

    function deletarTarefa(id){
       let newTaskList=tasklist.filter(task=>task.id !== id)

        // alert(newTaskList)
       
        tasksConcludes(newTaskList)
        setTaskList(newTaskList)
      
    }

    function tasksConcludes(lista){
         setTaskConclude(lista.filter(task=>task.status).length)
    }

    return(
        <AuthContext.Provider value={{
            tasklist,
            taskConclude,
            adicionarTarefa,
            deletarTarefa,
            alterarStatusDaTask

        }}>
            {children}
        </AuthContext.Provider>
    )
}