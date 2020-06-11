import React from 'react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../src/theme'
import { Toggle } from '../src/toggle'

export default { title: 'Toggle' }

const StatusLabel: React.FC = ({ children }) => (
  <p style={{ marginBottom: 0 }}>{children}</p>
)

export const AllState = () => (
  <ThemeProvider theme={theme}>
    <div style={{ margin: '2rem' }}>
      <StatusLabel>Enabled checked</StatusLabel>
      <Toggle checked={true} disabled={false} onChange={action('clicked')} />

      <StatusLabel>Enabled unchecked</StatusLabel>
      <Toggle checked={false} disabled={false} onChange={action('clicked')} />

      <StatusLabel>Disabled checked</StatusLabel>
      <Toggle checked={true} disabled={true} onChange={action('clicked')} />

      <StatusLabel>Disabled unchecked</StatusLabel>
      <Toggle checked={false} disabled={true} onChange={action('clicked')} />
    </div>
  </ThemeProvider>
)
