import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'

const appContainer = document.getElementById('App')

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), appContainer)
