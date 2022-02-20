import { useState } from 'react'

function Todo({ id, text, removeTodo }) {
  const [status, setstatus] = useState(false)

  const getStatus = () => {
    setstatus(!status)
    console.log(status)
  }

  return (
    <article>
      <p>Id: {id}</p>
      <p>Todo: {text}</p>
      <p>Status: {status === true ? 'complete' : 'Not Completed'}</p>
      <button hidden={status} onClick={getStatus} type="button">
        complete
      </button>
      <button onClick={() => removeTodo(id)} type="button">
        Delete
      </button>
    </article>
  )
}

export default Todo
