import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ApprenticeTab from './components/ApprenticeTab'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = props => (
  <div>
    <Header />
    <ApprenticeTab />
    <Footer />
  </div>
)



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
