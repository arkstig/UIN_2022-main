import { useState, useEffect } from 'react'
import { getActors } from '../lib/services/actorService.js'
import ActorItem from './ActorItem.js'
import Layout from './Layout'

export default function Actors() {
  const [allActorsData, setAllActorsData] = useState(null)

  useEffect(() => {
    const getdata2 = async () => {
      try {
        const actor = await getActors()
        setAllActorsData(actor)
      } catch (error) {
        console.log(error)
      }
    }
    getdata2()
  }, [])

  return (
    <Layout>
      <h1>All Actors</h1>
      {allActorsData && allActorsData.length > 0 ? (
        allActorsData.map((actors) => (
          <ActorItem
            title={actors.fullname}
            key={actors.slug.current}
            link={actors.slug.current}
          />
        ))
      ) : (
        <p className="ingen">Finnes ingen skuespillere i din liste</p>
      )}
    </Layout>
  )
}
