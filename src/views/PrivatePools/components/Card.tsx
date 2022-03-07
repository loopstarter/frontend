import React from 'react'
import styled from 'styled-components'
import { Flex, Button, useWalletModal } from '@loopstarter/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const PrivatePoolStyle = styled(Flex)`
  background-image: url('/images/pools/pool-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1287px;
  margin: 0 auto 32px;
  padding: 50px 70px 45px 65px;
`

const ItemWrapper = styled(Flex)`
  background-image: url('/images/pools/item.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 318px;
  height: 242px;
`

const ImageWrapper = styled.div`
  margin: 0 40px 0 0;
`
const Picture = styled.picture`
  width: 177px;
  height: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    height: auto;
  }
`

const ItemName = styled.p`
  font-family: HKGrotesk;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`

const TicketWrapper = styled.div`
  background-image: url('/images/pools/item-name.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 87px;
  width: 302px;
  margin: 25px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TicketName = styled.p`
  font-family: HKGroteskBold;
  font-size: 19px;
  line-height: 23px;
  text-transform: uppercase;
  color: #56ccf2;
`

const PoolSection = styled(Flex)`
  justify-content: space-between;
  width: 794px;
`

const PoolName = styled.p`
  font-family: HKGroteskBold;
  font-size: 32px;
  line-height: 37px;
  text-transform: capitalize;
  color: #fff;
  padding: 0 0 20px;
`

const Title = styled.p<{ fontFamily?: string; padding?: string; color?: string }>`
  font-family: ${({ fontFamily }) => fontFamily || 'HKGrotesk'};
  font-size: 32px;
  line-height: 37px;
  text-transform: capitalize;
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding || '0'};
  white-space: nowrap;
`

const PoolItem = styled(Flex)`
  height: 200px;
`

const PoolLink = styled.a`
  font-family: HKGroteskLight;
  font-size: 21px;
  line-height: 25px;
  text-transform: capitalize;
  color: #56ccf2;
`

const BtnStyle = styled(Button)`
  width: 257px;
  height: 75px;
  background: #56ccf2;
  border-radius: 100px;
  font-family: HKGrotesk;
  font-size: 24px;
  line-height: 28px;
  text-transform: capitalize;
  color: #ffffff;
`

const PrivatePool = () => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <PrivatePoolStyle>
      <ImageWrapper>
        <ItemWrapper flexDirection="column" alignItems="center" justifyContent="center">
          <Picture>
            <img src="/images/pools/item-logo.png" alt={t('item-logo')} />
          </Picture>
          <ItemName>Beryl - Ticket</ItemName>
        </ItemWrapper>
        <TicketWrapper>
          <TicketName>Garnet ticket: 0</TicketName>
        </TicketWrapper>
      </ImageWrapper>
      <Flex flexDirection="column">
        <PoolName>Garnet Pass-ticket</PoolName>
        <PoolSection>
          <PoolItem flexDirection="column" justifyContent="space-between">
            <div>
              <Title>Required:</Title>
              <Title fontFamily="HKGroteskBold" color="#56CCF2">
                =&gt; 100.000 BCTZ
              </Title>
            </div>
            <div>
              <Title>Remaining unlock:</Title>
              <Title fontFamily="HKGroteskBold" color="#56CCF2">
                7 days : 00 hours : 00mins
              </Title>
            </div>
          </PoolItem>
          <PoolItem flexDirection="column" justifyContent="space-between">
            <div>
              <Title>Staking:</Title>
              <Title fontFamily="HKGroteskBold" color="#56CCF2">
                0 BCTZ
              </Title>
            </div>
            <PoolLink href="#" target="blank">
              View Smart contract
            </PoolLink>
          </PoolItem>
          <PoolItem flexDirection="column" justifyContent="space-between">
            <div>
              <Title>lock-up time</Title>
              <Title fontFamily="HKGroteskBold" color="#56CCF2">
                7 days
              </Title>
            </div>
            <PoolLink href="#" target="blank">
              View Smart contract
            </PoolLink>
          </PoolItem>
        </PoolSection>
        <Flex justifyContent="end" pt="40px">
          <BtnStyle px={['14px', null, null, null, '20px']} variant="subtle" onClick={onPresentConnectModal}>
            {t('Connect wallet')}
          </BtnStyle>
        </Flex>
      </Flex>
    </PrivatePoolStyle>
  )
}

export default PrivatePool
