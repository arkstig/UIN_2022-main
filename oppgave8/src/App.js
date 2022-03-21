import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

import Actors from './pages/Actors'
import Actor from './pages/Actor'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import Navigation from './components/Navigation'

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>
        {/* Gir konsistent layout (Main) på alle ruter */}
        <Route element={<Layout />}>
          <Route path="/" element={<Actors />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":slug" element={<Movie />} />
          </Route>
          <Route path="actors">
            <Route index element={<Actors />} />
            <Route path=":slug" element={<Actor />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
