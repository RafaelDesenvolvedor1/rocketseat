import React from "react";
import styles from './List.module.css'
import { Task } from "./Task";

export function List(){
    return (
        <div className={styles.list}>
            <header>
                <strong>
                    Tarefas Criadas
                    <span>5</span>
                </strong>
                <strong>
                    Concluidas
                    <span>2 de 5</span>
                </strong>
            </header>

            <main>
                <ul>
                    <Task/>
                    <Task/>
                </ul>
            </main>
        </div>
    )
}