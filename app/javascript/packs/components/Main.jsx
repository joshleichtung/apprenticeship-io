import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ApprenticeTab from './ApprenticeTab'
import ApprenticeInfo from './ApprenticeInfo'

const Main = props => (
  <main className='main-content'>
    <Switch>
      <Route exact path='/hall_of_fame' component={ApprenticeTab} />
      <Route exact path='/profile' component={ApprenticeInfo} />
    </Switch>
  </main>
)

export default Main
