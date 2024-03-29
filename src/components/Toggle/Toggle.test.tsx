import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from './Toggle'

describe('Toggle Component', () => {
  it('Should work as expected', () => {
    const handleChange = jest.fn()
    render(
      <Toggle checked={false} disabled={false} onChange={handleChange}>
        My accessible Toggle
      </Toggle>,
    )

    expect(screen.getByLabelText('My accessible Toggle')).toHaveStyle('cursor: auto;')
    expect(screen.getByTestId('ToggleHandler')).toHaveStyle(
      'background-color: lightGray;',
    )
    userEvent.click(screen.getByTestId('ToggleInput'))
    expect(handleChange).toHaveBeenCalledWith(true)
  })
})
