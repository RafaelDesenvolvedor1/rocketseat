import React, { createContext,  useState } from "react";
import { TaskType } from "../components/List";

export const ListContext=createContext({})



export function ListProvider({children}:any){

    const [taskList, setTaskList]=useState<TaskType[]>(()=>{
        const notesOnStorage=localStorage.getItem('@tasklist')

        if(notesOnStorage){
            return JSON.parse(notesOnStorage)
        }
        return []
    })

    const [taskListCompleted, setTaskListCompleted]=useState<number>(()=>taskList.filter((task)=>task.checked).length)


  

    function addTask(text: string){
        let task = {
            id: Math.random(),
            text: text,
            checked: false
        }
      

        const tasksArray=[...taskList, task]

        setTaskList(tasksArray)

        localStorage.setItem('@tasklist', JSON.stringify(tasksArray))

    }

    function deleteTask(id: number){
        const newList = taskList.filter((task)=>{
            return task.id !== id
        })

        setTaskList(newList)
        localStorage.setItem('@tasklist', JSON.stringify(newList))
        changedTaskCompleted(newList)

 
    }

    function changeCheckedTask(id: number, newChecked: boolean){
        let saveObjectIndex=taskList.findIndex(task=>task.id===id)
        let newList=taskList

        newList[saveObjectIndex].checked=newChecked

        setTaskList(newList)
        localStorage.setItem('@tasklist', JSON.stringify(newList))

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