/* global it describe afterEach expect */
import React from 'react'
import fetchMock from 'fetch-mock'
// import { render, waitForElement } from 'react-testing-library'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { MainNav } from '../'
import { moviesTypes } from '../../store/types'
import actions from '../../store/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Test MainNav - async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('renders main navigation', async () => {
    fetchMock.post('/graphql', {
      body: { data: {
        movies: [{
          id: 1,
          name: 'Test'
        }]
      } },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: moviesTypes.MOVIES_REQUEST },
      { type: moviesTypes.MOVIES_UPDATE, body: { movies: [] } }
    ]
    const store = mockStore({ movies: [] })

    return store.dispatch(actions.moviesActions.load())
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })

    // const { getByText } = render(<MainNav />)
    //
    // await waitForElement(() => {
    //   return getByText(/Star Trek/i)
    // })
  })
})
