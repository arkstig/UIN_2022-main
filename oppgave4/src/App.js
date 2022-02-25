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
      altText: 'A camera',
      image:
        'https://images.unsplash.com/photo-1645584376036-67b47e31c6e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
  ]

  const [slider, setSlider] = useState(pictures[0])

  const handleClick = (event) => {
    event.preventDefault()
    console.log('clicked')
    setSlider(pictures[event.currentTarget.id])
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

  const [bgColor, setBgColor] = useState('')
  const handleClickColor = (e) => {
    switch (e.target.value) {
      case 'blue':
        return setBgColor('hue-rotate(30deg)')
      case 'red':
        return setBgColor('hue-rotate(90deg)')
      default:
        return setBgColor('')
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
              className="one"
              type="button"
            />
            <button
              onClick={handleClickColor}
              value="red"
              className="two"
              type="button"
            />
            <button className="three" type="button" />
            <button className="four" type="button" />
            <button className="five" type="button" />
          </nav>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
          accumsan risus. Aliquam erat volutpat. Suspendisse non efficitur nisl.
          Suspendisse potenti. Mauris nec lacus eu magna consequat finibus.
          Integer vel eleifend orci. Sed at quam vehicula, iaculis lorem sit
          amet, ultrices nisi. Nullam ut finibus diam, sit amet bibendum purus.
          Phasellus tempor consectetur mi id auctor. Nunc vestibulum placerat
          orci, nec mattis nisl commodo a. Fusce laoreet nibh sed ullamcorper
          volutpat. Sed ullamcorper pharetra quam. Integer ac faucibus felis.
        </p>
        <button
          onClick={handleClick}
          id="0"
          className="sliderBtn"
          type="button"
        >
          1
        </button>
        <button
          onClick={handleClick}
          id="1"
          className="sliderBtn"
          type="button"
        >
          2
        </button>
        <button
          onClick={handleClick}
          id="2"
          className="sliderBtn"
          type="button"
        >
          3
        </button>
      </div>
    </main>
  )
}

export default App
