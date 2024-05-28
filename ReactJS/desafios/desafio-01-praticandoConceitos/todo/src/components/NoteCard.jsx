import styles from './NoteCard.module.css'
import {Trash} from 'phosphor-react'

export function NoteCard() {
    return (
        <div className={styles.noteCard}>
            <button className={styles.btnCheck}></button>
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer  </span>
            <button className={styles.btnDelete}><Trash size={20} /></button>
        </div>
    )
}