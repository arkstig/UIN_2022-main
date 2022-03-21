import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieBySlug } from '../lib/services/movieService'

export default function Movie() {
  const [content, setContent] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    const getMovie = async () => {
      const data = await getMovieBySlug(slug)
      setContent(data)
    }
    getMovie()
  }, [])

  return (
    <div>
      <h1>{content.title}</h1>
    </div>
  )
}
