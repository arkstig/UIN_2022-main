import Movie from './Movie'

function Movies({ movies, handleInput }) {
  return (
    <ul>
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          src={movie.Poster}
          alt={movie.Title}
          title={movie.Title}
          year={movie.Year}
          handleInput={handleInput}
        />
      ))}
    </ul>
  )
}

export default Movies
