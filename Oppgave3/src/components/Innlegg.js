import { useState } from 'react'

function Innlegg({ description, title, image }) {
  const [showhide, setShowhide] = useState(false)

  const getShowhide = () => {
    setShowhide(!showhide)
  }
  return (
    <article>
      <img alt="Bilde av noe" src={image} />
      <section>
        <h3>{title}</h3>
        <p>
          <button onClick={getShowhide} type="button">
            See more
          </button>
          {showhide ? <span>{description}</span> : null}
        </p>
      </section>
    </article>
  )
}

export default Innlegg
