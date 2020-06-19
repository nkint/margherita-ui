import React from 'react'
import { ThemeProvider, Theme } from 'theme-ui'
import { screen, render } from '@testing-library/react'
import { Toggle } from './Toggle'

const theme: Theme = {
  colors: {
    background: 'white',
    text: 'black',
    primary: 'tomato',
  },
  space: [0, '0.5rem', '1rem', '2rem'],
  sizes: [0, '0.875rem', '1.75rem', '1rem', '2rem', '4rem', '8rem'],
  radii: [0, 2],
}

describe('Toggle Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  // it('Should work as expected', () => {
  //   const handleChange = jest.fn()
  //   render(
  //     <Toggle checked={false} disabled={false} onChange={handleChange}>
  //       My accessible Toggle
  //     </Toggle>,
  //   )

  //   expect(screen.getByLabelText('My accessible Toggle')).toHaveStyle('cursor: auto;')
  //   expect(screen.getByTestId('ToggleHandler')).toHaveStyle(
  //     'background-color: lightGray;',
  //   )
  //   userEvent.click(screen.getByTestId('ToggleInput'))
  //   expect(handleChange).toHaveBeenCalledWith(true)
  // })

  describe('Should get width and height', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('from theme', () => {
      const ref = React.createRef<HTMLLabelElement>()

      const dataTestId = 'ToggleHandler'

      render(
        <ThemeProvider theme={theme}>
          <Toggle ref={ref} containerProps={{ 'data-testid': dataTestId }}>
            My accessible Toggle
          </Toggle>
        </ThemeProvider>,
      )
      expect(screen.getByTestId(dataTestId)).toHaveStyle(`width: ${theme.sizes![2]}`)
      expect(screen.getByTestId(dataTestId)).toHaveStyle(`height: ${theme.sizes![1]}`)
    })

    it('from props', () => {
      const dataTestId = 'ToggleHandler'

      render(
        <ThemeProvider theme={theme}>
          <Toggle
            width="5px"
            height="10px"
            containerProps={{ 'data-testid': dataTestId }}
          >
            My accessible Toggle
          </Toggle>
        </ThemeProvider>,
      )
      expect(screen.getByTestId(dataTestId)).toHaveStyle(`width: 5px`)
      expect(screen.getByTestId(dataTestId)).toHaveStyle(`height: 10px`)
    })
  })

  describe('Should get color and background', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it.only('from theme', () => {
      const dataTestId = 'ToggleHandler'
      const dataTestInputId = 'ToggleInput'

      render(
        <ThemeProvider theme={theme}>
          <Toggle
            checked={true}
            disabled={false}
            containerProps={{ 'data-testid': dataTestId }}
            inputProps={{ 'data-testid': dataTestInputId }}
          >
            My accessible Toggle
          </Toggle>
        </ThemeProvider>,
      )
      const r = screen.getByTestId(dataTestId)
      const r1 = screen.getByTestId(dataTestInputId)
      console.log({ rNode: r.ownerDocument.defaultView!.getComputedStyle(r) })
      expect(r1).toHaveAttribute('checked', '')
      expect(r).toHaveStyle(`background-color: tomato`)
      expect(r).toHaveStyle(`color: black`)
    })

    it('from props', () => {})
  })
  it('Should take thumb style from forms.toggle.thumb', () => {})

  it('Should work as controlled input', () => {})

  it('Should work as uncontrolled input', () => {})

  it('Should work inside a form', () => {})
})
