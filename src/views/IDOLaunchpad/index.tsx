/* eslint-disable no-debugger */
import { Box, Button, Flex, LogoIcon, Skeleton, Slider, Text } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import Page from 'components/Layout/Page'
import { useIdoContract } from 'hooks/useContract'
import React, { useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import tokens from 'config/constants/tokens'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import useTokenBalance, { useGetBnbBalance } from 'hooks/useTokenBalance'
import styled from 'styled-components'
import { CurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { formatBigNumber, getFullDisplayBalance } from '../../utils/formatBalance'
import Footer from '../LaunchpadDetails/components/Footer'
import { configIDO } from 'config/constants/configIDO'
import { IDOCardInfo } from './components/IDOCardIntro'

const WrapLaunchpad = styled(Flex)`
  border: 1px solid #d520af;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: inset 0 0 10px #d520af, 0 0 10px #d520af;
  background: #360060;
  padding: 24px;
  margin: 16px;
  margin-top: 16px;
  height: fix-content;
`
const ButtonViewLoops = styled(Button)`
  background: #5c0c9b;
  border-radius: 5px;
`
const ViewBalance = styled(Flex)`
  border-radius: 3px;
  background-color: #440278;
  padding: 8px 16px;
`
const ButtonIDOStyled = styled(Button)`
  border-radius: 6px;
  margin-left: 4px;
  margin-right: 4px;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  font-family: 'Kanit', sans-serif;
  background: ${({ whitelist }) =>
    whitelist
      ? 'linear-gradient(106.04deg, #FFC677 -44.63%, #C94FD8 92.68%)'
      : 'linear-gradient(94.76deg, #44aeea 0%, #5150ff 139.11%)'};
`
interface IIDOInfo {
  amount?: IResponseBNumber
  totalAmount?: IResponseBNumber
  remainAmount?: IResponseBNumber
  startTime?: IResponseBNumber
  idoToken?: string
}

interface IResponseBNumber {
  _hex?: BigNumber
  _isBigNumber?: boolean
}

const Launchpad: React.FC = () => {
  const { account, library, connector } = useWeb3React()
  const idoContract = useIdoContract()
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
  const [poolInfo, setPoolInfo] = useState<IIDOInfo>({})
  const [numberParticipant, setNumberParticipant] = useState(0)

  useEffect(() => {
    idoContract.getBuyers(0).then((res) => setNumberParticipant(res?.length || 0))
    const interval = setInterval(() => {
      if (account) {
        idoContract.poolInfo(0).then((data) => {
          setPoolInfo(data)
          console.log('idoContractInfo', data)
        })
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [account, idoContract])

  const balanceLoops = useTokenBalance(tokens.loops.address)
  const balanceBUSD = useTokenBalance(tokens.busd.address)
  const balanceBNB = useGetBnbBalance()
  // console.log('balanceLoops', balanceLoops.balance, balanceBUSD, balanceBNB)

  return (
    <>
      <Page>
        <Container maxWidth={1200} mobileNoPadding>
          <Flex flexDirection="row" mt={5} flexWrap="wrap" justifyContent="center">
            <WrapLaunchpad flex={12} height="fit-content" maxWidth="fit-content">
              <Flex flexDirection="column" minWidth={240}>
                <Flex justifyContent="center">
                  <LogoIcon />
                </Flex>
                <Flex justifyContent="center" mt={4}>
                  <Text color="#fff">$LOOPS Blance</Text>
                </Flex>
                <ViewBalance mt={2} justifyContent="space-between">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 7V5C20 3.897 19.103 3 18 3H5C3.346 3 2 4.346 2 6V18C2 20.201 3.794 21 5 21H20C21.103 21 22 20.103 22 19V9C22 7.897 21.103 7 20 7ZM18 16H16V12H18V16ZM5 7C4.74252 6.98848 4.49941 6.87809 4.32128 6.69182C4.14315 6.50554 4.04373 6.25774 4.04373 6C4.04373 5.74226 4.14315 5.49446 4.32128 5.30818C4.49941 5.12191 4.74252 5.01152 5 5H18V7H5Z"
                      fill="white"
                    />
                  </svg>
                  {balanceLoops.balance ? (
                    <Text color="#fff" ml={2}>
                      {getFullDisplayBalance(balanceLoops.balance, 18, 4)} LOOPS
                    </Text>
                  ) : (
                    <Skeleton height={20} width={64} />
                  )}
                </ViewBalance>
                <Flex justifyContent="center" mt={4}>
                  <Text color="#fff">BUSD Balance</Text>
                </Flex>
                <ViewBalance mt={2} justifyContent="space-between">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 7V5C20 3.897 19.103 3 18 3H5C3.346 3 2 4.346 2 6V18C2 20.201 3.794 21 5 21H20C21.103 21 22 20.103 22 19V9C22 7.897 21.103 7 20 7ZM18 16H16V12H18V16ZM5 7C4.74252 6.98848 4.49941 6.87809 4.32128 6.69182C4.14315 6.50554 4.04373 6.25774 4.04373 6C4.04373 5.74226 4.14315 5.49446 4.32128 5.30818C4.49941 5.12191 4.74252 5.01152 5 5H18V7H5Z"
                      fill="white"
                    />
                  </svg>
                  {balanceBUSD.balance ? (
                    <Text color="#fff" ml={2}>
                      {getFullDisplayBalance(balanceBUSD.balance, 18, 4)} BUSD
                    </Text>
                  ) : (
                    <Skeleton height={20} width={64} />
                  )}
                </ViewBalance>
                <Flex justifyContent="center" mt={4}>
                  <Text color="#fff">BNB Balance</Text>
                </Flex>
                <ViewBalance mt={2} justifyContent="space-between">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 7V5C20 3.897 19.103 3 18 3H5C3.346 3 2 4.346 2 6V18C2 20.201 3.794 21 5 21H20C21.103 21 22 20.103 22 19V9C22 7.897 21.103 7 20 7ZM18 16H16V12H18V16ZM5 7C4.74252 6.98848 4.49941 6.87809 4.32128 6.69182C4.14315 6.50554 4.04373 6.25774 4.04373 6C4.04373 5.74226 4.14315 5.49446 4.32128 5.30818C4.49941 5.12191 4.74252 5.01152 5 5H18V7H5Z"
                      fill="white"
                    />
                  </svg>
                  {balanceBNB.balance ? (
                    <Text color="#fff" ml={2}>
                      {formatBigNumber(balanceBNB.balance, 4, 18)} BNB
                    </Text>
                  ) : (
                    <Skeleton height={20} width={64} />
                  )}
                </ViewBalance>
              </Flex>
            </WrapLaunchpad>
            <Flex flexDirection="row" flexWrap="wrap">
              {configIDO.filter((item) => !item.hidden).map((project) => (
                <IDOCardInfo project={project} pid={project.pid} />
              ))}
            </Flex>
            {/* <Flex flex={1}>
              <div />
            </Flex> */}
          </Flex>
        </Container>
      </Page>
      <div style={{ background: '#100151' }}>
        <div
          style={{
            background: 'linear-gradient(91.59deg, rgba(83, 83, 238, 0.38) 16.47%, rgba(25, 25, 140, 0.41) 92.23%)',
            backdropFilter: 'blur(100px)',
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Launchpad
