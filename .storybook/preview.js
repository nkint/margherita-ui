import { ThemeProvider } from 'theme-ui'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'

import { theme } from './theme'

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme]))
