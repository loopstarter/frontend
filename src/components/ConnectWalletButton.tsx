import React from 'react'
import { Button, useWalletModal } from '@loopstarter/uikit'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const ConnectButton = styled(Button)`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '124px')};
  height: 42px;
  background: linear-gradient(266.6deg, #4c37dc 8.18%, #6a5aff 92.89%);
  border-radius: 9px;
  font-family: FSMagistralMedium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`

const AppButton = styled(Button)`
  background: linear-gradient(94.76deg, #44aeea 0%, #5150ff 139.11%);
  font-family: FSMagistralMedium;
  font-size: 16.6466px;
  line-height: 22px;
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <ConnectButton onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </ConnectButton>
  )
}

export const GoToAppButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <a href="https://app.loopstarter.com/" target='_blank'>
      <ConnectButton {...props}>{t('Go to App')}</ConnectButton>
    </a>
  )
}

export default ConnectWalletButton
