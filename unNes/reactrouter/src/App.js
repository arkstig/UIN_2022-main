import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import NoMatch from './components/NoMatch'
import Product from './components/Product'
import Products from './components/Products'

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hjem" element={<Home />} />
          <Route path="om" element={<About />} />
          <Route path="produkter">
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
