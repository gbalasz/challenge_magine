/* global expect it */
import React from 'react'
import PageHeader from '../PageHeader.jsx'
import { render, waitForElement } from 'react-testing-library'

it('renders page header title', async () => {
  const TITLE = 'Magine'
  const { getByTestId, getByText } = render(<PageHeader title={ TITLE } />)

  expect(getByTestId('page-header-title').textContent).toBe(TITLE)
  await waitForElement(() => {
    return getByText(/Magine/i)
  })
})
