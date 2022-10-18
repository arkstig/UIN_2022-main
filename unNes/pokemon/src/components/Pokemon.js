import { useState } from 'react'

export default function Pokemon({ url, name }) {
  const [experience, setExperience] = useState(false)

  const getPokemon = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setExperience(data.base_experience)
  }

  // const showExperience = () => {
  //   setShow(!show)
  // }

  return (
    <article>
      <h2>{name}</h2>
      {experience ? <p>{experience}</p> : null}
      <button onClick={() => getPokemon(url)} type="button">
        See experience
      </button>
    </article>
  )
}
