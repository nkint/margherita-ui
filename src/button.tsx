/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Button, ButtonProps } from 'theme-ui'

export const BTN: React.FC<ButtonProps> = ({ sx, ...props }) => (
  <Button sx={{ color: 'primary', bg: 'red', mx: '100px', ...sx }} {...props}>
    Hello Button
  </Button>
)
