import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from './Form.module.css'
import {PlusCircle} from '@phosphor-icons/react'
import { ListContext } from "../contexts/listContext";


export function Form(){
    const [inputText, setInputText]=useState('')
    const {addTask}:any=useContext(ListContext)

    function changedInputText(event: ChangeEvent<HTMLInputElement>){
        setInputText(event.target.value)
    }

    function handleAddNewTask(event: FormEvent){
        event.preventDefault()

        addTask(inputText)
        setInputText('')

    }
    return(
        <form onSubmit={handleAddNewTask} className={styles.form}>
            <input 
                type="text"
                value={inputText}
                placeholder="Adicione uma nova Tarefa"

                onChange={changedInputText}
            />
            <button>Criar <PlusCircle size={20}/></button>
        </form>
    )
}
