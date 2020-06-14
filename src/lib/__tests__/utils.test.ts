import { ifStyle, toPx } from '../utils'

describe('ifStyle', () => {
  it('Should apply return first set of style when the passed condition is true', () => {
    expect(ifStyle(true, { bg: 'primary' })).toEqual({ bg: 'primary' })
  })
  it('Should apply return second set of style when the passed condition is false', () => {
    expect(ifStyle(false, { bg: 'primary' }, { bg: 'secondary' })).toEqual({
      bg: 'secondary',
    })
  })
})
describe('Px util', () => {
  it('Should add fallback to px unit when a number is passed', () => {
    expect(toPx(10)).toBe('10px')
  })
  it('Should return a string when a string is passed', () => {
    expect(toPx('10rem')).toBe('10rem')
    expect(toPx('100%')).toBe('100%')
  })
  it('Should return undefined if no value is passed', () => {
    expect(toPx()).toBeUndefined()
  })
})
