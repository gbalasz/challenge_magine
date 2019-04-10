import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'

class MainNav extends React.Component {
  render () {
    if (this.props.movies.list === null) {
      return <div>Loading menu ...</div>
    }
    return <nav className="c-main-nav">
      <ul className="c-main-nav__list">
        { this.props.movies.list.map(movie => this.renderItem(movie)) }
      </ul>
    </nav>
  }

  renderItem (movie) {
    return <li className="c-main-nav__item" key={movie.id}>
      <Link to={`/movie/${movie.id}`}>{ movie.name }</Link>
    </li>
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
    loadMovies: () => dispatch(moviesActions.load())
  }
}

const connectedMainNav = connect(mapStateToProps, mapDispatchToProps)(MainNav)

export default connectedMainNav
