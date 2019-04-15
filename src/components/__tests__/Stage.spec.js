/* global expect describe it */
import React from 'react'
import { Stage } from '../stage/Stage'
import { render, waitForElement } from 'react-testing-library'
import waitForActions from 'redux-mock-store-await-actions'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import actions from '../../store/actions'

const middlewares = [thunkMiddleware]
const createMockStore = (middlewares = []) => configureMockStore(middlewares)()

describe('Test Stage component', () => {
  it('renders as expected', async () => {
    const mockStore = createMockStore(middlewares)
    const expectedActions = [
      { type: 'SHOW_VIDEO_DURATION', duration: 1 }
    ]
    const showActions = actions.showActions

    mockStore.dispatch(showActions.videoDuration(1))

    await waitForActions(mockStore, expectedActions)

    expect(mockStore.getActions()).toEqual(expectedActions)
  })
})
