import React from 'react'
import { action } from '@storybook/addon-actions'
import { Box, Text } from 'theme-ui'
import { Toggle } from '../src/toggleComponentized'

export default { title: 'Toggle' }

const StatusLabel: React.FC = ({ children }) => <Text>{children}</Text>

export const AllState = () => (
  <Box m={2}>
    <StatusLabel>Enabled checked</StatusLabel>
    <Toggle checked={true} disabled={false} onChange={action('clicked')} />

    <StatusLabel>Enabled unchecked</StatusLabel>
    <Toggle checked={false} disabled={false} onChange={action('clicked')} />

    <StatusLabel>Disabled checked</StatusLabel>
    <Toggle checked={true} disabled={true} onChange={action('clicked')} />

    <StatusLabel>Disabled unchecked</StatusLabel>
    <Toggle checked={false} disabled={true} onChange={action('clicked')} />
  </Box>
)
