import React from 'react'
import { Box, BoxProps } from '@loopstarter/uikit'

const Container: React.FC<BoxProps> = ({ children, mobileNoPadding, ...props }) => (
  <Box px={['16px', mobileNoPadding ? '0px' : '24px']} mx="auto" {...props}>
    {children}
  </Box>
)

export default Container
