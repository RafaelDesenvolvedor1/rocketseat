import { useState } from 'react'


import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// author { avatar_url: '', name:'', role: ''}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafaelDesenvolvedor1.png',
      name: 'Rafael Santos',
      role: 'Web Developer'
    },

    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: ' jane.design/doctorcare' }
    ],

    publishedAt: new Date('2024-05-09 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },

    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: ' jane.design/doctorcare' }
    ],

    publishedAt: new Date('2024-05-13 20:00:00')
  },
]


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}

export default App
