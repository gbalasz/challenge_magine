import { moviesTypes } from '../types'
import * as showActions from './show.actions'

const moviesQuery = `{
  movies {
    id
    name
    manifest
  }
}`

export const load = () => {
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

export const select = id => {
  return showActions.selectMovie(id)
}

function moviesLoaded (movies) {
  return { type: moviesTypes.MOVIES_UPDATE, movies }
}

export default {
  load,
  select
}
