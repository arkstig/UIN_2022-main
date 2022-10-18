import { useState } from 'react'

function Form() {
  const [comment, setComment] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const addComment = (event) => {
    event.preventDefault()
    setLoading(true)
    console.log(comment)
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
    }, 2000)
  }

  return (
    <div>
      <form method="POST" onSubmit={addComment}>
        <h2>Legg igjen en kommentar</h2>
        <label htmlFor="comment">
          Kommentar
          <textarea
            id="comment"
            name="comment"
            cols={15}
            rows={5}
            onChange={handleCommentChange}
            value={comment}
          />
        </label>
        <button type="submit">{loading ? 'Sender ...' : 'Send'}</button>
        {success ? <p>Kommentar sendt</p> : null}
      </form>
    </div>
  )
}

export default Form
