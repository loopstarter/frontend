import styled from 'styled-components'
import React from 'react'
import { Flex, ChartIcon, CommunityIcon, SwapIcon, Button } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import { IconCardData } from '../IconCard'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Section = styled(Flex)`
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 104px 0 0;
`

const Heading = styled.p<{ fontWeight?: string }>`
  font-family: FS Magistral;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '300'};
  font-size: 55px;
  line-height: 65px;
  text-align: center;
  color: #150159;
`

const Label = styled.p`
  font-family: FS Magistral;
  font-style: normal;
  font-weight: normal;
  font-size: 21.9313px;
  line-height: 25px;
  text-align: justify;
  color: #150159;
  padding: 15px 0 30px;
`

const Text = styled.p`
  font-family: FS Magistral;
  font-style: normal;
  font-weight: bold;
  font-size: 33.105px;
  line-height: 46px;
  text-align: justify;
  color: #150159;
  padding: 70px 0 0;
`

const ButtonStyle = styled(Button)`
  background: linear-gradient(94.76deg, #44aeea 0%, #5150ff 139.11%);
  border-radius: 9.24812px;
  width: 167px;
  height: 48px;
  border: 0;
  font-family: FS Magistral;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`

const Wrapper = styled.div`
  max-width: 577px;
  padding-left: 37px;
`

const Picture = styled.picture`
  padding-right: 37px;
  width: 50%;
`

const Language = styled.p`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 35.8115px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
`

const Li = styled.li`
  font-family: FS Magistral;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 75px;
  color: #ffffff;
`

const Ul = styled.ul<{ padding?: string }>`
  list-style: none;
  padding: ${({ padding }) => padding || '0'};
`

const LoopStarter = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Section justifyContent="center" alignItems="center">
      <Flex flexDirection="column">
        <picture>
          <img src="/images/home/logo.png" alt={t('logo')} />
        </picture>
        <Flex padding="50px 0 0">
          <picture>
            <a href="medium.com" target="_blank">
              <img src="/images/home/message.png" alt={t('message')} />
            </a>
          </picture>
          <picture style={{ padding: '0 47px' }}>
            <a href="medium.com" target="_blank">
              <img src="/images/home/twitter-1.png" alt={t('twitter')} />
            </a>
          </picture>
          <Flex>
            <picture>
              <a href="medium.com" target="_blank">
                <img src="/images/home/language.png" alt={t('language')} />
              </a>
            </picture>
            <Language>EN</Language>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap" alignItems="flex-start">
        <Ul>
          <Li>About Us</Li>
          <Li>Ecosystem</Li>
          <Li>VC DAO</Li>
        </Ul>
        <Ul padding="0 68px">
          <Li>Loop Starter</Li>
          <Li>Exchange</Li>
          <Li>Stake</Li>
          <Li>Token DAO</Li>
        </Ul>
        <Ul>
          <Li>Apply for IDO</Li>
          <Li>FAQ</Li>
          <Li>Contact</Li>
        </Ul>
      </Flex>
    </Section>
  )
}

export default LoopStarter
