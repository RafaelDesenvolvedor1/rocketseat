// import React, { createContext, useState } from "react";
import react, { useState, createContext } from "react"

export const ListContext = createContext({})

export function ListProvider({ children }) {
    const [taskList, setTaskList] = useState([])
    const [taskListCompleted, setTaskListCompleted] = useState([])
    const [tarefasConcluidas, setTarefasConcluidas] = useState(0)
    const [filterTaskChecked, setFilterTaskChecked] = useState(false)


    function addTask(text) {
        setTaskList(taskList => [...taskList, {
            id: Math.random(),
            text: text,
            checked: false
        }])
    }

    function deleteTask(id) {
        let novaLista = taskList.filter((item) => {
            return item.id !== id
        })

        setTaskList(novaLista)

        setarTarefasConcluidas(novaLista)


    }

    function changeTaskChecked(id, newChecked) {
        let guardarPosicao = taskList.findIndex(task => task.id === id)

        let novaLista = taskList

        novaLista[guardarPosicao].checked = newChecked

        setTaskList(novaLista)

        setarTarefasConcluidas(novaLista)
    }

    function setarTarefasConcluidas(lista) {
        setTarefasConcluidas(lista.filter(item => item.checked).length)
        setTaskListCompleted(lista.filter(item => item.checked))
    }

    function filtrarTarefasConcluidas(status) {
        
        setFilterTaskChecked(status)

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