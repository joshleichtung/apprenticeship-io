import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ApprenticeTab from './components/ApprenticeTab'

const Home = props => (
  <div>
    <ApprenticeTab />
  </div>
)



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
