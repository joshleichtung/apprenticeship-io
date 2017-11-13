import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import ApprenticeTab from './components/ApprenticeTab'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = props => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
