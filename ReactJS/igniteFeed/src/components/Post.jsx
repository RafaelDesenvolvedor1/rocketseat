import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import { useState } from 'react'




//estado = variáveis que eu quero que o componente monitore


export function Post({author, content, publishedAt}) {


    const [comments, setComments]=useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted=format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{locale:ptBR})

    const publishedDateRelativeToNow=formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix:true,
    })


    function handleCreateNewComment(){
        event.preventDefault()

       
        
        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
        event.target.setCustomValidity('')
    }

    function deleteComment(commentToDelete){

        // Imutabilidade -> as variaveis não sofrem mutação, nós criamos um novo valor( um novo espaço na memoria).

        const commentsWithoutDeletedOne=comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type==='paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type==='link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                    name='commentBox'
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button 
                    // disabled={newCommentText.length===0}
                    type='submit'>Publicar</button>

                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment=>{
                    return <Comment OnDeleteComment={deleteComment} key={comment} content={comment}/>
                })}
            </div>
        </article>
    )
}