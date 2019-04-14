import { moviesTypes } from '../types'

const initialState = {
  active: null,
  list: null
}

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.MOVIES_UPDATE:
      return {
        ...state,
        list: action.movies
      }
    default:
      return state
  }
}
