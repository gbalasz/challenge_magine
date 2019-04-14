import React from 'react'
import { connect } from 'react-redux'
import { MainNav, PageHeader, Stage } from '../../components'

class MovieView extends React.Component {
  render () {
    const currentMovie = this.props.movies.list.find(m => m.id === this.props.match.params.idMovie)

    return (<div className="wrapper">
      <PageHeader title={currentMovie.name} />

      <Stage />

      <footer>
        <MainNav type="horizontal" active={currentMovie.id}/>
      </footer>
    </div>)
  }

  // componentDidMount () {
  //   const currentMovie = this.props.movies.list.find(m => m.id === this.props.match.params.idMovie)
  //   this.props.getMovieMetadata(this.props)
  // }
}

const mapStateToProps = (state) => {
  const { movies, show } = state

  return {
    movies,
    show
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
