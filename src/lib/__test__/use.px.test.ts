import { Theme } from 'theme-ui'
import { themeToPx } from '../use-px'

describe('themeToPx', () => {
  it('Should work if sizes is an array', () => {
    const theme: Theme = {
      sizes: [0, 4, 8],
    }

    const k = 1
    const result = themeToPx(theme, k, 'sizes')
    expect(result).toBe(theme.sizes![k])
  })

  it('Should work if sizes is a smaller array ', () => {
    const theme: Theme = {
      sizes: [0, 4, 8],
    }

    const k = 16
    const result = themeToPx(theme, k, 'sizes')
    expect(result).toBe('16px')
  })

  it('Should work if sizes a string array', () => {
    const theme: Theme = {
      sizes: [0, '4rem', '8rem'],
    }

    const k = 1
    const result = themeToPx(theme, k, 'sizes')
    expect(result).toBe(theme.sizes![k])
  })

  it('Should work if sizes is not defined', () => {
    const theme: Theme = {
      space: [0, '4rem', '8rem'],
    }

    const k = 1
    const result = themeToPx(theme, k, 'sizes')
    expect(result).toBe('1px')
  })

  it('Should work if sizes is an object', () => {
    const theme: Theme = {
      sizes: {
        small: 4,
        medium: 8,
        large: 16,
        sidebar: 320,
      },
    }

    const k = 'small'
    const result = themeToPx(theme, k, 'sizes')
    expect(result).toBe('4px')
  })

  it('Should work if sizes is an object but x is not a key', () => {
    const theme: Theme = {
      sizes: {
        small: 4,
        medium: 8,
        large: 16,
        sidebar: 320,
      },
    }

    const k = '2rem'
    const result = themeToPx(theme, k, 'sizes')
    expect(result).toBe('2rem')

    const k1 = '100%'
    const result1 = themeToPx(theme, k1, 'sizes')
    expect(result1).toBe('100%')
  })
})
