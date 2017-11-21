import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ApprenticeTab from './ApprenticeTab'

const Main = props => (
  <main className='main-content'>
    <Switch>
      <Route exact path='/hall_of_fame' component={ApprenticeTab} />
    </Switch>
  </main>
)

export default Main
