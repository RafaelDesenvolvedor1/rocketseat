import React, { createContext, useState } from "react";
import { TaskType } from "../components/List";

export const ListContext=createContext({})



export function ListProvider({children}:any){
    const [taskList, setTaskList]=useState<TaskType[]>([])
    const [taskListCompleted, setTaskListCompleted]=useState<number>(0)

    function addTask(text: string){
        let task = {
            id: Math.random(),
            text: text,
            checked: false
        }
      

        setTaskList([...taskList, task])

    }

    function deleteTask(id: number){
        const newList = taskList.filter((task)=>{
            return task.id !== id
        })

        setTaskList(newList)
        changedTaskCompleted(newList)

 
    }

    function changeCheckedTask(id: number, newChecked: boolean){
        let saveObjectIndex=taskList.findIndex(task=>task.id===id)
        let newList=taskList

        newList[saveObjectIndex].checked=newChecked

        setTaskList(newList)
        changedTaskCompleted(newList)


    }

    function changedTaskCompleted(list: TaskType[]){
        setTaskListCompleted(list.filter((task)=>task.checked).length)
    }

    return(
        <ListContext.Provider value={{
            taskList,
            taskListCompleted,

            addTask,
            deleteTask,
            changeCheckedTask
        }}>
            {children}
        </ListContext.Provider>
    )
}