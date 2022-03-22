import React, { useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { Flex, Button, Text, useMatchBreakpoints } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'

const Section = styled(Flex)`
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 100px 0 200px;
  }
`

const Heading = styled.p<{ font?: string }>`
  font-family: ${({ font }) => font || 'FSMagistralLight'};
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #150159;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 55px;
    line-height: 65px;
  }
`

const Label = styled.p`
  font-family: FSMagistralMedium;
  font-size: 20px;
  line-height: 23px;
  text-align: justify;
  color: #150159;
  padding: 15px 0 30px;
`

const Text = styled.p`
  font-family: FSMagistralBold;
  font-size: 21px;
  line-height: 30px;
  color: #150159;
  padding: 30px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: justify;
    font-size: 25px;
    line-height: 35px;
    padding: 15px 0 0;
  }
`

const ButtonStyle = styled(Button)`
  background: linear-gradient(94.76deg, #44aeea 0%, #5150ff 139.11%);
  border-radius: 9.24812px;
  width: 167px;
  height: 48px;
  border: 0;
  font-family: FSMagistralMedium;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`

const Wrapper = styled.div`
  max-width: 662px;
  padding: 20px 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 20px;
    padding-right: 0;
  }
`

const Picture = styled.picture`
  padding: 0 10px;
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
  cursor: pointer;
  img {
    height: 40px;
    ${({ theme }) => theme.mediaQueries.md} {
      height: 52px;
    }
  }
`

const LoopStarter = () => {
  const { t } = useTranslation()
  const refViewAll = useRef()
  const { isMobile } = useMatchBreakpoints()
  const moveToViewAll = useCallback(() => {
    refViewAll &&
      refViewAll?.current.scrollIntoView({
        behavior: 'smooth',
      })
  }, [])

  const handleOnClick = () => {
    window.open('https://docs.loopstarter.com/', 'blank')
  }

  return (
    <Section justifyContent="center" alignItems="center" flexDirection="column">
      <Heading ref={refViewAll}>{t('About')}</Heading>
      <Heading font="FSMagistralBold">{t('LOOP STARTER')}</Heading>
      <ArrowWrapper onClick={moveToViewAll}>
        <Image src="/images/home/arrow-1.png" alt="nodle" width="21" height="52" layout="intrinsic" />
      </ArrowWrapper>

      <Flex flexWrap="wrap" alignItems="flex-start" padding={[null, '40px 0 0', '55px 0 0']}>
        <Picture>
          <Image src="/images/home/laptop.png" alt="LOOP STARTER" width="760" height="466" layout="intrinsic" />
        </Picture>
        <Wrapper>
          <Text>{t('LOOPSTARTER - DIVERSIFYING DECENTRALIZED FINANCES')}</Text>
          <Label>
            {!isMobile
              ? t(
                  'LOOPStarter is beyond just being an IDO Launchpad platform. It’s an integrated ecosystem that introduces an all-in-one solution to launch and manage decentralized finances. It supports all the major Multi-chain wallets along with our inline wallet management system. The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner. Further, it will have LOOP DEX, token swapping, staking, vesting & other capabilities that we’ll cover later in depth. ',
                )
              : 'LOOPStarter is beyond just being an IDO Launchpad platform. It’s an integrated ecosystem that introduces an all-in-one solution to launch and manage decentralized finances'}
          </Label>
          <ButtonStyle href="https://docs.loopstarter.com/" target="blank" onClick={handleOnClick}>
            {t('Learn more')}
          </ButtonStyle>
        </Wrapper>
      </Flex>
    </Section>
  )
}

export default LoopStarter
