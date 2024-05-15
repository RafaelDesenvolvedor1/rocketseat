import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


interface Author {
    name: string;
    role: string; 
    avatarUrl: string
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
    
}

export interface PostType {
    id:number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType;
}
//estado = variáveis que eu quero que o componente monitore


export function Post({post}: PostProps) {


    const [comments, setComments]=useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted=format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{locale:ptBR})

    const publishedDateRelativeToNow=formatDistanceToNow(post.publishedAt,{
        locale: ptBR,
        addSuffix:true,
    })


    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

       
        
        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        setNewCommentText(event.target.value)
        event.target.setCustomValidity('')
    }

    function deleteComment(commentToDelete: string){

        // Imutabilidade -> as variaveis não sofrem mutação, nós criamos um novo valor( um novo espaço na memoria).

        const commentsWithoutDeletedOne=comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
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