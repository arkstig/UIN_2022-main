import ReactDOM from 'react-dom'

// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
// import './styles.css'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

// TODO: Kommenter ut om du ønsker å bruke .scss
;('./styles/scss/main.scss')

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
