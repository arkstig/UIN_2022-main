import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyGetActors } from '../lib/services/MyActorService'

export default function Actor() {
  //   const [ActorContent, setActorContent] = useState({})
  //   const { slug } = useParams()

  //   const getActorContent = async () => {
  //     const data = await MyGetActors(slug)
  //     setActorContent(data)
  //   }
  // }
  // console.log(ActorContent)

  return (
    <div className="actor">
      <h2>{title}</h2>
    </div>
  )
}
