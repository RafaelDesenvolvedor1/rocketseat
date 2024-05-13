import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'


export function Comment() {
    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https:github.com/Valdoveste.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Caio Valdoveste</strong>
                            <time title='11 de Maio às 08:13h' dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}