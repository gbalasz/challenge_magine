import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'

const componentClass = 'c-main-nav'
class MainNav extends React.Component {
  render () {
    let componentClassName = componentClass

    if (this.props.type) {
      componentClassName += ` ${componentClass}--${this.props.type}`
    }

    if (this.props.movies.list === null) {
      return <div className={componentClassName}>Loading menu ...</div>
    }
    return <nav className={componentClassName}>
      <ul className="c-main-nav__list">
        { this.props.type && this.props.type === 'horizontal' && this.renderHomeItem() }
        { this.props.movies.list.map(movie => this.renderItem(movie)) }
      </ul>
    </nav>
  }

  renderItem (movie) {
    if (this.props.active && this.props.active === movie.id) {
      return this.renderActiveItem(movie)
    }

    return <li className="c-main-nav__item" key={movie.id}>
      <Link to={`/movie/${movie.id}`}>{ movie.name }</Link>
    </li>
  }

  renderHomeItem () {
    return <li className="c-main-nav__item" key={0}>
      <Link to={`/home`}>Home</Link>
    </li>
  }

  renderActiveItem (movie) {
    return <li className="c-main-nav__item c-main-nav--active" key={movie.id}>
      <span className="c-main-nav__label">{ movie.name }</span>
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
