import { useState } from 'react'
import './App.css'
import Todo from './todo/Todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo></Todo>
    </>
  )
}

export default App
