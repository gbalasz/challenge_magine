import React from 'react'
import { connect } from 'react-redux'
import { MainNav, PageHeader } from '../../components'

const MovieView = props => {
  console.log(props)
  const currentMovie = props.movies.list.find(m => m.id === props.match.params.idMovie)

  return (<div className="wrapper">
    <PageHeader title={currentMovie.name} />
    <footer>
      <MainNav type="horizontal" active={currentMovie.id}/>
    </footer>
  </div>)
}

const mapStateToProps = (state) => {
  const { movies } = state

  return {
    movies
  }
}

const mapDispatchToProps = (dispatch) => {
  // const moviesActions = actions.moviesActions
  // return {
  //   loadMovies: () => dispatch(moviesActions.load())
  // }
}

const connectedMovieView = connect(mapStateToProps)(MovieView)

export default connectedMovieView
