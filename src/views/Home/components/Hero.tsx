import styled, { keyframes } from 'styled-components'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Flex, Heading, Button } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'

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
  background-image: url('/images/home/banner-02.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/home/banner-01.webp');
  }
`

const HeadingTitle = styled(Heading)`
  animation: ${animText} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  font-family: FSMagistralBold;
  font-size: 35px;
  line-height: 61px;
  color: #6fa8ff;
  padding: 385px 0 0;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 88px;
    text-align: right;
    line-height: 124px;
    padding: 595px 0 0;
  }
`

const Description = styled.p`
  animation: ${animText} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  font-family: FSMagistralLight;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 33.2932px;
    line-height: 40px;
  }
`

const ButtonStyle = styled(Button)`
  margin: 0 9px;
  background: linear-gradient(94.76deg, #44aeea 0%, #5150ff 139.11%);
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
  color: #ffffff;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 140px;
  }
`

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <BgWrapper />
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center">
          <HeadingTitle scale="xxl" color="secondary" mb="24px">
            {t('LOOP STARTER')}
          </HeadingTitle>
          <Description>{t('Welcome to the future of fundraising.')}</Description>
          <Description>
            {t(
              'The first DAO supports a multi-chain, cross-platform launchpad with a full DEX and deflation mechanism.',
            )}
          </Description>
          <Flex padding="18px 0 0">
            <NextLinkFromReactRouter to="/#">
              <ButtonStyle variant={!account ? 'secondary' : 'primary'}>{t('Investors')}</ButtonStyle>
            </NextLinkFromReactRouter>
            <NextLinkFromReactRouter to="/?q=team">
              <ButtonStyle variant={!account ? 'secondary' : 'primary'}>{t('Teams')}</ButtonStyle>
            </NextLinkFromReactRouter>
            <NextLinkFromReactRouter to="/#">
              <ButtonStyle variant={!account ? 'secondary' : 'primary'}>{t('Communities')}</ButtonStyle>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
