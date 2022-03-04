import React from 'react'
import { Box, Flex } from '@loopstarter/uikit'
import styled from 'styled-components'
import HarvestCard from './HarvestCard'
import UserDetail from './UserDetail'

const StyledCard = styled(Box)`
  background: transparent;
`

const UserBanner = () => {
  return (
    <StyledCard p={['16px', null, null, '24px']}>
      <Flex alignItems="center" justifyContent="center" flexDirection={['column', null, null, 'row']}>
        <Flex flex="1" mr={[null, null, null, '32px']}>
          <UserDetail />
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default UserBanner
