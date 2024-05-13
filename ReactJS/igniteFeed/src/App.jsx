import { useState } from 'react'


import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post />
          {/* <Post /> */}
        </main>

      </div>
    </div>
  )
}

export default App
