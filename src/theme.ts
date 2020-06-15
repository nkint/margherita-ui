import { Theme } from 'theme-ui'

const font = `'Roboto', 'Fira Sans', Arial, sans-serif;`

export const theme: Theme = {
  fonts: {
    body: font,
    heading: font,
  },
  colors: {
    text: '#353839',
    background: '#fff',

    primary: 'tomato',

    lightGray: '#eee',
    darkGray: '#888',
    error: '#da322a',
    green: '#42be65',
    yellow: '#f1c21b',
    blue: '#006bb4',
  },
  fontSizes: [12, 14, 16, 18],
  fontWeights: [300, 400, 600],
  lineHeights: ['18px', '24px', '27px'],
  space: [0, '0.5rem', '1rem', '2rem'],
  sizes: [0, '0.875rem', '1.75rem', '1rem', '2rem', '4rem', '8rem'],
  radii: [0, 2],

  shadows: ['none', 'rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.2) 0 1px 3px 0'],

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
