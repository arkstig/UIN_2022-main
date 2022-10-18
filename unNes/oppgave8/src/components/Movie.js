export default function Movie({ title, actor }) {
  return (
    <div className="movie">
      <h2>Film: {title}</h2>
      <p>Skuespiller: {actor}</p>
    </div>
  )
}
