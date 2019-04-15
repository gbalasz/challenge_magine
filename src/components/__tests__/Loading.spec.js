/* global describe it */
import React from 'react'
import { Loading } from '../'
import { render, waitForElement } from 'react-testing-library'

describe('Test Loading component', () => {
  it('renders as expected', async () => {
    const { getByTestId } = render(<Loading />)

    await waitForElement(() => {
      return getByTestId('loading').classList.contains('c-loading')
    })
  })
})
