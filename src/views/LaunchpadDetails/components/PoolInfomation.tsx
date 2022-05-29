/* eslint-disable no-debugger */
import { Box, Button, CopyIcon, Flex, Text, useMatchBreakpoints } from '@loopstarter/uikit'
import useToast from 'hooks/useToast'
import React from 'react'
import styled from 'styled-components'
import { configIDO } from '../config';

const WrapLaunchpad = styled.div<{ noMarginTop?: boolean; isMobile: boolean }>`
  border: 1px solid #d520af;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? '16px' : '64px')};
  box-shadow: inset 0 0 10px #d520af, 0 0 10px #d520af;
  background: #360060;
  padding: 24px;
  margin-left: ${({ isMobile }) => (isMobile ? '0px' : '16px')};
  margin-right: ${({ isMobile }) => (isMobile ? '0px' : '16px')};
`

const PoolInfomation = ({ idoContract, pid }: { idoContract: any; pid: number }) => {
  const { toastSuccess, toastError } = useToast()
  const { isMobile } = useMatchBreakpoints()

  return (
    <>
      <Flex flex={1} mt={4} mb={3}>
        <Flex flex={1} flexDirection="column">
          <Flex justifyContent="center">
            <Text color="#fff" fontWeight={800} fontSize="4">
              Project Information
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={1} flexWrap="wrap">
        <WrapLaunchpad noMarginTop isMobile={isMobile}>
          <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
            <Box>
              <Text color="#883BC3">TOKEN DISTRIBUTION</Text>
              <Text color="#fff" fontWeight={800}>
                {configIDO[pid].projectInfo.timeDistribute}
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">MIN. ALLOCATION</Text>
              <Text color="#fff" fontWeight={800}>
                {configIDO[pid].projectInfo.allocation}
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">ALLOCATION SIZE</Text>
              <Text color="#fff" fontWeight={800}>
                {configIDO[pid].projectInfo.allocationSize}
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">LISTING PRICE</Text>
              <Text color="#fff" fontWeight={800}>
                {configIDO[pid].projectInfo.listingPrice}
              </Text>
            </Box>
          </Flex>
        </WrapLaunchpad>
        <WrapLaunchpad noMarginTop isMobile={isMobile}>
          <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
            <Box>
              <Text color="#883BC3">NAME</Text>
              <Text color="#fff" fontWeight={800}>
                {configIDO[pid].projectInfo.projectName}
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">SYMBOL</Text>
              <Text color="#fff" fontWeight={800}>
                $ {configIDO[pid].projectInfo.symbol}
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">DECIMALS</Text>
              <Text color="#fff" fontWeight={800}>
                {configIDO[pid].projectInfo.demicals}
              </Text>
            </Box>
            <Box>
              <Text color="#883BC3">TOTAL SUPPLY</Text>
              <Text color="#fff" fontWeight={800}>
                {configIDO[pid].projectInfo.totalSupply}
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="row" justifyContent="space-between">
            <Box>
              <Text color="#883BC3">ADDRESS TOKEN</Text>
              <Text
                color="#fff"
                fontWeight={800}
                onClick={() => {
                  toastSuccess('Copy Success')
                  navigator.clipboard.writeText(configIDO[pid].projectInfo.addressToken)
                }}
              >
                {isMobile
                  ? `${configIDO[pid].projectInfo.addressToken?.slice(0, 7)}...${configIDO[
                      pid
                    ].projectInfo.addressToken?.slice(-7)}`
                  : configIDO[pid].projectInfo.addressToken}
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
