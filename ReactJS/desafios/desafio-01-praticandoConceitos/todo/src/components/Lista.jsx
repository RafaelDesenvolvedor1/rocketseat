import styles from './Lista.module.css'
import { EmptyList } from './EmptyList'
import { NoteCard } from './NoteCard'

import { AuthContext } from '../contexts/auth'
import { useContext } from 'react'

export function Lista(){
    const {tasklist}=useContext(AuthContext)
    return(
        <div className={styles.lista}>
            <header>
                <strong className={styles.tarefas}>Tarefas criadas <span>{tasklist.length}</span></strong>
                <strong className={styles.concluidas}>Concluidas <span>2 de 5</span></strong>
            </header>
            <main>
                {
                    tasklist.length===0 ? <EmptyList/>:
                    tasklist.map(task=><NoteCard task={task}/>)
                }



                
               

            </main>
        </div>
    )
}