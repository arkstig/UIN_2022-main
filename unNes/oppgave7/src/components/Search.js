function Search({
  handleSearch,

  handleInput,
}) {
  return (
    <form onSubmit={handleSearch}>
      <input onChange={handleInput} placeholder="Søk på en film" type="text" />
      <button type="submit">Søk</button>
    </form>
  )
}

export default Search
