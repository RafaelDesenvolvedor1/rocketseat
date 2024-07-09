import React, { useContext } from "react";
import styles from './List.module.css'
import { Task } from "./Task";
import { ListContext } from "../contexts/listContext";
import { EmptyList } from "./EmptyList";

export interface TaskType{
    id: number;
    text: string;
    checked ?: boolean
}


export function List(){
    const {taskList, taskListCompleted}:any=useContext(ListContext)
    return (
        <div className={styles.list}>
            <header>
                <strong>
                    Tarefas Criadas
                    <span>{taskList.length}</span>
                </strong>
                <strong>
                    Concluidas
                    <span>{taskListCompleted} de {taskList.length}</span>
                </strong>
            </header>

            <main>
                <ul>
                    {
                    taskList.length===0?<EmptyList/>:
                    taskList.map((task: TaskType)=>{ 
                        return <Task key={task.id} id={task.id} checked={task.checked} text={task.text}/>
                    })
                    }
                </ul>
            </main>
        </div>
    )
}

