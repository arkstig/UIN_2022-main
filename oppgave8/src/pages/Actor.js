import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getActorBySlug } from '../lib/services/movieService'

export default function Actor() {
  const [content, setContent] = useState([])
  const { slug } = useParams()
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getActor = async () => {
      setLoading(true)
      const data = await getActorBySlug(slug)
      setLoading(false)
      setContent(data)
      setRelated(data.relatedMovies)
    }
    getActor()
  }, [])

  if (loading) {
    return <p>Henter data...</p>
  }
  return (
    <div className="min-w-500">
      <h1 className="text-lg font-bold">{content.title}</h1>
      <p className="font-c italic">Filmer {content.title} spiller i:</p>
      <ul>
        {related?.map((relate, index) => (
          <li key={index}>
            <p>{relate.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
