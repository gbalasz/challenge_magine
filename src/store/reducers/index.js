import { combineReducers } from 'redux'
import { movies } from './movies.reducer'
import { show } from './show.reducer'

const rootReducer = combineReducers({
  movies,
  show
})

export {
  rootReducer
}
