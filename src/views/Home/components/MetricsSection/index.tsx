import React, { useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'

import LangSelector from 'components/Menu/LangSelector'
import { languageList } from 'config/localization/languages'
import IconCard, { IconCardData } from '../IconCard'
import GradientLogo from '../GradientLogoSvg'
import IDOPool from './IDOPool'
import StatCardContent from './StatCardContent'
import LoopStarter from './LoopStarter'
import LoopNew from './LoopNew'
import Footer from './Footer'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Section = styled(Flex)`
  background-image: url('/images/home/ido-bg.jpg');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 104px 0 0;
`

const Heading = styled.p`
  font-family: FSMagistralBold;
  font-size: 61.8284px;
  line-height: 87px;
  color: #6FA8FF;
`

const Label = styled.p`
  font-family: FSMagistralMedium;
  font-size: 23.1857px;
  line-height: 30px;
  color: #6EA8FF;
`

const ViewAll = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 -110px;
`

const Title = styled.p<{ color?: string }>`
  font-family: FSMagistralLight;
  font-size: 55px;
  line-height: 65px;
  text-align: center;
  color: ${({ color }) => color || '#150159'};
  span {
    font-family: FSMagistralBold;
  }

`

const Picture = styled.picture`
  padding: 10px 35px;
`

const Language = styled.p`
  font-family: FSMagistralMedium;
  font-size: 35.8115px;
  line-height: 41px;
  text-align: center;
  color: #FFFFFF;
`

const Li = styled.li`
  font-family: FSMagistralMedium;
  font-size: 24px;
  line-height: 75px;
  color: #FFFFFF;
`

const Ul = styled.ul<{ padding?: string }>`
  list-style: none;
  padding: ${({ padding }) => padding || '0'};
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
    transform: scale(1.2,1.2) translate(0px, 25px);
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

`

const FlexWrapper = styled(Flex)`
  padding: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 490px 0 0;
  }
`

const Stats = () => {
  const data = useGetStats()
  const { theme } = useTheme()
  const refStaking = useRef();
  const refLoopNew = useRef();
  const refViewAll = useRef();

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const { currentLanguage, setLanguage, t } = useTranslation()  

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

  const moveToOutPartner = useCallback(() => {
    refStaking && refStaking?.current.scrollIntoView({
      behavior: "smooth",
    });
  },[]);

  const moveToLoopNew = useCallback(() => {
    refLoopNew && refLoopNew?.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  const moveToViewAll = useCallback(() => {
    refViewAll && refViewAll?.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <Section justifyContent="center" alignItems="center" flexDirection="column">
      <Heading>
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
      
      <LoopStarter />
      <div>
        <Flex justifyContent="center" alignItems="center" flexDirection="column" padding="100px 0 131px">
         <Title  ref={refLoopNew}>
            LOOP <span> NEWS</span>
          </Title>
          <ArrowWrapper onClick={moveToLoopNew}>
            <picture>
              <img src="/images/home/arrow-1.png" alt={t('Lunar bunny')} />
            </picture>
          </ArrowWrapper>
        </Flex>
         
        <Flex flexWrap="wrap">
          <LoopNew
            img="/images/home/1.png"
            title="True Global Ventures invests 5 million USD in ChromaWay to develop Web3"
            description="ChromaWay is a leading Web3 pioneer based in Stockholm. ChromaWay created the first protocol for issuing Colored Coins in 2012, then used Colored Coin to issue fiat currency together with LHV bank (Lõhmus, Haavel & Viisemann) in 2014 and startups crowdfunding on the Funderbeam platform."
          />
          <LoopNew
            img="/images/home/2.png"
            title="True Global Ventures invests 5 million USD in ChromaWay to develop Web3"
            description="ChromaWay is a leading Web3 pioneer based in Stockholm. ChromaWay created the first protocol for issuing Colored Coins in 2012, then used Colored Coin to issue fiat currency together with LHV bank (Lõhmus, Haavel & Viisemann) in 2014 and startups crowdfunding on the Funderbeam platform."
          />
          <LoopNew
            img="/images/home/3.png"
            title="True Global Ventures invests 5 million USD in ChromaWay to develop Web3"
            description="ChromaWay is a leading Web3 pioneer based in Stockholm. ChromaWay created the first protocol for issuing Colored Coins in 2012, then used Colored Coin to issue fiat currency together with LHV bank (Lõhmus, Haavel & Viisemann) in 2014 and startups crowdfunding on the Funderbeam platform."
          />
        </Flex>
      </div>
      <StarsWrapper>
        <picture style={{ margin: "-125px 0 0"}}>
          <img src="/images/home/isolation-mode.png" alt={t('Lunar bunny')} />
        </picture>
      </StarsWrapper>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" padding="100px 0 131px">
         <Title color="#fff">
            OUT <span> PARTNER</span>
          </Title>
          <ArrowWrapper onClick={moveToOutPartner}>
            <picture>
              <img src="/images/home/arrow-3.png" alt={t('Lunar bunny')} />
            </picture>
          </ArrowWrapper>
        </Flex>
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
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
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
            <picture style={{padding: '0 47px'}}>
              <a href="https://twitter.com/Loopstarter" target="_blank">
                <img src="/images/home/twitter-1.png" alt={t('twitter')} />
              </a>
            </picture>
            <Flex >
              <LangSelector
                currentLang={currentLanguage.code}
                langs={languageList}
                setLang={setLanguage}
              />
            </Flex>
          </Flex>
        </FlexWrapper>
      

        <Flex flexWrap="wrap" alignItems="flex-start" flexWrap="wrap">
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
      </Flex>
    </Section>
  )
}

export default Stats
