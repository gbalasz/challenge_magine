import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { DashboardView, MovieView } from './views'
import actions from './store/actions'

class AppComponent extends React.Component {
  render () {
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

  componentDidMount () {
    if (this.props.movies.list === null) {
      this.props.loadMovies()
    }
  }
}

const mapStateToProps = (state) => {
  const { movies } = state

  return {
    movies
  }
}

const mapDispatchToProps = (dispatch) => {
  const moviesActions = actions.moviesActions
  return {
    loadMovies: () => dispatch(moviesActions.load()),
    selectMovie: (id) => dispatch(moviesActions.select(id))
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)
