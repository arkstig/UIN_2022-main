import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'brown' : 'black',
  })
  return (
    <nav className="fixed w-screen">
      <div className="flex-colum flex">
        <NavLink
          style={linkStyle}
          className=" flex h-40 w-1/2 items-center justify-center bg-amber-50 p-4 hover:bg-amber-400  active:bg-amber-500 "
          to="/actors"
        >
          <h2 className="font-extrabold">Skuespillere</h2>
        </NavLink>

        <NavLink
          style={linkStyle}
          to="/movies"
          className="flex w-1/2 items-center justify-center	bg-amber-50 p-4 hover:bg-amber-400  active:bg-amber-500"
        >
          <h2 className="font-extrabold">Filmer</h2>
        </NavLink>
      </div>
    </nav>
  )
}
