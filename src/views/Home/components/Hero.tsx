import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Flex, Heading, Button } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import SvgComponent from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const animText = () => keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
  background-image: url('/images/home/banner-01.svg');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
`

const HeadingTitle = styled(Heading)`
  animation: ${animText} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  font-family: FSMagistralBold;
  font-size: 44px;
  line-height: 124px;
  color: #6FA8FF;
  padding: 700px 0 0;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 88px;
    text-align: right;
  }
`

const Description = styled.p`
  animation: ${animText} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  font-family: FSMagistralLight;
  font-size: 33.2932px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  padding: 0 0 18px;
`

const ButtonStyle = styled(Button)`
  margin: 0 9px;
  background: linear-gradient(94.76deg, #44AEEA 0%, #5150FF 139.11%);
  border-radius: 9.24812px;
  width: 110px;
  height: 48px;
  border: 0;
  font-family: FSMagistralMedium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 140px;
  }
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  animation: ${fading} 3.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite;
  position: absolute;
  top: 80px;
  padding-left: 61px;
  @media screen and (min-width: 1432px) {
    top: 96px;
  }
  img {
    width: 170px;
  }
`

const PolyGonWrapper = styled.div`
  animation: ${fading} 3.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite;
  position: absolute;
  top: 122px;
  left: 153px;
  @media screen and (min-width: 1432px) {
    top: 123px;
  }
  img {
    width: 120px;
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

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'loop'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
       
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center">
          {/* <BunnyWrapper>
            <picture>
              <source type="image/webp" srcSet={getSrcSet(imagePath, imageSrc, '.webp')} />
              <source type="image/png" srcSet={getSrcSet(imagePath, imageSrc)} />
              <img src={`${imagePath}${imageSrc}.png`} alt={t('Lunar bunny')} />
            </picture>
          </BunnyWrapper>
          <PolyGonWrapper>
            <picture>
              <img src='/images/home/polygon.png' alt={t('Lunar bunny')} />
            </picture>
          </PolyGonWrapper> */}
          <HeadingTitle scale="xxl" color="secondary" mb="24px">
            {t('LOOP STARTER')}
          </HeadingTitle>
          <Description>
            {t('Welcome to the future of fundraising. Finally, a platform built for:')}
          </Description>
          <Flex>
            <NextLinkFromReactRouter to="/swap">
              <ButtonStyle variant={!account ? 'secondary' : 'primary'}>{t('Investors')}</ButtonStyle>
            </NextLinkFromReactRouter>
            <NextLinkFromReactRouter to="/swap">
              <ButtonStyle variant={!account ? 'secondary' : 'primary'}>{t('Teams')}</ButtonStyle>
            </NextLinkFromReactRouter>
            <NextLinkFromReactRouter to="/swap">
              <ButtonStyle variant={!account ? 'secondary' : 'primary'}>{t('Communities')}</ButtonStyle>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
        
      </Flex>
    </>
  )
}

export default Hero
