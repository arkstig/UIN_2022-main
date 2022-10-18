import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    border: isActive ? '2px solid #a9a9a9' : 'none',
  })

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" style={linkStyle}>
            actors
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" style={linkStyle}>
            movies
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
