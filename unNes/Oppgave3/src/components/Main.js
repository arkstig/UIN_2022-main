import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function Main() {
  const [comment, setComment] = useState([])
  const [text, setText] = useState('')
  console.log(comment)

  const handleText = (event) => {
    setText(event.target.value)
    console.log(text)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = uuid()
    setComment((prev) => [...prev, { id, text }])
    setText('')
  }
  return (
    <main>
      <h1>Overskrift</h1>
      <span className="forfatter">av Nora Nordman</span>
      <p className="artikkelTekst">
        Humblebrag single-origin coffee tilde, +1 bespoke trust fund unicorn
        kombucha affogato etsy distillery viral pok pok. Tousled bespoke you
        probably haven't heard of them stumptown pour-over. Shaman taxidermy
        pickled austin readymade pinterest tumeric aesthetic viral keffiyeh
        quinoa venmo distillery tousled.
      </p>
      <p>Kommentarer:</p>

      <form onSubmit={handleSubmit} className="form">
        <h2>Legg igjen en kommentar</h2>
        <label htmlFor="comment">
          Kommentar
          <textarea
            onChange={handleText}
            id="text"
            type="text"
            cols={15}
            rows={5}
            value={text}
          />
          <button type="submit">Send</button>
        </label>
      </form>
    </main>
  )
}

export default Main
