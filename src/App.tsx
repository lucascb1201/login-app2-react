import { useState } from 'react'
import { Login } from './pages/Login'
import { GlobalStyles } from './global-styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <GlobalStyles />
    </>
  )
}

export default App
