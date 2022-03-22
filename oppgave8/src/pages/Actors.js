import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getActors } from '../lib/services/movieService'

export default function Actors() {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState([])

  useEffect(() => {
    const listActors = async () => {
      setLoading(true)
      const data = await getActors()
      setLoading(false)
      setContent(data)
    }
    listActors()
  }, [])

  if (loading) {
    return <p>Henter data...</p>
  }
  return (
    <div>
      <h1 className="font-bold">Skuespillere</h1>
      <ul>
        {content?.map((actors) => (
          <li key={actors.slug}>
            <Link
              className="text-amber-900 hover:text-amber-400 "
              to={`/actors/${actors.slug}`}
            >
              {actors.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
