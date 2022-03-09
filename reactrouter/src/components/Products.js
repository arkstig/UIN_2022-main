import { Link, Outlet } from 'react-router-dom'

export default function Products() {
  const products = [
    { id: '1', title: 'Product 1', description: 'Lorem ipsum dolor sit amet.' },
    { id: '2', title: 'Product 2', description: 'Lorem ipsum dolor sit amet.' },
    { id: '3', title: 'Product 3', description: 'Lorem ipsum dolor sit amet.' },
    { id: '4', title: 'Product 4', description: 'Lorem ipsum dolor sit amet.' },
    { id: '5', title: 'Product 5', description: 'Lorem ipsum dolor sit amet.' },

  return (
    <section>
      {/* Bruker .map for å skrive ut listen med produkter */}
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.title}</h2>
          {/* Linker til produkt */}
          <Link to={`${product.id}`}>Gå til produkt</Link>
        </article>
      ))}
      {/* Ved å bruke outlet vises Product sammen med Products */}
      {/* Får med andre ord ikke en egen side */}
      {/* <Outlet /> */}
    </section>
  )
}
