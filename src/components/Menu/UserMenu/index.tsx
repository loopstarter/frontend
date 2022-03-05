import React from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import {
  Flex,
  LogoutIcon,
  useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  IconButton,
  HamburgerIcon,
} from '@loopstarter/uikit'
import useAuth from 'hooks/useAuth'
import { useRouter } from 'next/router'
import { useProfile } from 'state/profile/hooks'
import ConnectWalletButton, { GoToAppButton } from 'components/ConnectWalletButton'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { FetchStatus } from 'config/constants/types'
import WalletModal, { WalletView, LOW_BNB_BALANCE } from './WalletModal'
import ProfileUserMenuItem from './ProfileUserMenutItem'
import WalletUserMenuItem from './WalletUserMenuItem'
import MenuModal from '../MenuModal'

const IconButtonStyle = styled(IconButton)`
  background: rgba(75, 124, 245, 0.3);
  border-radius: 10px;
  margin: 0 0 0 20px;
`

const UserMenu = ({ toggleMenu }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { logout } = useAuth()
  const { balance, fetchStatus } = useGetBnbBalance()
  const { isInitialized, isLoading, profile } = useProfile()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const [onPresentTransactionModal] = useModal(<WalletModal initialView={WalletView.TRANSACTIONS} />)
  const [presentCastVoteModal] = useModal(<MenuModal initialView={WalletView.WALLET_INFO} />)
  const hasProfile = isInitialized && !!profile
  const avatarSrc = profile?.nft?.image?.thumbnail
  const hasLowBnbBalance = fetchStatus === FetchStatus.Fetched && balance.lte(LOW_BNB_BALANCE)

  if (!account) {
    return (
      <>
        {/* <ConnectWalletButton scale="sm" /> */}
        <GoToAppButton scale="sm" />
        <IconButtonStyle onClick={toggleMenu} backgroundColor="#4B7CF5" color="#fff">
          <HamburgerIcon width="36px" color="#fff" />
        </IconButtonStyle>
      </>
    )
  }

  return (
    <UIKitUserMenu account={account} avatarSrc={avatarSrc}>
      <WalletUserMenuItem hasLowBnbBalance={hasLowBnbBalance} onPresentWalletModal={onPresentWalletModal} />
      <UserMenuItem as="button" onClick={onPresentTransactionModal}>
        {t('Transactions')}
      </UserMenuItem>
      <UserMenuDivider />
      <UserMenuItem as="button" onClick={() => router.push(`${nftsBaseUrl}/profile/${account.toLowerCase()}`)}>
        {t('Your NFTs')}
      </UserMenuItem>
      <ProfileUserMenuItem isLoading={isLoading} hasProfile={hasProfile} />
      <UserMenuDivider />
      <UserMenuItem as="button" onClick={logout}>
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          {t('Disconnect')}
          <LogoutIcon />
        </Flex>
      </UserMenuItem>
    </UIKitUserMenu>
  )
}

export default UserMenu
