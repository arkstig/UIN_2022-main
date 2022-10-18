import Todo from './Todo'

function TodoList({ todos, getStatus, removeTodo }) {
  return (
    <section>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            status={todo.status}
            getStatus={getStatus}
            removeTodo={removeTodo}
          />
        ))
      ) : (
        <p className="ingen">
          Du har ingenting mer å gjøre. Legg til en ny todo over, og få ting
          gjort!
        </p>
      )}
    </section>
  )
}

export default TodoList
