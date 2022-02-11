import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Skeleton, ChartIcon, CommunityIcon, SwapIcon, Button } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Section = styled(Flex)`
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 350px 0 0;
`

const Heading = styled.p<{ font?: string }>`
  font-family: ${({ font }) => font || 'FSMagistralLight'};
  font-size: 55px;
  line-height: 65px;
  text-align: center;
  color: #150159;
`

const Label = styled.p`
  font-family: FSMagistralMedium;
  font-size: 21.9313px;
  line-height: 25px;
  text-align: justify;
  color: #150159;
  padding: 15px 0 30px;
`

const Text = styled.p`
  font-family: FSMagistralBold;
  font-size: 33.105px;
  line-height: 46px;
  text-align: justify;
  color: #150159;
  padding: 70px 0 0;
`

const ButtonStyle = styled(Button)`
  background: linear-gradient(94.76deg, #44AEEA 0%, #5150FF 139.11%);
  border-radius: 9.24812px;
  width: 167px;
  height: 48px;
  border: 0;
  font-family: FSMagistralMedium;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
`

const Wrapper = styled.div`
  max-width: 577px;
  padding-left: 37px;
`

const Picture = styled.picture`
  padding-right: 37px;  
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
  }
`

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: scale(1.2,1.2) translate(0px, 25px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const ArrowWrapper = styled.div`
  animation: ${flyingAnim} 4s ease-in-out infinite;
  animation-delay: 1s;

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
    <Section justifyContent="center" alignItems="center" flexDirection="column">
      <Heading>
        {t('About')}
      </Heading>
      <Heading font="FSMagistralBold">
        {t('LOOP STARTER')}
      </Heading>
      <ArrowWrapper>
         <picture>
          <img src="/images/home/arrow-1.png" alt={t('Lunar bunny')} />
        </picture>
      </ArrowWrapper>
     

      <Flex flexWrap="wrap" alignItems="flex-start">
        <Picture>
          <img src="/images/home/laptop.png" alt={t('laptop')} />
        </Picture>
        <Wrapper>
          <Text>
            {t('LOOP STARTER THE CARDANO LAUCHCPAD')}
          </Text>
          <Label>
            {t('Occam is around since the early days of Cardano’s DeFi ecosystem. We have launched some of Cardano’s most promising projects, projects that today play a pivotal role in shaping this flourishing ecosystem.')}
          </Label>
          <ButtonStyle>{t('Learn more')}</ButtonStyle>
        </Wrapper>
      </Flex>
    </Section>
  )
}

export default LoopStarter
