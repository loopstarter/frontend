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
  width: 100%;
  padding: 25px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 440px;
    padding: 25px 20px;
  }
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
  font-family: FSMagistralMedium;
  font-size: 16px;
  line-height: 18px;
  text-align: justify;
  color: #FFFFFF;
  padding: 10px 0 20px;
`

const Text = styled.p`
  font-family: FSMagistralBold;
  font-size: 24px;
  line-height: 34px;
  color: #FFFFFF;
  padding: 255px 0 10px;
`

const ButtonStyle = styled(Button)`
  background: linear-gradient(94.76deg, #44AEEA 0%, #5150FF 139.11%);
  border-radius: 9.24812px;
  width: 145px;
  height: 48px;
  border: 0.924812px solid #FFFFFF;
  font-family: FSMagistralMedium;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
`

const Wrapper = styled.div`
  max-width: 577px;
  padding-left: 37px;
`

const PictureWrapper = styled.div`
  position: relative;
`

const Picture = styled.picture`
  margin: -450px 8px 0;
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
   margin: -450px 0 0;
  }
`

const PictureBg = styled.picture`
  margin: 0 8px;
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
   margin: 0;
  }
`

const TextWrapper = styled.div`
  background-image: url('/images/home/vector-1.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: -187px 8px 0;
  padding: 0 31px 90px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: -187px 0 0;
  }
`

const LoopNew = ({ title, description, img }) => {
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
      <PictureWrapper>
        <PictureBg>
          <img src="/images/home/vector.png" alt={t('Lunar bunny')} />
        </PictureBg>
        <Picture>
          <img src={img} alt={t('Lunar bunny')} />
        </Picture>
      </PictureWrapper>
      <TextWrapper>
        <Text>
            {title}
        </Text>
        <Label>
          {description}
        </Label>
        <Flex flex="1" flexDirection="column" alignItems="center">
          <ButtonStyle>{t('Learn more')}</ButtonStyle>
        </Flex>
      </TextWrapper>
    </Section>
  )
}

export default LoopNew
