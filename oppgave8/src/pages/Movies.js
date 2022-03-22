import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getMovies } from '../lib/services/movieService'

export default function Movies() {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState([])

  useEffect(() => {
    const listMovies = async () => {
      setLoading(true)
      const data = await getMovies()
      setLoading(false)
      setContent(data)
    }
    listMovies()
  }, [])

  if (loading) {
    return <p>Henter data...</p>
  }
  return (
    <div>
      <h1 className="font-bold">Movies</h1>
      <ul>
        {content?.map((movies) => (
          <li key={movies.slug}>
            <Link
              className="text-amber-900 hover:text-amber-400 "
              to={`/movies/${movies.slug}`}
            >
              {movies.title}
            </Link>
            <h2>{movies.actors}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
