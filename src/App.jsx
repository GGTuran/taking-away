import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Forming</h1>
      <SimpleForm></SimpleForm>
      
    </>
  )
}

export default App
