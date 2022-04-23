import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Flex, useMatchBreakpoints, Button } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
import { languageList } from 'config/localization/languages'

const LangSelector = dynamic(() => import('components/Menu/LangSelector'))

const FooterStyle = styled(Flex)<{ bg?: string }>`
  background-image: ${({ bg }) => bg || 'url(/images/home/footer-bg.png)'};
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 44px 20px 34px;
  justify-content: space-around;
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: center;
    padding-top: 48px;
  }
`

const FlexWrapper = styled(Flex)`
  max-width: 1087px;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.xxxl} {
    max-width: 1404px;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
  }
`

const Text = styled.p<{ color?: string }>`
  font-family: FSMagistralLight;
  font-size: 19px;
  line-height: 20px;
  padding: 36px 0 0;
  color: ${({ color }) => color || '#fff'};
`

const Wrapper = styled.div`
  background: rgba(196, 196, 196, 0.25);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 33px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    margin: 0;
    padding: 20px 30px;
  }
`

const Title = styled.p`
  font-family: FSMagistralMedium;
  font-size: 20px;
  line-height: 31px;
  color: #ffffff;
  padding: 0 20px 0 0;
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
  ${({ theme }) => theme.mediaQueries.xxxl} {
    font-size: 24px;
  }
`

const IconLaunch = styled.span`
  background-image: url('/images/home/footer.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
  display: block;
  margin: 0 15px 0 0;
`

const ButtonStyle = styled(Button)`
  background: #8c0069;
  border-radius: 10px;
  font-family: FSMagistralMedium;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`

const Line = styled.span`
  height: 14px;
  width: 1px;
  background: #fff;
  margin: 0 0 27px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 16px;
  }
`

const StyledInternalLink = styled('a')`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
  font-family: FSMagistralLight;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
  padding: 0 0 27px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0;
  }
`

const Icon = styled.span`
  background-image: url('/images/home/footer-icon.png');
  max-width: 100%;
  background-size: 100%;
  display: block;
  margin: 0 10px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 24px 0 0;
  }
`

export const TwitterIcon = styled(Icon)`
  background-position: 0 0%;
  width: 45px;
  height: 45px;
`

export const TelegramIcon = styled(Icon)`
  background-position: 0 30.463576%;
  background-size: 102.173913%;
  width: 46px;
  height: 46px;
`

const YoutubeIcon = styled(Icon)`
  background-position: 0 58.598726%;
  background-size: 117.5%;
  width: 39px;
  height: 39px;
`

const SubstackIcon = styled(Icon)`
  background-position: 0 100%;
  background-size: 162.068966%;
  width: 28px;
  height: 30px;
`

const MediumIcon = styled(Icon)`
  background-position: 0 80.981595%;
  background-size: 120.512821%;
  width: 37px;
  height: 32px;
`

const Footer = ({ bg }) => {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { isTablet, isMobile } = useMatchBreakpoints()
  const handleOnClick = () => {
    window.open('https://forms.gle/rej1jjHWYe2GbVwj6', '_blank')
  }

  return (
    <FooterStyle bg={bg} justifyContent="center" flexWrap="wrap">
      <FlexWrapper>
        <Flex flexDirection="column" flexWrap="wrap">
          <picture>
            <img src="/images/home/logo.svg" alt={t('logo')} />
          </picture>
          <Flex padding="40px 0 0" alignItems="center">
            <a href="https://t.me/Loopstarter" target="_blank">
              <TelegramIcon />
            </a>
            <a href="http://ldp.to/YLS" target="_blank">
              <YoutubeIcon />
            </a>
            <a href="https://twitter.com/LOOPStarter" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://loopstarter.substack.com/" target="_blank">
              <SubstackIcon />
            </a>
            <a href="https://medium.com/@LOOPStarter" target="_blank">
              <MediumIcon />
            </a>
            <Flex>
              <LangSelector currentLang={currentLanguage.code} langs={languageList} setLang={setLanguage} />
            </Flex>
          </Flex>
          <Text>2022 Copyrights & Protected</Text>
        </Flex>

        <Flex flexWrap="wrap" alignItems="flex-start" flexDirection="column">
          <Wrapper>
            <Title>Launch your project on LOOPStarter</Title>
            <ButtonStyle onClick={handleOnClick} startIcon={<IconLaunch />}>
              Apply to Launch
            </ButtonStyle>
          </Wrapper>
          <Flex
            width="100%"
            justifyContent="space-between"
            padding="40px 0"
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <Flex flexDirection={['column', 'column', 'column', 'row']} alignItems="center">
              <StyledInternalLink
                style={{ padding: isTablet || isMobile ? '0 0 27px' : '0 48px 0 0' }}
                target="_blank"
                href="https://docs.loopstarter.com/faq/top-questions"
              >
                Help Center
              </StyledInternalLink>
              <StyledInternalLink target="_blank" href="https://docs.loopstarter.com/faq/loopstarter-public-ido-faq">
                FAQ
              </StyledInternalLink>
            </Flex>
            <Flex justifyContent="flex-end" alignItems="center" flexDirection={['column', 'column', 'column', 'row']}>
              <Link href="/terms-of-services">
                <StyledInternalLink>Terms of Service</StyledInternalLink>
              </Link>
              <Line />
              <Link target="_blank" href="/privacy-policy">
                <StyledInternalLink>Privacy Policy</StyledInternalLink>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </FlexWrapper>
    </FooterStyle>
  )
}

export default Footer
