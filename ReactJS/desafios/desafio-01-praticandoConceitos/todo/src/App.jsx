import { Form } from './components/Form'
import { Header } from './components/Header'
import { Lista } from './components/Lista'
import './global.css'

function App() {

  return (
    <>
      <Header/>

      <main>
        <Form/>
        <Lista/>
      </main>
    </>
  )
}

export default App
