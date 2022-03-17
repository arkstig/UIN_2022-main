function Movie({ alt, src, title, year }) {
  // Lager en dynamics search
  return (
    <li>
      <div
        title={alt}
        style={{
          backgroundImage: `url(${src})`,
        }}
        className="pictureContainer"
      >
        <div className="textBackground">
          <h2>{title}</h2>
          <p>{year}</p>
        </div>
      </div>
    </li>
  )
}

export default Movie
