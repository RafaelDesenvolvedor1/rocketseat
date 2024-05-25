import styles from './EmptyList.module.css'
import Clipboard from '../assets/Clipboard.svg'
export function EmptyList() {
    return (
        <div className={styles.emptyList}>
            <img src={Clipboard} alt="icone de clipboard" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>
            Crie tarefas e organize seus itens a fazer
            </p>

        </div>
    )
}