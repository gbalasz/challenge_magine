/* global describe expect it */
import React from 'react'
import { PageHeader } from '../'
import { render, waitForElement } from 'react-testing-library'

describe('Test PageHeader component', () => {
  it('renders page header title', async () => {
    const TITLE = 'Magine'
    const { getByTestId, getByText } = render(<PageHeader title={ TITLE } />)

    expect(getByTestId('page-header-title').textContent).toBe(TITLE)
    await waitForElement(() => {
      return getByText(/Magine/i)
    })
  })
})
