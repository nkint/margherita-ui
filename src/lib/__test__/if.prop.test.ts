import { ifStyle } from '../if-prop'

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
