import { Form } from './components/Form'
import { Header } from './components/Header'
import { Lista } from './components/Lista'
import './global.css'

import { AuthProvider } from './contexts/auth'


function App() {

  return (
    <>
      <Header />

      <main>
        <AuthProvider>
          <Form />
          <Lista />
        </AuthProvider>
      </main>
    </>
  )
}

export default App
