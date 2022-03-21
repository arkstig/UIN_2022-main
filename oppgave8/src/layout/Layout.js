import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className=" flex h-screen w-screen items-center justify-center">
      <Outlet />
    </main>
  )
}
