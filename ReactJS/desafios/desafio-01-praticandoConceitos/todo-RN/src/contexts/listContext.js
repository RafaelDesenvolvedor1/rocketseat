// import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState, createContext, useEffect } from "react"

export const ListContext = createContext({})

export function ListProvider({ children }) {
    const [taskList, setTaskList] = useState([])
    const [taskListCompleted, setTaskListCompleted] = useState([])
    const [tarefasConcluidas, setTarefasConcluidas] = useState(taskList.filter(item=>item.checked).length)
    const [filterTaskChecked, setFilterTaskChecked] = useState(false)


    useEffect(()=>{
        async function loadTaskListStorage(){
          const result = await AsyncStorage.getItem('taskListStorage')
          if(result !== null ){
            setTaskList(JSON.parse(result))
            setarTarefasConcluidas(JSON.parse(result))

       
          }
        //   setarTarefasConcluidas(taskList)
        //   console.log(tarefasConcluidas)
        }
        loadTaskListStorage()
     
    },[])


    function addTask(text) {
        let note = {
            id: Math.random(),
            text: text,
            checked: false
        }

        let updatedTaskList = [...taskList, note]
        setTaskList(updatedTaskList)

        saveInStorage(updatedTaskList)
    }

    function deleteTask(id) {
        let novaLista = taskList.filter((item) => {
            return item.id !== id
        })

        setTaskList(novaLista)

        setarTarefasConcluidas(novaLista)

        saveInStorage(novaLista)


    }

    function changeTaskChecked(id, newChecked) {
        let guardarPosicao = taskList.findIndex(task => task.id === id)

        let novaLista = taskList

        novaLista[guardarPosicao].checked = newChecked

        setTaskList(novaLista)

        setarTarefasConcluidas(novaLista)

        saveInStorage(novaLista)

    }

    function setarTarefasConcluidas(lista) {
        setTarefasConcluidas(lista.filter(item => item.checked).length)
        setTaskListCompleted(lista.filter(item => item.checked))

        saveInStorage(lista)

    }

    function filtrarTarefasConcluidas(status) {
        
        setFilterTaskChecked(status)

    }

    async function saveInStorage(lista){
        await AsyncStorage.setItem('taskListStorage', JSON.stringify(lista))
    }

    return (
        <ListContext.Provider value={{
            taskList,
            tarefasConcluidas,
            taskListCompleted,
            filterTaskChecked,

            addTask,
            deleteTask,
            changeTaskChecked,
            filtrarTarefasConcluidas
        }}>
            {children}
        </ListContext.Provider>
    )
}