import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Flex, useMatchBreakpoints, Button } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
import { languageList } from 'config/localization/languages'

const LangSelector = dynamic(() => import('components/Menu/LangSelector'))

const FooterStyle = styled(Flex)`
  background-image: url('/images/home/footer-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 44px 20px 34px;
  justify-content: space-around;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/home/footer-bg.png');
    justify-content: center;
    padding-top: 48px;
  }
`

const FlexWrapper = styled(Flex)`
  max-width: 1087px;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xxxl} {
    max-width: 1404px;
    justify-content: space-between;
    width: 100%;
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
  padding: 20px 30px;
  display: flex;
  align-items: center;
`

const Title = styled.p`
  font-family: FSMagistralMedium;
  font-size: 20px;
  line-height: 31px;
  color: #ffffff;
  padding: 0 20px 0 0;
  ${({ theme }) => theme.mediaQueries.xxxl} {
    font-size: 24px;
  }
`

const Icon = styled.span`
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
`

const Line = styled.span`
  height: 14px;
  width: 1px;
  background: #fff;
  margin: 0 16px;
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
`

const items = [
  {
    title: 'Exchange',
    href: '#',
  },
  {
    title: 'Apply for IDO',
    href: '#',
  },
  {
    title: 'Stake',
    href: '#',
  },
  {
    title: 'Help Center',
    href: '#',
  },
  {
    title: 'FAQ',
    href: '#',
  },
  {
    title: 'Contract Us',
    href: '#',
  },
]
const Footer = () => {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  return (
    <FooterStyle justifyContent="center" flexWrap="wrap">
      <FlexWrapper>
        <Flex flexDirection="column" flexWrap="wrap">
          <picture>
            <img src="/images/home/logo.svg" alt={t('logo')} />
          </picture>
          <Flex padding="40px 0 0" alignItems="center">
            <picture>
              <a href="https://t.me/Loopstarter" target="_blank">
                <img src="/images/home/message.svg" alt={t('message')} />
              </a>
            </picture>
            <picture style={{ padding: '0 45px' }}>
              <a href="https://twitter.com/Loopstarter" target="_blank">
                <img src="/images/home/twitter-1.svg" alt={t('twitter')} />
              </a>
            </picture>
            <Flex>
              <LangSelector currentLang={currentLanguage.code} langs={languageList} setLang={setLanguage} />
            </Flex>
          </Flex>
          <Text>2022 Copyrights & Protected</Text>
        </Flex>

        <Flex flexWrap="wrap" alignItems="flex-start" flexDirection="column">
          <Wrapper>
            <Title>Launch your project on LOOPStarter</Title>
            <ButtonStyle startIcon={<Icon />}>Apply to Launch</ButtonStyle>
          </Wrapper>
          <Flex width="100%" justifyContent="space-between" padding="40px 0">
            {items.map((item) => (
              <Link key={item.title} href={item.href}>
                <StyledInternalLink>{item.title}</StyledInternalLink>
              </Link>
            ))}
          </Flex>
          <Flex width="100%" justifyContent="flex-end" alignItems="center">
            <Link href="/#">
              <StyledInternalLink>Terms of Service</StyledInternalLink>
            </Link>
            <Line />
            <Link target="_blank" href="mailto:support@loopstarter.com">
              <StyledInternalLink target="_blank" href="mailto:support@loopstarter.com">
                support@loopstarter.com
              </StyledInternalLink>
            </Link>
            <Line />
            <Link target="_blank" href="https://docs.loopstarter.com/faq/terms-and-conditions">
              <StyledInternalLink target="_blank" href="https://docs.loopstarter.com/faq/terms-and-conditions">
                Privacy Policy
              </StyledInternalLink>
            </Link>
          </Flex>
        </Flex>
      </FlexWrapper>
    </FooterStyle>
  )
}

export default Footer
