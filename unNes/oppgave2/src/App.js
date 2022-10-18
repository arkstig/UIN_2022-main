import './styles.css'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import TodoList from './components/TodoList'

function App({ status }) {
  const [todos, setTodos] = useState([])
  console.log(todos)
  const [text, setText] = useState('')

  const handleText = (event) => {
    setText(event.target.value)
    console.log(text)
  }

  const removeTodo = (id) => {
    const oldTodos = [...todos]
    const todosLeft = oldTodos.filter((todo) => todo.id !== id)
    setTodos(todosLeft)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = uuid()
    if (text === '') {
      alert('Du må fylle ut')
    } else {
      setTodos((prev) => [...prev, { id, text, status }])
      setText('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Lag ny oppgave</label>
        <input
          onChange={handleText}
          id="text"
          type="text"
          value={text}
          placeholder="Hva vil du utsette?"
        />
        <button type="submit">Submit</button>
      </form>
      <TodoList todos={todos} status={status} removeTodo={removeTodo} />
    </>
  )
}

export default App
