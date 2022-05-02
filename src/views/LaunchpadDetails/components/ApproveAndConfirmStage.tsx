import React from 'react'
import { Flex, Text, Button, Spinner } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
// import { StepIndicator } from './styles'
import styled from 'styled-components'
import tokens from 'config/constants/tokens';

interface ApproveAndConfirmStageProps {
  variant: 'buy' | 'sell'
  isApproved: boolean
  isApproving: boolean
  isConfirming: boolean
  handleApprove: () => void
  handleConfirm: () => void
  isBuyer: boolean
  canHasEnoughBalance2BuyIDO: boolean
}
const ButtonIDOStyled = styled(Button)`
  border-radius: 8px;
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
}) => {
  const { t } = useTranslation()

  return (
    <Flex p="16px" flexDirection="column">
      <Flex mb="8px" alignItems="center">
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          {!isApproved && (
            <Text mt="8px" maxWidth="275px" small color="textSubtle">
              {t('Please enable your BUSD to buy IDO')}
            </Text>
          )}
        </Flex>
      </Flex>
      {!isApproved && (
        <Flex justifyContent="center">
          <ButtonIDOStyled scale="sm" variant="primary" disabled={isApproving || isApproved} onClick={handleApprove}>
            {isApproving ? `${t('Approving')}...` : isApproved ? t('Approved') : t(`Approve ${tokens.usdt.symbol}`)}
          </ButtonIDOStyled>
        </Flex>
      )}
      <Flex justifyContent="center" mt="8px">
        <ButtonIDOStyled
          scale="sm"
          disabled={!isApproved || isConfirming || isBuyer || !canHasEnoughBalance2BuyIDO}
          onClick={handleConfirm}
          variant="primary"
        >
          {isConfirming ? t('Confirming...') : t(`Buy IDO`)}
        </ButtonIDOStyled>
      </Flex>
      {isBuyer && (
        <Text mt="8px" maxWidth="275px" small color="textSubtle">
          {t('You are already a member of this project!')}
        </Text>
      )}
      {!canHasEnoughBalance2BuyIDO && (
        <Text mt="8px" maxWidth="275px" small color="red">
          {t('You do not have enough balance to buy IDO')}
        </Text>
      )}
    </Flex>
  )
}

export default ApproveAndConfirmStage
