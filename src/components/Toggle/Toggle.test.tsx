import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from './Toggle'
import { ThemeProvider } from 'theme-ui'

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

  describe('Should get width and height', () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('from theme', () => {
      const theme = {
        space: [0, '0.5rem', '1rem', '2rem'],
        sizes: [0, '0.875rem', '1.75rem', '1rem', '2rem', '4rem', '8rem'],
        radii: [0, 2],
      }
      render(
        <ThemeProvider theme={theme}>
          <Toggle>My accessible Toggle</Toggle>,
        </ThemeProvider>,
      )
      expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`width: ${theme.sizes[2]}`)
      expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`height: ${theme.sizes[1]}`)
    })

    it('from props', () => {
      const theme = {
        space: [0, '0.5rem', '1rem', '2rem'],
        sizes: [0, '0.875rem', '1.75rem', '1rem', '2rem', '4rem', '8rem'],
        radii: [0, 2],
      }
      render(
        <ThemeProvider theme={theme}>
          <Toggle width="5px" height="10px">
            My accessible Toggle
          </Toggle>
        </ThemeProvider>,
      )
      expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`width: 5px`)
      expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`height: 10px`)
    })

    it('from sx', () => {
      const theme = {
        space: [0, '0.5rem', '1rem', '2rem'],
        sizes: [0, '0.875rem', '1.75rem', '1rem', '2rem', '4rem', '8rem'],
        radii: [0, 2],
      }
      render(
        <ThemeProvider theme={theme}>
          <Toggle sx={{ 'div, span': { width: '5px', height: '10px' } }}>
            My accessible Toggle
          </Toggle>
        </ThemeProvider>,
      )
      expect(screen.getByTestId('ToggleHandler')).toBeInTheDocument()
      expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`width: 5px`)
      expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`height: 10px`)
    })

    // it('from sx', () => {
    //   const theme = {
    //     space: [0, '0.5rem', '1rem', '2rem'],
    //     sizes: [0, '0.875rem', '1.75rem', '1rem', '2rem', '4rem', '8rem'],
    //     radii: [0, 2],
    //   }

    //   render(
    //     <ThemeProvider theme={theme}>
    //       <Toggle width="5px" height="10px">
    //         My accessible Toggle
    //       </Toggle>
    //     </ThemeProvider>,
    //   )

    //   expect(screen.getByTestId('ToggleHandler')).toHaveStyle(
    //     'background-color: lightGray;',
    //   )

    //   // expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`width: 5px`)
    //   // expect(screen.getByTestId('ToggleHandler')).toHaveStyle(`height: 10px`)
    // })
  })

  describe('Should get color and background', () => {
    it('from theme', () => {})
    it('from props', () => {})
    it('from sx', () => {})
  })
  it('Should take thumb style from forms.toggle.thumb', () => {})

  it('Should work as controlled input', () => {})

  it('Should work as uncontrolled input', () => {})

  it('Should work inside a form', () => {})
})
