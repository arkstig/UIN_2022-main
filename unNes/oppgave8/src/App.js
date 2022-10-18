import { Route, Routes } from 'react-router-dom'

import Actors from './components/Actors'
import Movies from './components/Movies'
import Navigation from './components/Navigation'
import Actor from './components/Actor'

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/actors" element={<Actors />}>
          <Route index element={<Actors />} />
          <Route path=":slug" element={<Actor />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  )
}

export default App
