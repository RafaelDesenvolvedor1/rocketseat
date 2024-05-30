import { useState } from 'react'
import styles from './NoteCard.module.css'
import { Trash } from 'phosphor-react'

export function NoteCard({task}) {
    const [checked, setChecked] = useState(false)

    function concluirTarefa(){
        setChecked(!checked)
    }


    if (!checked) {
        return (
            <div className={styles.noteCard}>
                <button 
                onClick={concluirTarefa}
                className={styles.btnCheck}></button>
                <span>{task}</span>
                <button className={styles.btnDelete}><Trash size={20} /></button>
            </div>
        )
    }else{
        return (
            <div className={styles.noteCardChecked}>
                <button
                onClick={concluirTarefa} 
                className={styles.btnCheck}></button>
                <span>{task}</span>
                <button className={styles.btnDelete}><Trash size={20} /></button>
            </div>
        )
    }
}