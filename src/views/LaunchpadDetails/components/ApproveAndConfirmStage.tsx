import React from 'react'
import { Flex, Text, Button, Spinner } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
// import { StepIndicator } from './styles'
import styled from 'styled-components'
import tokens from 'config/constants/tokens'
import { ToastDescriptionWithTx } from 'components/Toast'
import { configIDO } from '../config'

interface ApproveAndConfirmStageProps {
  variant: 'buy' | 'sell'
  isApproved: boolean
  isApproving: boolean
  isConfirming: boolean
  handleApprove: () => void
  handleConfirm: () => void
  isBuyer: boolean
  canHasEnoughBalance2BuyIDO: boolean
  hasSignForIDO: boolean
  isIDOFinished: boolean
  idoContract: any
  pid: number
}

const ButtonIDOStyled = styled(Button)`
  border-radius: 6px;
  margin-left: 4px;
  margin-right: 4px;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  font-family: 'Kanit', sans-serif;
  background-color: ${({ whitelist }) =>
    whitelist
      ? 'linear-gradient(106.04deg, #FFC677 -44.63%, #C94FD8 92.68%)'
      : 'linear-gradient(94.76deg, #44aeea 0%, #5150ff 139.11%)'};
`

// Buy Flow:
// Shown if user wants to pay with WBNB and contract isn't approved yet
// Sell Flow:
// Shown the first time user puts NFT for sale
const ApproveAndConfirmStage: React.FC<ApproveAndConfirmStageProps> = ({
  variant,
  isApproved,
  isApproving,
  isConfirming,
  handleApprove,
  handleConfirm,
  isBuyer,
  canHasEnoughBalance2BuyIDO,
  hasSignForIDO,
  isIDOFinished,
  idoContract,
  pid,
}) => {
  const { t } = useTranslation()

  return (
    <Flex p="16px" flexDirection="column">
      <Flex mb="8px" alignItems="center">
        {!isApproved && (
          <Text mt="8px" textAlign="center" small color="orange">
            {t('Please enable your BUSD to buy IDO')}
          </Text>
        )}
      </Flex>
      {!isApproved && (
        <Flex justifyContent="center">
          <ButtonIDOStyled scale="sm" variant="primary" disabled={isApproving || isApproved} onClick={handleApprove}>
            {isApproving ? `${t('Approving')}...` : isApproved ? t('Approved') : t(`Approve ${configIDO[pid].tokenInfo.useForBuy.symbol}`)}
          </ButtonIDOStyled>
        </Flex>
      )}
      <Flex justifyContent="center" mt="8px">
        <ButtonIDOStyled
          scale="sm"
          disabled={
            !isApproved || isConfirming || isBuyer || !canHasEnoughBalance2BuyIDO || !hasSignForIDO || isIDOFinished
          }
          onClick={handleConfirm}
          variant="primary"
        >
          {isIDOFinished ? t('Finished') : isConfirming ? t('Confirming...') : t(`Buy IDO`)}
        </ButtonIDOStyled>
      </Flex>
      {isBuyer && (
        <Text mt="8px" small color="#1EAB81" fontWeight={600} textAlign="center">
          {t('You are already a member of this project!')}
        </Text>
      )}
      {!canHasEnoughBalance2BuyIDO && !isIDOFinished && (
        <Text mt="8px" small color="red" textAlign="center">
          {t('You do not have enough balance to buy IDO')}
        </Text>
      )}
      {!hasSignForIDO && !isIDOFinished && !isBuyer && (
        <Text mt="8px" small color="red" textAlign="center">
          {t('You need to sign contract for buy IDO')}
        </Text>
      )}
      {isIDOFinished && (
        <Flex justifyContent="center" mt="8px">
          <ToastDescriptionWithTx txHash={idoContract?.address} type="address" />
        </Flex>
      )}
    </Flex>
  )
}

export default ApproveAndConfirmStage
