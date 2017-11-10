import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ApprenticeTab from './ApprenticeTab'

const Main = props => (
  <Switch>
    <Route exact path='/hall_of_fame' component={ApprenticeTab} />
  </Switch>
)

export default Main
