import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, IconButton } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(0, 15px) rotateY(70deg);
  }
  to {
    transform: translate(0, 0px);
  }
`

const BgWrapper = styled(Flex)`
  background-image: url('/images/home/ido.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 380px;
  height: 440px;
  position: relative;
`

const HeadingTitle = styled.p`
  font-family: FSMagistralBold;
  font-size: 25.2515px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  padding: 10px 0;
`

const Description = styled.p`
  font-family: FSMagistralMedium;
  font-size: 15.4571px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  padding: 13px 40px;
  span {
    font-weight: 500;
  }
`

const BunnyWrapper = styled.div`
  padding: 40px 0 0;
`

const IconBottom = styled.div`
  position: absolute;
  bottom: 10px;
  z-index: 1;
  animation: ${flyingAnim} 3s ease-in-out infinite;
  animation-delay: 1s;
`

const IconWrapper = styled.div`
  display: flex;
  padding: 0 0 20px;
  img {
    padding: 0 5px;
  }
`

const TimeWrapper = styled.div`
  width: 310px;
  height: 90px;
  background: linear-gradient(96.18deg, rgba(255, 255, 255, 0.22) 3.05%, rgba(255, 255, 255, 0.15) 104.29%);
  border-radius: 5px;
  display: flex;
  padding: 10px;
  justify-content: space-around;
`

const Time = styled.p`
  font-family: FSMagistralBold;
  font-size: 35px;
  line-height: 40px;
  color: #f2c94c;
  text-align: center;
`

const TimeLabel = styled.p`
  font-family: FSMagistralMedium;
  font-size: 15.4571px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`

const Button = styled(IconButton)`
  background-color: transparent;
  box-shadow: none;
  img {
    width: 15px;
  }
`

const FlexWrapper = styled(Flex)<{ padding?: string; margin?: string }>`
  padding: 0 0 140px;
  margin: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ padding }) => padding};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ margin }) => margin};
  }
`

const IDOPool: React.FC<{ padding?: string; margin?: string }> = ({ padding, margin }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <FlexWrapper
      flex="1"
      margin={margin}
      flexDirection="column"
      alignItems="center"
      position="relative"
      padding={padding || '0 0 140px'}
    >
      <BgWrapper
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center">
          <BunnyWrapper>
            <picture>
              <img src="/images/home/ido-logo.png" alt={t('Chessus Defi')} />
            </picture>
          </BunnyWrapper>
          <HeadingTitle>{t('Chessus Defi')}</HeadingTitle>
          <IconWrapper>
            <picture>
              <a href="https://medium.com/@LOOPStarter" target="_blank">
                <img src="/images/home/medium.png" alt={t('medium')} />
              </a>
            </picture>
            <picture>
              <a href="medium.com" target="_blank">
                <img src="/images/home/telegram.png" alt={t('telegram')} />
              </a>
            </picture>
            <picture>
              <a href="medium.com" target="_blank">
                <img src="/images/home/twitter.png" alt={t('twitter')} />
              </a>
            </picture>
          </IconWrapper>
          <TimeWrapper>
            <div>
              <Time>18</Time>
              <TimeLabel>Day</TimeLabel>
            </div>
            <div>
              <Time>05</Time>
              <TimeLabel>Hours</TimeLabel>
            </div>
            <div>
              <Time>34</Time>
              <TimeLabel>Minutes</TimeLabel>
            </div>
            <div>
              <Time>55</Time>
              <TimeLabel>Seconds</TimeLabel>
            </div>
          </TimeWrapper>
          <Description>
            Estimated Target Date: <span>Mon Nov 29 2021 07:07:38 GMT+0700 (Indochina Time)</span>
          </Description>
          <Button>
            <img src="/images/home/arrow-down.png" alt={t('twitter')} />
          </Button>
        </Flex>
      </BgWrapper>
      <IconBottom>
        <picture>
          <img src="/images/home/ido-icon.png" alt={t('ido')} />
        </picture>
      </IconBottom>
    </FlexWrapper>
  )
}

export default IDOPool
