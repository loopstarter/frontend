import React, { useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Button, Text } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'

const Section = styled(Flex)`
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0 200px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 100px 0 200px;
  }
`

const Heading = styled.p<{ font?: string }>`
  font-family: ${({ font }) => font || 'FSMagistralLight'};
  font-size: 41px;
  line-height: 58px;
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
  font-size: 23px;
  line-height: 34px;
  color: #150159;
  padding: 30px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
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
  max-width: 577px;
  padding: 0 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 0 0 37px;
  }
`

const Picture = styled.picture`
  padding: 20px 20px 0;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
    padding: 0 37px 0 0;
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

  const moveToViewAll = useCallback(() => {
    refViewAll &&
      refViewAll?.current.scrollIntoView({
        behavior: 'smooth',
      })
  }, [])

  return (
    <Section justifyContent="center" alignItems="center" flexDirection="column">
      <Heading ref={refViewAll}>{t('About')}</Heading>
      <Heading font="FSMagistralBold">{t('LOOP STARTER')}</Heading>
      <ArrowWrapper onClick={moveToViewAll}>
        <picture>
          <img src="/images/home/arrow-1.png" alt={t('Lunar bunny')} />
        </picture>
      </ArrowWrapper>

      <Flex flexWrap="wrap" alignItems="flex-start" padding="55px 0 0">
        <Picture>
          <img src="/images/home/laptop.png" alt={t('laptop')} />
        </Picture>
        <Wrapper>
          <Text>{t('LOOPSTARTER - DIVERSIFYING DECENTRALIZED FINANCES')}</Text>
          <Label>
            {t(
              'LOOPStarter is beyond just being a IDO Launchpad platform. It’s an integrated ecosystem that introduces an all-in-one solution to launch and manage decentralized finances. It supports all the major Multi-chain wallets along with our inline wallet management system. The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner. Further, it will have LOOP DEX, token swapping, staking, vesting & other capabilities that we’ll cover later in depth. ',
            )}
          </Label>
          <ButtonStyle>{t('Learn more')}</ButtonStyle>
        </Wrapper>
      </Flex>
    </Section>
  )
}

export default LoopStarter
