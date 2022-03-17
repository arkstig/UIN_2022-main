import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

import Quiz from './pages/Quiz'
import Quizzes from './pages/Quizzes'

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <Routes>
      {/* Gir konsistent layout (Main) på alle ruter */}
      <Route element={<Layout />}>
        {/* /quiz */}
        <Route path="quiz">
          {/* /quiz */}
          <Route index element={<Quizzes />} />
          {/* /quiz/et-eller-annet */}
          <Route path=":slug" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
