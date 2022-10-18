import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/hjem">hjem</Link>
        </li>
        <li>
          <Link to="/om">om</Link>
        </li>
        <li>
          <Link to="/produkter">Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
