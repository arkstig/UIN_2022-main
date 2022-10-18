import { Link } from 'react-router-dom'

export default function Product({ product }) {
  return (
    <article>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <Link to="/produkter">Tilbake til liste med produkter</Link>
    </article>
  )
}
