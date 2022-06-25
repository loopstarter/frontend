import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Button, Slider } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useCountDownTimer from 'hooks/useCountDownTimer'
import useCountdown from '../../../Predictions/hooks/useCountdown';
import getTimePeriods from 'utils/getTimePeriods';

const BgWrapper = styled(Flex)`
  background-image: url('/images/home/loop-ido.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 370px;
  height: 450px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 850px;
    height: 995px;
  }
`

const HeadingTitle = styled.p`
  font-family: HKGroteskBold;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  padding: 110px 0 3px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 25.2515px;
    line-height: 29px;
    padding: 265px 0 8px;
  }
`

const Description = styled.p`
  font-family: HKGrotesk;
  font-size: 8px;
  line-height: 11px;
  text-align: justify;
  color: #ffffff;
  span {
    font-weight: 500;
  }
  max-width: 300px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 19px;
    line-height: 24px;
    max-width: 646px;
  }
`

const TimeWrapper = styled.div`
  width: 310px;
  background: linear-gradient(96.18deg, rgba(255, 255, 255, 0.22) 3.05%, rgba(255, 255, 255, 0.15) 104.29%);
  border-radius: 5px;
  display: flex;
  padding: 10px;
  margin: 7px 0;
  justify-content: space-around;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 18px 0 16px;
  }
`

const Time = styled.p`
  font-family: HKGroteskBold;
  font-size: 16px;
  line-height: 19px;
  color: #f2c94c;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 35px;
    line-height: 40px;
  }
`

const TimeLabel = styled.p`
  font-family: HKGroteskLight;
  font-size: 7px;
  line-height: 8px;
  text-align: center;
  color: #ffffff;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15.4571px;
    line-height: 18px;
  }
`

const FlexWrapper = styled(Flex)<{ padding?: string; margin?: string }>`
  padding: 0;
  margin: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ margin }) => margin};
    padding: 140px 0 0;
  }
`

const BtnStyle = styled(Button)`
  height: 15px;
  background: rgba(83, 245, 255, 0.49);
  border-radius: 90px;
  font-family: HKGroteskBold;
  font-size: 7px;
  line-height: 8px;
  text-align: center;
  padding: 3.31px 4.97px;
  color: #fff;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    line-height: 19px;
    height: 33px;
    padding: 7.14px 10.7px;
  }
`

const Ido = styled(Flex)`
  background-image: url('/images/home/ido-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 303px;
  height: 170px;
  position: relative;
  margin: 10px 0 0;
  padding: 12px 0 0 18px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 653px;
    height: 340px;
    padding: 23px 40px;
    margin: 20px 0 0;
  }
`

const Text = styled.p<{ fontFamily?: string; padding?: string }>`
  font-family: ${({ fontFamily }) => fontFamily || 'HKGrotesk'};
  font-size: 11px;
  line-height: 13px;
  color: #ffffff;
  font-weight: ${({ fontFamily }) => (fontFamily ? '700' : '500')};
  padding: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 24px;
    line-height: 28px;
    padding: ${({ padding }) => padding || '0'};
  }
`

const Line = styled.div`
  height: 1px;
  background: #fff;
  width: 100%;
  margin: 5px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 14px 0;
  }
`

const IdoBtn = styled(Button)`
  width: 102px;
  height: 32px;
  background: linear-gradient(106.04deg, #ffc677 -44.63%, #c94fd8 92.68%);
  border-radius: 7px;
  font-family: FSMagistralMedium;
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  color: #fff;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 220px;
    height: 71px;
    border-radius: 15px;
    font-size: 27px;
    line-height: 36px;
    padding: 13px 37px 23px 38px;
  }
`

const nextIDO = {
  name: 'WALKN',
  token: 'WALKN',
  description1: 'WalkN App I Walk, Jog, or Run & Earn Rewards!',
  description2:
    "WalkN exists with only one mission - To bring people, fitness and crypto together by building a solid platform that rewards people to take care of their fitness. WalkN provides a platform for improving one's fitness while earning rewards in cryptocurrency.It leverages the newly born trend, Move2Earn.The app users purchase an NFT of their choice, start the app, and earn money with every step they take.",
  linkIdo: 'https://app.loopstarter.com',
  cap: '3,000,000,000',
  raise: '100,000 BUSD',
  exchange: '1 WALKN = 0.0049 BUSD',
  startTime: 1656151200,
}
// const nextIDO = {
//   name: 'LOOPSTARTER - LOOPS',
//   token: 'LOOPS',
//   description1:
//     'LOOPStarter was launched on a decentralized exchange - LOOPDEX using LOOPS tokens, which has become an exchange and a crowdfunding platform for all new projects.',
//   description2: 'The first DAO supports multi-chain, cross-platform launchpad with a full DEX and deflation mechanism.',
//   linkIdo: '/launchpad-details/1'
// }


const IDOPool: React.FC<{ padding?: string; margin?: string }> = ({ padding, margin }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { secondsRemaining } = useCountdown(nextIDO.startTime)
  const { days, hours, minutes, seconds } = getTimePeriods(secondsRemaining > 0 ?secondsRemaining: 0)

  const progress = 33.87
  return (
    <FlexWrapper
      flex="1"
      margin={margin}
      flexDirection="column"
      alignItems="center"
      position="relative"
      padding={padding || '0 0 100px'}
    >
      <BgWrapper
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['center', null, null, 'baseline']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center">
          <HeadingTitle>{t(nextIDO.name)}</HeadingTitle>
          <BtnStyle>Comming Soon</BtnStyle>
          <TimeWrapper>
            <div>
              <Time>{days}</Time>
              <TimeLabel>Day</TimeLabel>
            </div>
            <div>
              <Time>{hours}</Time>
              <TimeLabel>Hours</TimeLabel>
            </div>
            <div>
              <Time>{minutes}</Time>
              <TimeLabel>Minutes</TimeLabel>
            </div>
            <div>
              <Time>{seconds}</Time>
              <TimeLabel>Seconds</TimeLabel>
            </div>
          </TimeWrapper>
          <Description>{nextIDO.description1}</Description>
          <Description>{nextIDO.description2}</Description>
          <Ido>
            <Flex flexDirection="column" padding="0 45px 0 0">
              <Flex width="100%" justifyContent="space-between">
                <div>
                  <Text>Swap Amount</Text>
                  <Text>0 {nextIDO.token}</Text>
                </div>
                <Text>{nextIDO.exchange}</Text>
              </Flex>
              <Line />
              <Text>Swap progress</Text>
              <Flex alignItems="center">
                {/* @ts-expect-error: no comment */}
                <Slider width="100%" name="sliderdisabled" value={progress} min={1} max={100} />
                <Text>{progress}%</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between" padding="0 44px 0 0">
                <Text>{progress}%</Text>
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
                <Text>
                  {nextIDO.cap} {nextIDO.token}
                </Text>
                <Text>{nextIDO.raise}</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="center">
              <a href={nextIDO.linkIdo} target="_blank">
                <IdoBtn>Join IDO</IdoBtn>
              </a>
            </Flex>
          </Ido>
        </Flex>
      </BgWrapper>
    </FlexWrapper>
  )
}

export default IDOPool
