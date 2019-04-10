import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { DashboardView, MovieView } from './views'

export const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={ DashboardView } />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/movie/:idMovie" component={ MovieView } />
    </Switch>
  )
}
