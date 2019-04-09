import { moviesTypes } from '../types'

const initialState = {
  list: null
}

let movies = (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.MOVIES_UPDATE:
      return {
        list: action.movies
      }
    default:
      return state
  }
}

export {
  movies
}
