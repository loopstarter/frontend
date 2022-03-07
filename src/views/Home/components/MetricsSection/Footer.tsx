import styled from 'styled-components'
import React from 'react'
import { Flex } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'

const Section = styled(Flex)`
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 104px 0 0;
`

const Language = styled.p`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 35.8115px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
`

const Li = styled.li`
  font-family: FS Magistral;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 75px;
  color: #ffffff;
`

const Ul = styled.ul<{ padding?: string }>`
  list-style: none;
  padding: ${({ padding }) => padding || '0'};
`

const LoopStarter = () => {
  const { t } = useTranslation()

  return (
    <Section justifyContent="center" alignItems="center">
      <Flex flexDirection="column">
        <picture>
          <img src="/images/home/logo.png" alt={t('logo')} />
        </picture>
        <Flex padding="50px 0 0">
          <picture>
            <a href="medium.com" target="_blank">
              <img src="/images/home/message.png" alt={t('message')} />
            </a>
          </picture>
          <picture style={{ padding: '0 47px' }}>
            <a href="medium.com" target="_blank">
              <img src="/images/home/twitter-1.png" alt={t('twitter')} />
            </a>
          </picture>
          <Flex>
            <picture>
              <a href="medium.com" target="_blank">
                <img src="/images/home/language.png" alt={t('language')} />
              </a>
            </picture>
            <Language>EN</Language>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap" alignItems="flex-start">
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
    </Section>
  )
}

export default LoopStarter
