import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Box } from 'theme-ui'
import { Toggle } from '../components/Toggle'

export default { title: 'Toggle' }

const ToggleWithState = ({ label, ...rest }: { label: string }) => {
  const [checked, setChecked] = useState(false)
  return (
    <Box>
      <Toggle
        checked={checked}
        disabled={false}
        onChange={(c: boolean) => setChecked(c)}
        {...rest}
      >
        {label}
      </Toggle>
    </Box>
  )
}

export const AllState = () => {
  return (
    <Box m={2}>
      <ToggleWithState label="Toggle checkbox" />
      <ToggleWithState
        label="Toggle with inline label"
        sx={{
          display: 'flex',
          alignItems: 'center',
          '* + *': {
            ml: 1,
          },
        }}
      />

      <Box>
        <Toggle
          checked={true}
          disabled={true}
          onChange={action('This is not going to happen')}
        >
          Disabled checked
        </Toggle>
      </Box>

      <Toggle
        checked={false}
        disabled={true}
        onChange={action('This is not going to happen')}
      >
        Disabled unchecked
      </Toggle>
    </Box>
  )
}

AllState.parameters = {
  docs: {
    storyDescription: 'This is a toggle component. 🚀',
  },
}
