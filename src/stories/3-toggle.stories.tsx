import React from 'react'
import { action } from '@storybook/addon-actions'
import { Box } from 'theme-ui'
import { Toggle } from '../components/Toggle'

export default { title: 'Toggle' }

export const AllState = () => (
  <Box m={2}>
    <Box>
      <Toggle checked={true} disabled={false} onChange={action('clicked')}>
        Enabled checked
      </Toggle>
    </Box>
    <Box>
      <Toggle checked={false} disabled={false} onChange={action('clicked')}>
        Enabled unchecked
      </Toggle>
    </Box>
    <Box>
      <Toggle checked={true} disabled={true} onChange={action('clicked')}>
        Disabled checked
      </Toggle>
    </Box>

    <Toggle checked={false} disabled={true} onChange={action('clicked')}>
      Disabled unchecked
    </Toggle>
  </Box>
)
