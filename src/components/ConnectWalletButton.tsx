import React from 'react'
import { Button, useWalletModal } from '@loopstarter/uikit'
import useAuth from 'hooks/useAuth'
import styled from "styled-components";
import { useTranslation } from 'contexts/Localization'


const ConnectButton = styled(Button)`
  width: 124px;
  height: 42px;
  background: linear-gradient(266.6deg, #4C37DC 8.18%, #6A5AFF 92.89%);
  border-radius: 9px;
  font-family: FS Magistral;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
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

export default ConnectWalletButton
