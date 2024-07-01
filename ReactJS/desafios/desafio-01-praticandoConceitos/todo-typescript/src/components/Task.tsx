import React, { useState } from "react";
import styles from './Task.module.css'
import { Trash } from "@phosphor-icons/react";

export function Task(){
    const [checkbox, setCheckbox]=useState(false)

    function handleChangeCheckbox(){
        setCheckbox(!checkbox)
    }
    return(
        <li className={checkbox ? styles.taskChecked : styles.task}>
            <button onClick={handleChangeCheckbox} className={styles.btnCheckbox}></button>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptates ipsam eum ea corrupti. Suscipit saepe amet facilis iure totam? Odio molestias provident fugiat officia facere laboriosam aliquid eius earum.</p>
            <button className={styles.btnDelete}>
                <Trash size={20}/>
            </button>
        </li>
    )
}