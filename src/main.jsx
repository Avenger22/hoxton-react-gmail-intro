import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'

import './styles.css'

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)