import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'


interface CommentProps {
    content: string;
    OnDeleteComment: (comment: string)=> void;
}

export function Comment({content, OnDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount]=useState(0)

    function handleDeleteComment(){
        OnDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state)=>{
            return state+1
        })

    }

    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https:github.com/rafaelDesenvolvedor1.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Rafael Santos</strong>
                            <time title='11 de Maio às 08:13h' dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
                        </div>

                        <button 
                        onClick={handleDeleteComment}
                         title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp /> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}