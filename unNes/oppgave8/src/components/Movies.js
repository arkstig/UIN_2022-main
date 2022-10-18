import { useState, useEffect } from 'react'
import Movie from './Movie.js'
import Layout from './Layout'
import { getMovies } from '../lib/services/MovieService.js'

export default function Movies() {
  const [allMoviesData, setAllMoviesData] = useState(null)

  useEffect(() => {
    const getdata = async () => {
      try {
        const movies = await getMovies()
        setAllMoviesData(movies)
      } catch (error) {
        console.log(error)
      }
    }
    getdata()
  }, [])

  return (
    <Layout>
      <h1>All movies</h1>
      {allMoviesData && allMoviesData.length > 0 ? (
        allMoviesData.map((movies) => (
          <Movie
            actor={movies.actor.fullname}
            title={movies.title}
            key={movies.slug.current}
          />
        ))
      ) : (
        <p className="ingen">Finnes ingen filmer i din liste</p>
      )}
    </Layout>
  )
}
