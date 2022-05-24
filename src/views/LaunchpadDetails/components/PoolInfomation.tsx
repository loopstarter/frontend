/* eslint-disable no-debugger */
import { Box, Button, CopyIcon, Flex, Text, useMatchBreakpoints } from '@loopstarter/uikit'
import useToast from 'hooks/useToast'
import React from 'react'
import styled from 'styled-components'

const WrapLaunchpad = styled.div<{ noMarginTop?: boolean }>`
  border: 1px solid #d520af;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? '0px' : '64px')};
  box-shadow: inset 0 0 10px #d520af, 0 0 10px #d520af;
  background: #360060;
  padding: 32px;
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;
`

const PoolInfomation = ({ idoContract }: { idoContract: any }) => {
  const { toastSuccess, toastError } = useToast()
  const { isMobile } = useMatchBreakpoints()

  return (
    <>
      <Flex flex={1} mt={4} mb={3}>
        <Flex flex={1} flexDirection="column">
          <Flex justifyContent="center">
            <Text color="#fff" fontWeight={800} fontSize="4">
              Pool Information
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={1} flexWrap="wrap">
        <WrapLaunchpad noMarginTop>
          <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
            <Box>
              <Text color="#883BC3">TOKEN DISTRIBUTION</Text>
              <Text color="#fff" fontWeight={800}>
                --/4/2022
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">MIN. ALLOCATION</Text>
              <Text color="#fff" fontWeight={800}>
                100 BUSD
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">ALLOCATION SIZE</Text>
              <Text color="#fff" fontWeight={800}>
                {' '}
                -{' '}
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">LISTING PRICE</Text>
              <Text color="#fff" fontWeight={800}>
                $ 0.055
              </Text>
            </Box>
          </Flex>
        </WrapLaunchpad>
        <WrapLaunchpad noMarginTop>
          <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
            <Box>
              <Text color="#883BC3">NAME</Text>
              <Text color="#fff" fontWeight={800}>
                LOOPSTARTER
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">SYMBOL</Text>
              <Text color="#fff" fontWeight={800}>
                $LOOPS
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">DECIMALS</Text>
              <Text color="#fff" fontWeight={800}>
                18
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">TOTAL SUPPLY</Text>
              <Text color="#fff" fontWeight={800}>
                200,000,000
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="row" justifyContent="space-between">
            <Box>
              <Text color="#883BC3">ADDRESS</Text>
              <Text
                color="#fff"
                fontWeight={800}
                onClick={() => {
                  toastSuccess('Copy Success')
                  navigator.clipboard.writeText(idoContract.address)
                }}
              >
                {isMobile
                  ? `${idoContract.address?.slice(0, 7)}...${idoContract.address?.slice(-7)}`
                  : idoContract.address}
                <CopyIcon color="primary" width="20px" ml={2} />
              </Text>
            </Box>
          </Flex>
        </WrapLaunchpad>
      </Flex>
    </>
  )
}

export default PoolInfomation
