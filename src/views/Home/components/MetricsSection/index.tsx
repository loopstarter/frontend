import React, { useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, useMatchBreakpoints } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'

import LangSelector from 'components/Menu/LangSelector'
import { languageList } from 'config/localization/languages'
import IDOLoopPool from './IDOLoopPool'
import LoopStarter from './LoopStarter'
import LoopNew from './LoopNew'
// import Footer from './Footer'
import Roadmap from './Roadmap'
import Team from './Team'
import { parse1 } from './constants'
import RoadmapLoop from './RoadmapLoop'

const Section = styled(Flex)`
  background-image: url('/images/home/ido-bg-mobile.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 50px 0 0;
    background-image: url('/images/home/ido-bg.jpg');
  }
`

const Heading = styled.p<{ font?: string; color?: string }>`
  font-family: FSMagistralBold;
  font-family: ${({ font }) => font || 'FSMagistralBold'};
  font-size: 40px;
  line-height: 72px;
  color: ${({ color }) => color || '#6fa8ff'};
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 62px;
    line-height: 87px;
  }
`

const Title = styled.p<{ color?: string }>`
  font-family: FSMagistralLight;
  font-size: 45px;
  line-height: 65px;
  text-align: center;
  color: ${({ color }) => color || '#150159'};
  span {
    font-family: FSMagistralBold;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 55px;
    line-height: 65px;
  }
`

const Picture = styled.picture`
  padding: 55px 35px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 10px 35px;
  }
`

const Li = styled.li`
  font-family: FSMagistralMedium;
  font-size: 24px;
  line-height: 75px;
  font-weight: 400;
  color: #ffffff;
`

const Ul = styled.ul<{ padding?: string }>`
  list-style: none;
  padding: ${({ padding }) => padding || '0'};
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
    transform: translate(0,  0px);
  }
  50% {
    opacity: 0.1;
    transform: translate(0, -15px);
  }
  }
  to {
    opacity: 0.9;
    transform: translate(0, 0px);
  }
`

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: scale(1.1,1.1) translate(0px, 25px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const StarsWrapper = styled.div`
  animation: ${fading} 4s ease-in-out infinite;
  animation-delay: 1s;

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

const FlexWrapper = styled(Flex)`
  padding: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 490px 0 0;
  }
`

const FlexBox = styled(Flex)`
  padding: 50px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 100px 0;
  }
`

const Footer = styled(Flex)`
  background-image: url('/images/home/footer-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 44px 20px 0;
  justify-content: left;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/home/footer-bg.png');
    justify-content: center;
    padding-top: 48px;
  }
`

const Future = styled(Flex)`
  background-image: url('/images/home/future-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 44px 20px 0;
  justify-content: left;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/home/future-bg.png');
    justify-content: center;
    margin: 150px 0 0;
    max-width: 1500px;
    width: 90%;
    height: auto;
    background-position: center;
  }
`

const RoadmapWrapper = styled(Flex)`
  width: auto;
  position: relative;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 1236px;
  }
`

const SectionCenter = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: -140px;
    margin-bottom: -275px;
  }
`

const Stats = () => {
  const refStaking = useRef()
  const refLoopNew = useRef()
  const refViewAll = useRef()
  const { isMobile } = useMatchBreakpoints()
  const { currentLanguage, setLanguage, t } = useTranslation()

  const moveToOutPartner = useCallback(() => {
    refStaking &&
      refStaking?.current.scrollIntoView({
        behavior: 'smooth',
      })
  }, [])

  const moveToLoopNew = useCallback(() => {
    refLoopNew &&
      refLoopNew?.current.scrollIntoView({
        behavior: 'smooth',
      })
  }, [])
  const moveToViewAll = useCallback(() => {
    refViewAll &&
      refViewAll?.current.scrollIntoView({
        behavior: 'smooth',
      })
  }, [])
  return (
    <>
      <Section justifyContent="center" alignItems="center" flexDirection="column">
        {/* <Heading>
        {t('IDO POOLS')}
      </Heading>
      <ViewAll ref={refViewAll}>
        <ArrowWrapper onClick={moveToViewAll}>
          <picture>
            <img src="/images/home/arrow.png" alt={t('Lunar bunny')} />
          </picture>
         </ArrowWrapper>
        <Label>View All</Label>
      </ViewAll>
      <Flex flexWrap="wrap" alignItems="center">
        <IDOPool />
        <IDOPool  padding="0 60px 140px" margin="145px 0 0"/>
        <IDOPool />
      </Flex>
       */}

        <Heading>{t('IDO UPCOMING')}</Heading>
        <ArrowWrapper>
          <picture>
            <img src="/images/home/arrow.png" alt={t('Lunar bunny')} />
          </picture>
        </ArrowWrapper>
        <IDOLoopPool />
        <LoopStarter />
        <Heading font="FSMagistralLight" ref={refViewAll} color="#150159">
          {t('Future')}
        </Heading>
        <Heading color="#150159">{t('LOOP STARTER')}</Heading>

        <ArrowWrapper onClick={moveToViewAll}>
          <picture>
            <img src="/images/home/arrow.png" alt={t('Lunar bunny')} />
          </picture>
        </ArrowWrapper>
        <Future>
          <picture>
            <img src="/images/home/future.png" alt={t('Lunar bunny')} />
          </picture>
        </Future>
        <div>
          <FlexBox alignItems="center" flexDirection="column">
            <Title ref={refLoopNew} color="#fff">
              LOOP
            </Title>
            <Title ref={refLoopNew} color="#fff">
              <span> NEWS & LEARNING</span>
            </Title>
            <ArrowWrapper onClick={moveToLoopNew}>
              <picture>
                <img src="/images/home/arrow-3.png" alt={t('Lunar bunny')} />
              </picture>
            </ArrowWrapper>
          </FlexBox>

          <Flex flexWrap="wrap">
            <LoopNew
              img="/images/home/2.png"
              title="What is DAO? Take the power of the collective to new heights."
              description="It goes without saying that the DAO model has long proved its efficiency in providing a successful system for collective management in crypto assets. However, it’s also true that its use cases can be taken a step further, and LOOPStarter makes this happen...."
            />
            <LoopNew
              img="/images/home/1.png"
              title="Several promising features set the LOOPStarter platform apart."
              description="LOOPStarter ecosystem helps to launch and manage Decentralized Finances. The platform looks to democratize cryptocurrencies investment & bring Multi-chain adoption in fruition. We plan to make crypto investment fair and open for everyone, along with its easy accessibility. The LOOPStarter ecosystem will have these solutions..."
            />
            <LoopNew
              img="/images/home/3.png"
              title="What is a LOOPS token?"
              description="LOOPStarter protocol will gain value over time thanks to its coin-burning and provide liquidity strategy, making LOOPS a deflationary digital currency. LOOPStarter also brings forward use cases that tend to appeal to more users. As DeFi continues to boom, it provides an effective platform that’s reliable..."
            />
          </Flex>
        </div>
        <StarsWrapper>
          <picture style={{ margin: '-125px 0 0' }}>
            <img src="/images/home/isolation-mode.png" alt={t('Lunar bunny')} />
          </picture>
        </StarsWrapper>
        <Heading font="FSMagistralLight" ref={refViewAll} color="#150159">
          {t('LOOP')}
        </Heading>
        <Heading color="#150159">{t('ROADMAP')}</Heading>

        <ArrowWrapper onClick={moveToViewAll}>
          <picture>
            <img src="/images/home/arrow.png" alt={t('Lunar bunny')} />
          </picture>
        </ArrowWrapper>
        <RoadmapWrapper>
          <Flex flexDirection={['column', null, null, 'row']}>
            <Roadmap icon="/images/home/parse-1.png" title="Phase 1: Development" items={parse1} />
            <Roadmap icon="/images/home/parse-2.png" title="Phase 2: Testnet" items={parse1} />
          </Flex>
          <Flex flexDirection={['column-reverse', null, null, 'column']}>
            <SectionCenter>
              <RoadmapLoop />
            </SectionCenter>
            <Flex flexDirection={['column', null, null, 'row']}>
              <Roadmap icon="/images/home/parse-3.png" title="Phase 3: Mainnet" items={parse1} />
              <Roadmap icon="/images/home/parse-4.png" title="Phase 4: LOOPStarter V2" items={parse1} />
            </Flex>
          </Flex>
        </RoadmapWrapper>
        <FlexBox justifyContent="center" alignItems="center" flexDirection="column">
          <Title color="#fff">
            Loops
            <span> TEAMS</span>
          </Title>
          <ArrowWrapper onClick={moveToOutPartner}>
            <picture>
              <img src="/images/home/arrow-3.png" alt={t('Lunar bunny')} />
            </picture>
          </ArrowWrapper>
          <Team />
        </FlexBox>
        <FlexBox justifyContent="center" alignItems="center" flexDirection="column">
          <Title color="#fff">
            OUR <span> PARTNER</span>
          </Title>
          <ArrowWrapper onClick={moveToOutPartner}>
            <picture>
              <img src="/images/home/arrow-3.png" alt={t('Lunar bunny')} />
            </picture>
          </ArrowWrapper>
        </FlexBox>
        <Flex ref={refStaking} justifyContent="center" flexWrap="wrap" alignItems="center" padding="0 0 148px">
          <Picture>
            <img src="/images/home/emurgo.png" alt={t('emurgo')} />
          </Picture>
          <Picture>
            <img src="/images/home/cFund.png" alt={t('cFund')} />
          </Picture>
          <Picture>
            <img src="/images/home/coin360.png" alt={t('coin360')} />
          </Picture>
          <Picture>
            <img src="/images/home/cardano.png" alt={t('cardano')} />
          </Picture>
          <Picture>
            <img src="/images/home/scalable.png" alt={t('scalable')} />
          </Picture>
        </Flex>
      </Section>
      <Footer justifyContent="center" flexWrap="wrap">
        <FlexWrapper flexDirection="column" flexWrap="wrap">
          <picture>
            <img src="/images/home/logo.png" alt={t('logo')} />
          </picture>
          <Flex padding="50px 0 0" alignItems="center">
            <picture>
              <a href="https://t.me/Loopstarter" target="_blank">
                <img src="/images/home/message.png" alt={t('message')} />
              </a>
            </picture>
            <picture style={{ padding: '0 47px' }}>
              <a href="https://twitter.com/Loopstarter" target="_blank">
                <img src="/images/home/twitter-1.png" alt={t('twitter')} />
              </a>
            </picture>
            <Flex>
              <LangSelector currentLang={currentLanguage.code} langs={languageList} setLang={setLanguage} />
            </Flex>
          </Flex>
        </FlexWrapper>

        <Flex flexWrap="wrap" alignItems="flex-start">
          <Ul>
            <Li>About Us</Li>
            <Li>Ecosystem</Li>
            <Li>VC DAO</Li>
          </Ul>
          <Ul padding={isMobile ? '0' : '0 68px'}>
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
      </Footer>
    </>
  )
}

export default Stats
