import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="fixed w-screen">
      <div className="flex-colum flex">
        <NavLink
          className="flex w-1/2 items-center justify-center bg-slate-500 p-4 hover:bg-violet-600 active:bg-violet-700"
          to="/actors"
        >
          Skuespillere
        </NavLink>

        <NavLink
          to="/movies"
          className="flex w-1/2 items-center justify-center	bg-slate-500 p-4 hover:bg-violet-600 active:bg-violet-700"
        >
          Filmer
        </NavLink>
      </div>
    </nav>
  )
}
