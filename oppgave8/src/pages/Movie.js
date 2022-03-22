import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieBySlug } from '../lib/services/movieService'

export default function Movie() {
  const [content, setContent] = useState([])
  const { slug } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true)

      const data = await getMovieBySlug(slug)
      setLoading(false)

      setContent(data)
    }
    getMovie()
  }, [])

  if (loading) {
    return <p>Henter data...</p>
  }

  return (
    <div>
      <h1>{content.title}</h1>
    </div>
  )
}
