import React, { useRef, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled, { keyframes } from 'styled-components'
import { Flex, useMatchBreakpoints } from '@loopstarter/uikit'
import Slider from 'react-slick'
import dynamic from 'next/dynamic'
import loadable from '@loadable/component'
import { useTranslation } from 'contexts/Localization'
import { parse1, parse2, parse3, parse4 } from './constants'

const IDOLoopPool = loadable(() => import('./IDOLoopPool'))
const Team = loadable(() => import('./Team'))
const LoopStarter = dynamic(() => import('./LoopStarter'))
const LoopNew = dynamic(() => import('./LoopNew'))
const Roadmap = dynamic(() => import('./Roadmap'))
const RoadmapLoop = dynamic(() => import('./RoadmapLoop'))
const Footer = dynamic(() => import('../Footer'))
const OurAdvisors = dynamic(() => import('./OurAdvisors'))

const Section = styled(Flex)`
  background-image: url('/images/home/ido-bg-mobile.jpg');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 50px 0 0;
    background-image: url('/images/home/ido-bg.jpg');
  }
`

const Heading = styled.p<{ font?: string; color?: string; padding?: string }>`
  font-family: FSMagistralBold;
  font-family: ${({ font }) => font || 'FSMagistralBold'};
  font-size: 40px;
  line-height: 72px;
  color: ${({ color }) => color || '#6fa8ff'};
  padding: ${({ padding }) => padding || '0'};
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 62px;
    line-height: 87px;
    padding: 0;
  }
`

const Title = styled.p<{ color?: string }>`
  font-family: FSMagistralLight;
  font-size: 34px;
  line-height: 40px;
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

const FlexBox = styled(Flex)`
  padding: 50px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 100px 0;
  }
`

const Future = styled(Flex)`
  background-image: url('/images/home/future-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  justify-content: left;
  align-items: center;
  margin: 100px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/home/future-bg.png');
    justify-content: center;
    margin: 150px 0 0;
    max-width: 1500px;
    width: 90%;
    height: auto;
    background-position: center;
    padding: 44px 20px 40px;
  }
  picture {
    max-width: 70%;
    margin: 0 auto;
  }
`

const Text = styled.p`
  font-family: FSMagistralBold;
  font-size: 16px;
  line-height: 39px;
  text-align: center;
  color: #ff5656;
  padding: 0 0 40px;
  span {
    color: #5685ff;
    font-family: FSMagistralBold;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 28px;
  }
`

const RoadmapWrapper = styled(Flex)`
  width: auto;
  position: relative;
  flex-direction: column;
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 1236px;
    display: flex;
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

const LoopNewWrapper = styled(Flex)`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Stats = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { q } = router.query
  useEffect(() => {
    if (q === 'team') {
      moveToTeam()
    } else if (q === 'roadmaps') {
      moveToRoadmaps()
    }
  }, [q])

  const refStaking = useRef()
  const refLoopNew = useRef()
  const refViewAll = useRef()
  const refTeam = useRef()
  const refRoadmaps = useRef()
  const { isMobile } = useMatchBreakpoints()

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

  const moveToTeam = useCallback(() => {
    refTeam &&
      refTeam?.current?.scrollIntoView({
        behavior: 'smooth',
      })
  }, [])

  const moveToRoadmaps = useCallback(() => {
    refRoadmaps &&
      refRoadmaps?.current?.scrollIntoView({
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
            <img src="/images/home/arrow.png" alt={t('LOOP STARTER')} />
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

        <Heading id="looppad">{t('IDO UPCOMING')}</Heading>
        <ArrowWrapper>
          <picture>
            <img src="/images/home/arrow.png" alt={t('IDO UPCOMING')} />
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
            <img src="/images/home/arrow.png" alt={t('LOOP STARTER')} />
          </picture>
        </ArrowWrapper>
        <Future>
          <picture>
            <img src="/images/home/future.png" alt={t('LOOP STARTER')} />
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
                <img src="/images/home/arrow-3.png" alt={t('LOOP STARTER')} />
              </picture>
            </ArrowWrapper>
          </FlexBox>

          <LoopNewWrapper flexWrap="wrap">
            <LoopNew
              link="https://loopstarter.substack.com/p/token-based-dao-and-its-responsibility?s=r"
              img="/images/home/2.png"
              title="What is DAO? Take the power of the collective to new heights."
              description="It goes without saying that the DAO model has long proved its efficiency in providing a successful system for collective management in crypto assets. However, it’s also true that its use cases can be taken a step further, and LOOPStarter makes this happen...."
            />
            <LoopNew
              link="https://loopstarter.substack.com/p/introducing-loopstarter-invest-or?r=1b140g&s=w&utm_campaign=post&utm_medium=web"
              img="/images/home/3.png"
              title="Several promising features set the LOOPStarter platform apart."
              description="LOOPStarter ecosystem helps to launch and manage Decentralized Finances. The platform looks to democratize cryptocurrencies investment & bring Multi-chain adoption in fruition. We plan to make crypto investment fair and open for everyone, along with its easy accessibility. The LOOPStarter ecosystem will have these solutions..."
            />
            <LoopNew
              link="https://loopstarter.substack.com/p/what-is-a-loops-token?s=r"
              img="/images/home/1.png"
              title="What is a LOOPS token?"
              description="LOOPStarter protocol will gain value over time thanks to its coin-burning and provide liquidity strategy, making LOOPS a deflationary digital currency. LOOPStarter also brings forward use cases that tend to appeal to more users. As DeFi continues to boom, it provides an effective platform that’s reliable..."
            />
          </LoopNewWrapper>
        </div>
        <Slider {...settings}>
          <LoopNew
            img="/images/home/2.png"
            title="What is DAO? Take the power of the collective to new heights."
            description="It goes without saying that the DAO model has long proved its efficiency in providing a successful system for collective management in crypto assets. However, it’s also true that its use cases can be taken a step further, and LOOPStarter makes this happen...."
          />
          <LoopNew
            img="/images/home/3.png"
            title="Several promising features set the LOOPStarter platform apart."
            description="LOOPStarter ecosystem helps to launch and manage Decentralized Finances. The platform looks to democratize cryptocurrencies investment & bring Multi-chain adoption in fruition. We plan to make crypto investment fair and open for everyone, along with its easy accessibility. The LOOPStarter ecosystem will have these solutions..."
          />
          <LoopNew
            img="/images/home/1.png"
            title="What is a LOOPS token?"
            description="LOOPStarter protocol will gain value over time thanks to its coin-burning and provide liquidity strategy, making LOOPS a deflationary digital currency. LOOPStarter also brings forward use cases that tend to appeal to more users. As DeFi continues to boom, it provides an effective platform that’s reliable..."
          />
        </Slider>
        <StarsWrapper>
          <picture style={{ margin: '-125px 0 0' }}>
            <img src="/images/home/isolation-mode.png" alt={t('LOOP STARTER')} />
          </picture>
        </StarsWrapper>
        <Heading padding="100px 0 0" font="FSMagistralLight" ref={refRoadmaps} color="#6fa8ff">
          {t('LOOP')}
        </Heading>
        <Heading color="#6fa8ff">{t('ROADMAP')}</Heading>

        <ArrowWrapper onClick={moveToRoadmaps}>
          <picture>
            <img src="/images/home/arrow.png" alt={t('LOOP STARTER')} />
          </picture>
        </ArrowWrapper>
        <RoadmapWrapper>
          <Flex flexDirection={['column', null, null, 'row']}>
            <Roadmap
              icon={isMobile ? '/images/home/parse-1-mobile.png' : '/images/home/parse-1.png'}
              title="Phase 1: Development"
              items={parse1}
            />
            <Roadmap icon="/images/home/parse-2.png" title="Phase 2: Testnet" items={parse2} />
          </Flex>
          <Flex flexDirection={['column-reverse', null, null, 'column']}>
            <SectionCenter>
              <RoadmapLoop />
            </SectionCenter>
            <Flex flexDirection={['column', null, null, 'row']}>
              <Roadmap icon="/images/home/parse-4.png" title="Phase 4: LOOPStarter V2" items={parse4} />
              <Roadmap icon="/images/home/parse-3.png" title="Phase 3: Mainnet" items={parse3} />
            </Flex>
          </Flex>
        </RoadmapWrapper>
        <Slider {...settings} className="roadmap">
          <Flex flexDirection={['column', null, null, 'row']}>
            <Roadmap
              icon={isMobile ? '/images/home/parse-1-mobile.png' : '/images/home/parse-1.png'}
              title="Phase 1: Development"
              items={parse1}
            />
            <RoadmapLoop />
          </Flex>
          <Flex flexDirection={['column', null, null, 'row']}>
            <Roadmap icon="/images/home/parse-2.png" title="Phase 2: Testnet" items={parse2} />
            <RoadmapLoop />
          </Flex>
          <Flex flexDirection={['column', null, null, 'row']}>
            <Roadmap icon="/images/home/parse-3.png" title="Phase 3: Mainnet" items={parse3} />
            <RoadmapLoop />
          </Flex>
          <Flex flexDirection={['column', null, null, 'row']}>
            <Roadmap icon="/images/home/parse-4.png" title="Phase 4: LOOPStarter V2" items={parse4} />
            <RoadmapLoop />
          </Flex>
        </Slider>
        <FlexBox justifyContent="center" alignItems="center" flexDirection="column" id="team">
          <Title color="#fff">Loops</Title>
          <Title color="#fff">
            <span> TEAMS</span>
          </Title>
          <ArrowWrapper onClick={moveToOutPartner}>
            <picture>
              <img src="/images/home/arrow-3.png" alt={t('LOOP STARTER')} />
            </picture>
          </ArrowWrapper>
          <Team ref={refTeam} />
        </FlexBox>
        <FlexBox justifyContent="center" alignItems="center" flexDirection="column" id="advisors">
          <Title color="#fff">
            <span>OUR ADVISORS</span>
          </Title>
          <ArrowWrapper>
            <picture>
              <img src="/images/home/arrow-3.png" alt={t('OUR ADVISORS')} />
            </picture>
          </ArrowWrapper>
          <OurAdvisors />
        </FlexBox>

        <FlexBox justifyContent="center" alignItems="center" flexDirection="column" id="partner">
          <Title color="#fff">
            OUR <span> PARTNER AND INVESTORS</span>
          </Title>
          <ArrowWrapper onClick={moveToOutPartner}>
            <picture>
              <img src="/images/home/arrow-3.png" alt={t('LOOP STARTER')} />
            </picture>
          </ArrowWrapper>
        </FlexBox>
        <Flex ref={refStaking} justifyContent="center" flexWrap="wrap" alignItems="center" padding="0 0 148px">
          <Picture>
            <img src="/images/home/changelly.png" alt={t('changelly')} />
          </Picture>
          <Picture>
            <img src="/images/home/orientCapital.png" alt={t('orientCapital')} />
          </Picture>
          <Picture>
            <img src="/images/home/getBlock.png" alt={t('getBlock')} />
          </Picture>
          <Picture>
            <img src="/images/home/legioDAO.png" alt={t('legioDAO')} />
          </Picture>

          <Picture>
            <img src="/images/home/verichains.png" alt={t('verichains')} />
          </Picture>
          <Picture>
            <img src="/images/home/whitelistAlert.png" alt={t('whitelistAlert')} />
          </Picture>
          <Picture>
            <img src="/images/home/diviner.png" alt={t('diviner')} />
          </Picture>
          <Picture>
            <img src="/images/home/erax.png" alt={t('erax')} />
          </Picture>
          <Picture>
            <img src="/images/home/cryptoSyzygy.png" alt={t('cryptoSyzygy')} />
          </Picture>

          <Picture>
            <img src="/images/home/metamoonshots.png" alt={t('metamoonshots')} />
          </Picture>
          <Picture>
            <img src="/images/home/gotbit.png" alt={t('gotbit')} />
          </Picture>
          <Picture>
            <img src="/images/home/coinmarketcap.png" alt={t('coinmarketcap')} />
          </Picture>
          <Picture>
            <img src="/images/home/coingecko.png" alt={t('coingecko')} />
          </Picture>
        </Flex>
        {/* <Text>
          - The project is not optimized for the <span>Safari</span> browser. Please do not use <span>Safari</span> -
        </Text> */}
      </Section>
      <Footer />
    </>
  )
}

export default Stats
