import React from 'react'
import { Box } from 'theme-ui'
import { Slider } from '../components/Slider'

export default { title: 'Slider' }

export const AllState = () => (
  <Box m={2}>
    <Slider label={'Slider enabled'} value={0.2} />
    <Slider label={'Slider disabled'} disabled value={0.2} />
  </Box>
)
