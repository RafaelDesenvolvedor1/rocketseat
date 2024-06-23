import { useContext, useState } from 'react'
import styles from './NoteCard.module.css'
import { Trash } from 'phosphor-react'

import { AuthContext } from '../contexts/auth'

export function NoteCard({ task, id, status }) {
    const [checked, setChecked] = useState(false)

    const { deletarTarefa, alterarStatusDaTask } = useContext(AuthContext)

    function concluirTarefa(id, status) {
        setChecked(!checked)

        alterarStatusDaTask(id, status)

       
    }

    function handleDeletedTask() {
        deletarTarefa(id)
        // alert(id)
    }


    // if (!checked) {
        return (
            <div className={checked?styles.noteCardChecked:styles.noteCard}>
                <button
                    onClick={()=>concluirTarefa(id, !checked)}
                    className={styles.btnCheck}></button>
                    {/* <input  
                    type="checkbox" 
                    name="" 
                    id="" 
                    checked={checked}
                    onClick={()=>concluirTarefa(id, checked)}
                    /> */}
                <span>{task}</span>
                <button
                    onClick={handleDeletedTask}
                    className={styles.btnDelete}><Trash size={20} /></button>
            </div>

        )
    // } else {
    //     return (
    //         <div className={styles.noteCardChecked}>
    //             <button
    //                 onClick={concluirTarefa}
    //                 className={styles.btnCheck}></button>
    //             <span>{task}</span>
    //             <button
    //                 onClick={handleDeletedTask}
    //                 className={styles.btnDelete}><Trash size={20} /></button>
    //         </div>
    //     )
    // }
}