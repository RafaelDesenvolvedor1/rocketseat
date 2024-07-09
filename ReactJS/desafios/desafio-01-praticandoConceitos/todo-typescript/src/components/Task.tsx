import React, { useContext, useState } from "react";
import styles from './Task.module.css'
import { Trash } from "@phosphor-icons/react";
import { TaskType } from "./List";
import { ListContext } from "../contexts/listContext";

export function Task({id, text}:TaskType){
    const [checkbox, setCheckbox]=useState(false)

    const {deleteTask, changeCheckedTask}:any=useContext(ListContext)

    function handleChangeCheckbox(){
        setCheckbox(!checkbox)
        changeCheckedTask(id, !checkbox)
    }

    function handleDeleteTask(){
        deleteTask(id)
    }
    return(
        <li className={checkbox ? styles.taskChecked : styles.task}>
            <button onClick={handleChangeCheckbox} className={styles.btnCheckbox}></button>
            <p>{text}</p>
            <button onClick={handleDeleteTask} className={styles.btnDelete}>
                <Trash size={20}/>
            </button>
        </li>
    )
}