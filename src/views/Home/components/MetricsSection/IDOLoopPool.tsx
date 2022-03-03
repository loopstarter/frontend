import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Button, Slider } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'

import useTheme from 'hooks/useTheme'

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

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled(Flex)`
  background-image: url('/images/home/loop-ido.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 850px;
  height: 978px;
  position: relative;
`

const HeadingTitle = styled.p`
  font-family: FSMagistralBold;
  font-size: 25.2515px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  padding: 250px 0 10px;
`

const Description = styled.p`
  font-family: FSMagistralMedium;
  font-size: 19px;
  line-height: 126.6%;
  text-align: left;
  color: #ffffff;
  span {
    font-weight: 500;
  }
  max-width: 535px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  padding: 90px 0 0;
`

const IconBottom = styled.div`
  position: absolute;
  bottom: 10px;
  z-index: 1;
  animation: ${flyingAnim} 3s ease-in-out infinite;
  animation-delay: 1s;
`

const IdoIcon = styled.div`
  padding: 40px 0 0;
`

const IconWrapper = styled.div`
  display: flex;
  padding: 0 0 20px;
  img {
    padding: 0 5px;
  }
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const TimeWrapper = styled.div`
  width: 310px;
  height: 90px;
  background: linear-gradient(96.18deg, rgba(255, 255, 255, 0.22) 3.05%, rgba(255, 255, 255, 0.15) 104.29%);
  border-radius: 5px;
  display: flex;
  padding: 10px;
  margin: 18px 0 16px;
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

const FlexWrapper = styled(Flex)<{ padding?: string; margin?: string }>`
  padding: 140px 0 0;
  margin: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ margin }) => margin};
  }
`

const BtnStyle = styled(Button)`
  height: 33px;
  background: rgba(83, 245, 255, 0.49);
  border-radius: 90px;
  font-family: HKGroteskBold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
`

const Ido = styled(Flex)`
  background-image: url('/images/home/ido-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 653px;
  height: 340px;
  position: relative;
  margin: 10px 0 0;
  padding: 23px 40px;
  flex-direction: column;
`

const Text = styled.p<{ fontFamily?: string; padding?: string }>`
  font-family: ${({ fontFamily }) => fontFamily || 'HKGrotesk'};
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  font-weight: ${({ fontFamily }) => (fontFamily ? '700' : '500')};
  padding: ${({ padding }) => padding || '0'};
`

const Line = styled.div`
  height: 1px;
  background: #fff;
  width: 100%;
  margin: 14px 0;
`

const IdoBtn = styled(Button)`
  width: 220px;
  height: 71px;
  background: linear-gradient(106.04deg, #ffc677 -44.63%, #c94fd8 92.68%);
  border-radius: 15px;
  font-family: FSMagistralMedium;
  font-style: normal;
  font-size: 27px;
  line-height: 71px;
  text-align: center;
  color: #fff;
`
const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'bunny'

const IDOPool: React.FC<{ padding?: string; margin?: string }> = ({ padding, margin }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

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
        alignItems={['flex-end', null, null, 'baseline']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center">
          <HeadingTitle>{t('LOOPSTARTER - LOOPS')}</HeadingTitle>
          <BtnStyle>Comming soon</BtnStyle>
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
            LOOPStarter was launched on a decentralized exchange - LOOPDEX using LOOPS tokens, which has become an
            exchange and a crowdfunding platform for all new projects.
          </Description>
          <Description>
            The first DAO supports multi-chain, cross-platform launchpad with a full DEX and deflation mechanism.
          </Description>
          <Ido>
            <Flex flexDirection="column" padding="0 45px 0 0">
              <Flex width="100%" justifyContent="space-between">
                <div>
                  <Text>Swap Amount</Text>
                  <Text>0 LOOPS</Text>
                </div>
                <Text>1 LOOPS = 0.06 BUSD</Text>
              </Flex>
              <Line />
              <Text>Swap progress</Text>
              <Flex alignItems="center">
                <Slider width="100%" name="sliderdisabled" value={10} min={1} max={20} />
                <Text>0%</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between" padding="0 44px 0 0">
                <Text>0%</Text>
                <Text>100%</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text padding="10px 0" fontFamily="HKGroteskBold">
                  Cap
                </Text>
                <Text padding="10px 0" fontFamily="HKGroteskBold">
                  Total ralse
                </Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between" padding="0 0 10px">
                <Text>2,000,000 LOOPS</Text>
                <Text>120,000 BUSD</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="center">
              <IdoBtn>Join IDO</IdoBtn>
            </Flex>
          </Ido>
        </Flex>
      </BgWrapper>
    </FlexWrapper>
  )
}

export default IDOPool
