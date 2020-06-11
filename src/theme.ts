import { Theme } from 'theme-ui'

export const white = '#fff'
export const lightGray = '#eee'
export const darkGray = '#888'
export const black = '#353839'
export const red = '#da322a'
export const green = '#42be65'
export const yellow = '#f1c21b'
export const blue = '#006bb4'

const font = `'Roboto', 'Fira Sans', Arial, sans-serif;`

export const opacities = [0.5, 0.7, 1]

export const theme: Partial<Theme> = {
  fonts: {
    body: font,
    heading: font,
  },
  colors: {
    text: black,
    background: white,

    primary: 'tomato',

    white,
    lightGray,
    black,
    red,
    green,
    yellow,
    blue,
  },
  fontSizes: [12, 14, 16, 18],
  fontWeights: [300, 400, 600],
  lineHeights: ['18px', '24px', '27px'],
  space: [0, '0.5rem', '1rem', '2rem'],
  sizes: [0, '1rem', '2rem', '4rem', '8rem'],
  radii: [0, 2],

  styles: {
    root: {
      fontFamily: 'body',
      color: 'black',
      body: {
        backgroundColor: 'white',
      },
    },
  },
}
