import MyComponent from './components/MyComponent'
import { getQuizzes } from './lib/services/quiz'

function App() {
  // Write JavaScript, use Hooks, add state and more

  const getSanityData = () => {
    getQuizzes()
  }
  return (
    <main className="mx-auto mt-6 max-w-sm border-2 p-6">
      <p className="text-3xl font-bold underline">Add JSX</p>
      <p>Add components</p>
      <MyComponent />
      <button onClick={getSanityData}>Klikk meg</button>
    </main>
  )
}

export default App
