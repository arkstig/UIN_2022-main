import { useState } from 'react'
import Nav from './components/Nav'
import PageLeft from './components/PageLeft'
import PageRight from './components/PageRight'
import './styles.css'

function App() {
  // Statisk liste for overskrifter
  const contentList = [
    {
      id: 1,
      headerLeft: 'Design',
      headerRight: 'Design',
      image:
        'https://images.unsplash.com/photo-1645263023413-65ada06b3257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      headerLeft: 'Programming',
      headerRight: 'Programming',
      image:
        'https://images.unsplash.com/photo-1645263023413-65ada06b3257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      headerLeft: 'Support',
      headerRight: 'Support',
      image:
        'https://images.unsplash.com/photo-1645263023413-65ada06b3257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      text: 'Lorem ipsum dolor sit amet',
    },
  ]

  const [current, setCurrent] = useState(contentList[0])

  // Når en trykker på en av knappene
  const handleClick = (event) => {
    event.preventDefault()
    console.log('clicked')
    setCurrent(contentList[event.currentTarget.id])
    switch (event.currentTarget.id) {
      case '0':
        break
      case '1':
        break
      case '2':
        break
      default:
        break
    }
  }

  return (
    <>
      <Nav handleClick={handleClick} />
      <main>
        <PageLeft current={current} />
        <PageRight current={current} />
      </main>
    </>
  )
}

export default App
