import { useState } from 'react'

function App() {
  // Write JavaScript, use Hooks, add state and more
  const pictures = [
    {
      id: 1,
      altText: 'The Beach',
      image:
        'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    },
    {
      id: 2,
      altText: 'Mountains',
      image:
        'https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      altText: 'Forest road',
      image:
        'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
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

  const [activeColor, setActiveColor] = useState('reset')
  const [bgColor, setBgColor] = useState(
    'linear-gradient(to right, rgba(0,223,247,0), rgba(0,24,255,0))'
  )

  const handleClickColor = (e) => {
    switch (e.target.value) {
      case 'blue':
        setBgColor(
          'linear-gradient(to right, rgba(0,223,247,0.2), rgba(0,24,255,0.2))'
        )
        setActiveColor(e.target.value)

        return
      case 'red':
        setBgColor(
          'linear-gradient(to right, rgba(247,147,0,0.2), rgba(255,70,0,0.2))'
        )
        setActiveColor(e.target.value)
        break
      case 'green':
        setBgColor(
          'linear-gradient(to right, rgba(173,247,0,0.2), rgba(0,255,96,0.2))'
        )
        setActiveColor(e.target.value)
        break
      case 'yellow':
        setBgColor(
          'linear-gradient(to right, rgba(240,247,0,0.2), rgba(255,199,0,0.2))'
        )
        setActiveColor(e.target.value)
        break
      case 'reset':
        setBgColor(
          'linear-gradient(to right, rgba(0,223,247,0), rgba(0,24,255,0))'
        )

        setActiveColor(e.target.value)
        break
      default:
        setBgColor(
          'linear-gradient(to right, rgba(0,223,247,0), rgba(0,24,255,0))'
        )

        break
    }
  }

  const [isShown, setIsShown] = useState(false)
  const [resetShown, resetIsShown] = useState(false)

  return (
    <main>
      <div className="container">
        <h1>Min nye slider, laget i react. </h1>
        <div className="containerRelative">
          <div
            title={slider.text}
            style={{
              backgroundImage: `${bgColor}, url(${slider.image})`,
            }}
            className="pictureContainer"
          />

          <div className="description">
            {isShown && <div className="descrPad">Use this filter</div>}
            {resetShown && <div className="descrPad">Reset filter</div>}
          </div>
          <nav>
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              onClick={handleClickColor}
              value="blue"
              type="button"
              className={activeColor === 'blue' ? 'activeColor one' : 'one'}
            />
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              onClick={handleClickColor}
              value="red"
              className={activeColor === 'red' ? 'activeColor two' : 'two'}
              type="button"
            />
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className={
                activeColor === 'green' ? 'activeColor three' : 'three'
              }
              type="button"
              onClick={handleClickColor}
              value="green"
            />
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className={activeColor === 'yellow' ? 'activeColor four' : 'four'}
              type="button"
              onClick={handleClickColor}
              value="yellow"
            />

            <button
              onMouseEnter={() => resetIsShown(true)}
              onMouseLeave={() => resetIsShown(false)}
              className={activeColor === 'reset' ? 'activeColor six' : 'six'}
              type="button"
              onClick={handleClickColor}
              value="reset"
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
