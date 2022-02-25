import { useState } from 'react'

function App() {
  // Write JavaScript, use Hooks, add state and more
  const pictures = [
    {
      id: 1,
      altText: 'Mountains',
      image:
        'https://images.unsplash.com/photo-1645702541728-340ea6af560a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1913&q=80',
    },
    {
      id: 2,
      altText: 'The fox',
      image:
        'https://images.unsplash.com/photo-1635834887704-18e67ae7ceba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
    },
    {
      id: 3,
      altText: 'A women walking',
      image:
        'https://images.unsplash.com/photo-1645785512235-d76e6898ceaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
  ]

  const [slider, setSlider] = useState(pictures[0])

  const [active, setActive] = useState('0')
  const handleClick = (event) => {
    event.preventDefault()
    console.log('clicked')
    setSlider(pictures[event.currentTarget.id])
    switch (event.currentTarget.id) {
      case '0':
        setActive(event.currentTarget.id)
        return
      case '1':
        setActive(event.currentTarget.id)
        break
      case '2':
        setActive(event.currentTarget.id)
        break
      default:
        break
    }
  }

  const [activeColor, setActiveColor] = useState('')

  const [bgColor, setBgColor] = useState('')
  const handleClickColor = (e) => {
    switch (e.target.value) {
      case 'blue':
        setBgColor('hue-rotate(240deg)')
        setActiveColor(e.target.value)
        return
      case 'red':
        setBgColor('hue-rotate(20deg)')
        setActiveColor(e.target.value)
        break
      case 'green':
        setBgColor('hue-rotate(120deg)')
        setActiveColor(e.target.value)
        break
      case 'yellow':
        setBgColor('hue-rotate(60deg)')
        setActiveColor(e.target.value)
        break
      case 'grey':
        setBgColor('grayscale(100%)')
        setActiveColor(e.target.value)
        break
      default:
        setBgColor('')
        break
    }
  }

  return (
    <main>
      <div className="container">
        <h1>Min nye slider, laget i react. </h1>
        <div className="containerRelative">
          <div
            title={slider.text}
            style={{
              backgroundImage: `url(${slider.image})`,
              filter: bgColor,
            }}
            className="pictureContainer"
          />
          <nav>
            <button
              onClick={handleClickColor}
              value="blue"
              type="button"
              className={activeColor === 'blue' ? 'activeColor one' : 'one'}
            />
            <button
              onClick={handleClickColor}
              value="red"
              className={activeColor === 'red' ? 'activeColor two' : 'two'}
              type="button"
            />
            <button
              className={
                activeColor === 'green' ? 'activeColor three' : 'three'
              }
              type="button"
              onClick={handleClickColor}
              value="green"
            />
            <button
              className={activeColor === 'yellow' ? 'activeColor four' : 'four'}
              type="button"
              onClick={handleClickColor}
              value="yellow"
            />
            <button
              className={activeColor === 'grey' ? 'activeColor five' : 'five'}
              type="button"
              onClick={handleClickColor}
              value="grey"
            />
          </nav>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
          accumsan risus. Aliquam erat volutpat. Suspendisse non efficitur nisl.
          Suspendisse potenti. Mauris nec lacus eu magna consequat finibus.
          Integer vel eleifend orci.
        </p>
        <button
          onClick={handleClick}
          id="0"
          className={active === '0' ? 'active sliderBtn' : 'sliderBtn'}
          type="button"
        >
          1
        </button>
        <button
          onClick={handleClick}
          id="1"
          className={active === '1' ? 'active sliderBtn' : 'sliderBtn'}
          type="button"
        >
          2
        </button>
        <button
          onClick={handleClick}
          id="2"
          className={active === '2' ? 'active sliderBtn' : 'sliderBtn'}
          type="button"
        >
          3
        </button>
      </div>
    </main>
  )
}

export default App
