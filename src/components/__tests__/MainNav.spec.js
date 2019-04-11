/* global it describe afterEach expect */
// import React from 'react'
import fetchMock from 'fetch-mock'
import waitForActions from 'redux-mock-store-await-actions'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

// import { MainNav } from '../'
import { moviesTypes } from '../../store/types'
import actions from '../../store/actions'

const middlewares = [thunkMiddleware]
const createMockStore = (middlewares = []) => configureMockStore(middlewares)()

describe('Test MainNav - async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('loads movies list', async () => {
    const movies = [{
      id: 1,
      name: 'Test'
    }]

    fetchMock.post('/graphql', {
      body: { data: {
        movies
      } },
      headers: { 'content-type': 'application/json' }
    })

    const mockStore = createMockStore(middlewares)
    const expectedActions = [
      { type: moviesTypes.MOVIES_REQUEST },
      { type: moviesTypes.MOVIES_UPDATE }
    ]

    mockStore.dispatch(actions.moviesActions.load())

    await waitForActions(mockStore, expectedActions)

    expectedActions[1].movies = movies

    expect(mockStore.getActions()).toEqual(expectedActions)
  })
})
