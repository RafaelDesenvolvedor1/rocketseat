import { Form } from './components/Form'
import { Header } from './components/Header'
import { List } from './components/List'
import { ListProvider } from './contexts/listContext'
import './global.css'
function App() {

  return (
    <>
      <Header />
      <main>
        <ListProvider>
          <Form />
          <List />
        </ListProvider>
      </main>

    </>
  )
}

export default App
