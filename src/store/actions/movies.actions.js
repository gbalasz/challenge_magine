import { store } from '../'
import { moviesTypes } from '../types'

// hoisting export
export default {
  load
}

function load () {
  return async dispatch => {
    try {
      let response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ query: `{
  movies {
    id
    name
    manifest
  }
}` })
      })
      // .then(r => r.json())
      // .then(data => console.log('data returned:', data))

      const responseData = await response.json()

      console.log(responseData)

      store.dispatch(moviesLoaded(responseData.data.movies))
    } catch (e) {
      console.log(e)
    }
  }
}

function moviesLoaded (movies) {
  return { type: moviesTypes.MOVIES_UPDATE, movies }
}
