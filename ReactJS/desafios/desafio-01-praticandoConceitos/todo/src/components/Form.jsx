import { useContext, useState } from 'react'
import styles from './Form.module.css'
import {PlusCircle} from 'phosphor-react'

import { AuthContext } from '../contexts/auth'


export function Form(){
    const {adicionarTarefa}=useContext(AuthContext)
    const [taskInput, setTaskInput] = useState('')

    function changeTextinput(){
        setTaskInput(event.target.value)
    }

    function addTask(){
        event.preventDefault()
        if(taskInput.trim().length===0){
            return
        }
        adicionarTarefa(taskInput)
        setTaskInput('')
    }
    return(
        <form 
        onSubmit={addTask}
        className={styles.form}>
            <input 
                type='text'
                value={taskInput}
                placeholder="Adicione uma nova tarefa"

                onChange={changeTextinput}
            />
            <button
                type='submit'
            >
                Criar
                <PlusCircle size={20}/>
            </button>
        </form>
    )
}