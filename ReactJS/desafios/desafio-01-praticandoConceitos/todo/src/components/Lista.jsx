import styles from './Lista.module.css'
import { EmptyList } from './EmptyList'

export function Lista(){
    return(
        <div className={styles.lista}>
            <header>
                <strong className={styles.tarefas}>Tarefas criadas <span>5</span></strong>
                <strong className={styles.concluidas}>Concluidas <span>2 de 5</span></strong>
            </header>
            <main>
                <EmptyList/>
            </main>
        </div>
    )
}