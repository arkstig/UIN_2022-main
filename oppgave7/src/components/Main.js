import { useEffect, useState } from 'react'
import Movies from './Movies'
import Search from './Search'

function Main() {
  // Write JavaScript, use Hooks, add state and more
  const [movies, setMovies] = useState()
  const [search, setSearch] = useState()
  // Bruker useffect for å vise 5 filmer med søkeordet star wars på starten.
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=star wars&apikey=306ec56b')
      .then((response) => response.json())
      .then((data) => setMovies(data.Search.splice(0, 5)))
      .catch((err) => console.log(err))
  }, [])

  const handleSearch = async (event) => {
    event.preventDefault()
    if (search) {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=306ec56b`
      )

      try {
        const data = await response.json()
        setMovies(data.Search)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Skriv inn filmtittel')
    }
  }

  const handleInput = (event) => {
    setSearch(event.currentTarget.value)
    console.log(search)
  }
  return (
    <main>
      <Search
        search={search}
        setSearch={setSearch}
        handleInput={handleInput}
        handleSearch={handleSearch}
      />
      <Movies movies={movies} />
    </main>
  )
}

export default Main
