import { useState } from 'react'

function Todo({ id, text, removeTodo }) {
  const [status, setstatus] = useState(false)

  const getStatus = () => {
    setstatus(!status)
    console.log(status)
  }

  return (
    <article>
      <p>
        <h2>Id:</h2> {id}
      </p>
      <p>
        <h2>Todo:</h2> {text}
      </p>
      <p>
        <h2>Status:</h2> {status === true ? 'complete' : 'Not Completed'}
      </p>
      <button hidden={status} onClick={getStatus} type="button">
        complete
      </button>
      <button
        className="deleteBtn"
        onClick={() => removeTodo(id)}
        type="button"
      >
        Delete
      </button>
    </article>
  )
}

export default Todo
