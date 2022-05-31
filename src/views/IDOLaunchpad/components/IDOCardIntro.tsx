/* eslint-disable no-debugger */
import { Box, Button, Flex, Skeleton, Slider, Text } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useIdoContract } from 'hooks/useContract'
import React, { useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import ConnectWalletButton from 'components/ConnectWalletButton'
import tokens from 'config/constants/tokens'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { CurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { getFullDisplayBalance } from '../../../utils/formatBalance'
import { IConfigIDO } from '../../LaunchpadDetails/config'

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

export const IDOCardInfo: React.FC = ({ project, pid }: { project: IConfigIDO; pid: number }) => {
  const { account, library, connector } = useWeb3React()
  const idoContract = useIdoContract()
  const { t } = useTranslation()
  const [poolInfo, setPoolInfo] = useState<IIDOInfo>({})
  const [numberParticipant, setNumberParticipant] = useState(0)

  useEffect(() => {
    if (typeof pid === 'number') idoContract.getBuyers(pid).then((res) => setNumberParticipant(res?.length || 0))
    const interval = setInterval(() => {
      if (account && typeof pid === 'number') {
        idoContract.poolInfo(pid).then((data) => {
          setPoolInfo(data)
          console.log('idoContractInfo', data)
        })
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [account, idoContract, pid])

  return (
    <WrapLaunchpad flex={12}>
      <Flex flex={1} flexDirection="column">
        <Flex justifyContent="center">
          <picture>
            <img src={project.projectLogo} alt={t('logo')} width={80} />
          </picture>
        </Flex>
        <Flex justifyContent="center">
          <Text style={{ color: '#828282' }}>{project.projectInfo.projectName}</Text>
        </Flex>
        <Flex justifyContent="center">
          <Text style={{ color: '#fff' }}>${project.tokenInfo.sell.symbol}</Text>
        </Flex>
        <Flex justifyContent="center" mt={2} mb={2}>
          <ButtonViewLoops scale="sm">
            <Text color="#fff" display="flex">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M19.51 7.58614L14.0551 6.79336L11.6166 1.84981C11.55 1.71446 11.4405 1.60488 11.3051 1.53828C10.9657 1.3707 10.5532 1.51035 10.3834 1.84981L7.94495 6.79336L2.49006 7.58614C2.33967 7.60762 2.20217 7.67852 2.0969 7.78594C1.96963 7.91675 1.8995 8.09274 1.90192 8.27523C1.90433 8.45772 1.9791 8.63179 2.10979 8.75918L6.05647 12.607L5.12405 18.0404C5.10218 18.1668 5.11617 18.2968 5.16442 18.4157C5.21268 18.5345 5.29326 18.6375 5.39705 18.7128C5.50083 18.7882 5.62366 18.833 5.75161 18.8421C5.87955 18.8513 6.00749 18.8243 6.12092 18.7645L11 16.1992L15.8791 18.7645C16.0123 18.8354 16.167 18.859 16.3153 18.8332C16.6891 18.7688 16.9405 18.4143 16.876 18.0404L15.9436 12.607L19.8903 8.75918C19.9977 8.65391 20.0686 8.51641 20.0901 8.36602C20.1481 7.99004 19.886 7.64199 19.51 7.58614Z"
                  fill="#3071EF"
                />
              </svg>{' '}
              Applications Open
            </Text>
          </ButtonViewLoops>
        </Flex>
        <Flex>
          <Text style={{ color: '#fff' }}>{project.projectShortDescription}</Text>
        </Flex>
        <Flex mb={2}>
          <CurrencyLogo size="56px" address={tokens.loops.address} />
          <Flex flexDirection="column" ml={2}>
            {poolInfo?.totalAmount ? (
              <Text fontSize="28px" fontWeight={800} color="#fff">
                {getFullDisplayBalance(
                  new BigNumber(poolInfo?.totalAmount?._hex).multipliedBy(poolInfo?.tokenBuy2IDOtoken?._hex),
                  36,
                  0,
                )}{' '}
                ${project.tokenInfo.useForBuy.symbol}
              </Text>
            ) : (
              <Skeleton height={20} width={64} />
            )}

            <Text fontSize="12px" color="#fff">
              Total Sales Amount
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Slider
            mt={2}
            mb={1}
            min={0}
            max={1}
            value={new BigNumber(poolInfo?.totalAmount?._hex)
              .minus(poolInfo?.remainAmount?._hex)
              .div(poolInfo?.totalAmount?._hex)
              .toNumber()}
            onValueChanged={() => null}
            name="stake"
            width="100%"
          />
        </Flex>
        <Flex justifyContent="space-between" mb={4}>
          <ButtonViewLoops scale="sm">
            <Text fontSize="12px" color="#fff">
              {getFullDisplayBalance(
                new BigNumber(poolInfo?.totalAmount?._hex)
                  .minus(poolInfo?.remainAmount?._hex)
                  .div(poolInfo?.totalAmount?._hex)
                  .multipliedBy(100),
                0,
                2,
              )}{' '}
              % Completed
            </Text>
          </ButtonViewLoops>
          <Text fontSize="12px" color="#fff">
            {getFullDisplayBalance(
              new BigNumber(poolInfo?.totalAmount?._hex)
                .minus(poolInfo?.remainAmount?._hex)
                .multipliedBy(poolInfo?.tokenBuy2IDOtoken?._hex),
              36,
              2,
            )}
            /
            {getFullDisplayBalance(
              new BigNumber(poolInfo?.totalAmount?._hex).multipliedBy(poolInfo?.tokenBuy2IDOtoken?._hex),
              36,
              0,
            )}{' '}
            ${project.tokenInfo.useForBuy.symbol}
          </Text>
        </Flex>
        <Flex flexDirection="row" justifyContent="space-between">
          <Box>
            <Text color="#883BC3">Participants</Text>
            <Text color="#fff" fontWeight={800}>
              {numberParticipant}
            </Text>
          </Box>
          <Box>
            <Text color="#883BC3">Alloc. Size</Text>
            <Text color="#fff" fontWeight={800}>
              {project.projectInfo.allocation}
            </Text>
          </Box>
          <Box>
            <Text color="#883BC3">ACCESS</Text>
            <Text color="#fff" fontWeight={800}>
              {project.projectInfo.access}
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" mb={2} marginX="-16px">
          <Flex justifyContent="center" mt="32px" flex={1}>
            <ButtonIDOStyled scale="sm" whitelist>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                style={{ marginRight: 4 }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 19.0001C4.25331 19.0001 0 14.7468 0 9.50012C0 4.25343 4.25331 0.00012207 9.5 0.00012207C14.7467 0.00012207 19 4.25343 19 9.50012C19 14.7468 14.7467 19.0001 9.5 19.0001ZM9.5 2.06534C5.39332 2.06534 2.06522 5.39448 2.06522 9.50012C2.06522 13.6058 5.39332 16.9349 9.5 16.9349C13.6067 16.9349 16.9348 13.6058 16.9348 9.50012C16.9348 5.39448 13.6067 2.06534 9.5 2.06534ZM11.3587 13.4757H7.64129V9.2523H5.31794L9.5 5.31806L13.6821 9.2523H11.3587V13.4757Z"
                  fill="white"
                />
              </svg>
              Apply Whitelist
            </ButtonIDOStyled>
          </Flex>
          <Flex justifyContent="center" mt="32px" flex={1}>
            <ButtonIDOStyled scale="sm" onClick={() => window.open(`/launchpad-details/${pid}`)}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                style={{ marginRight: 4 }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 19.0001C4.25331 19.0001 0 14.7468 0 9.50012C0 4.25343 4.25331 0.00012207 9.5 0.00012207C14.7467 0.00012207 19 4.25343 19 9.50012C19 14.7468 14.7467 19.0001 9.5 19.0001ZM9.5 2.06534C5.39332 2.06534 2.06522 5.39448 2.06522 9.50012C2.06522 13.6058 5.39332 16.9349 9.5 16.9349C13.6067 16.9349 16.9348 13.6058 16.9348 9.50012C16.9348 5.39448 13.6067 2.06534 9.5 2.06534ZM11.3587 13.4757H7.64129V9.2523H5.31794L9.5 5.31806L13.6821 9.2523H11.3587V13.4757Z"
                  fill="white"
                />
              </svg>
              IDO Details
            </ButtonIDOStyled>
          </Flex>
        </Flex>
        <Flex justifyContent="center" mt="32px">
          {!account ? <ConnectWalletButton style={{ width: '100%' }} /> : null}
        </Flex>
      </Flex>
    </WrapLaunchpad>
  )
}
