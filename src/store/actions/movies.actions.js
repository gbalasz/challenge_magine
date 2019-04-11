import { moviesTypes } from '../types'

const moviesQuery = `{
  movies {
    id
    name
    manifest
  }
}`

export default {
  load
}

function load () {
  return async dispatch => {
    dispatch({ type: moviesTypes.MOVIES_REQUEST })

    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ query: moviesQuery })
      })

      const responseData = await response.json()

      dispatch(moviesLoaded(responseData.data.movies))
    } catch (e) {
      console.log(e)
    }
  }
}

function moviesLoaded (movies) {
  console.log('update')
  return { type: moviesTypes.MOVIES_UPDATE, movies }
}
