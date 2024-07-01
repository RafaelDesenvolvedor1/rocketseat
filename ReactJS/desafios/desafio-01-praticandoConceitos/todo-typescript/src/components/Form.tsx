import React from "react";
import styles from './Form.module.css'
import {PlusCircle} from '@phosphor-icons/react'


export function Form(){
    return(
        <form className={styles.form}>
            <input 
                type="text"
                placeholder="Adicione uma nova Tarefa"
            />
            <button>Criar <PlusCircle size={20}/></button>
        </form>
    )
}
