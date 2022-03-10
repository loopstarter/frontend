import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Skeleton, ChartIcon, CommunityIcon, SwapIcon, Button } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'
import Container from '../../../components/Layout/Container'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Section = styled(Flex)`
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px 0 0;
`

const LoopStarter = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

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

  return (
    <Section justifyContent="flex-start" alignItems="center">
      <Container width="100%">
        <Flex justifyContent="space-between" pb="32px">
          <Flex flexDirection="row" justifyContent="flex-start">
            <picture>
              <img src="/images/home/logo.svg" alt={t('logo')} width={80} />
            </picture>
            <Flex padding="50px 0 0" />
          </Flex>
          <Flex flexWrap="wrap" alignItems="flex-start">
            <Flex mr={16}>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 46C10.2975 46 0 35.7025 0 23C0 10.2974 10.2975 0 23 0C35.7025 0 46 10.2974 46 23C46 35.7025 35.7025 46 23 46ZM13.9438 16.8188C14.0875 16.9625 14.2312 17.25 14.2312 17.5375V27.6C14.375 28.0312 14.2312 28.3188 13.9438 28.6062L11.5 31.4812V31.9125H18.2563V31.4812L15.8125 28.6062C15.6687 28.3188 15.525 28.0312 15.525 27.6V18.8312L21.5625 31.9125H22.1375L27.3125 18.8312V29.325C27.3125 29.6125 27.3125 29.7563 27.1687 29.9L25.3 31.7688V32.2H34.3562V31.7688L32.6312 30.0437C32.4875 29.9 32.4875 29.6125 32.4875 29.4688V16.5312C32.3438 16.2437 32.4875 16.1 32.6312 15.9562L34.5 14.2313V13.8H28.175L23.575 25.1562L18.4 13.8H11.7875V14.2313L13.9438 16.8188Z"
                  fill="white"
                />
              </svg>
            </Flex>
            <Flex mr={16}>
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.333 46C10.6305 46 0.333008 35.7025 0.333008 23C0.333008 10.2974 10.6305 0 23.333 0C36.0355 0 46.333 10.2974 46.333 23C46.333 35.7025 36.0355 46 23.333 46ZM24.3276 17.2606C22.2675 18.1174 18.1506 19.8908 11.9766 22.5806C10.9741 22.9793 10.4489 23.3693 10.4011 23.7508C10.3203 24.3953 11.1274 24.6491 12.2265 24.9947C12.376 25.0416 12.5309 25.0903 12.6897 25.1421C13.7711 25.4936 15.2257 25.9047 15.9819 25.921C16.6678 25.9359 17.4334 25.653 18.2786 25.0727C24.0472 21.1788 27.0249 19.2106 27.212 19.1682C27.3438 19.1382 27.5265 19.1006 27.6503 19.2107C27.7741 19.3208 27.762 19.5291 27.7488 19.5851C27.6689 19.9261 24.5006 22.8714 22.8611 24.3957C22.3499 24.871 21.9873 25.208 21.9133 25.285C21.7472 25.4575 21.5781 25.6207 21.4154 25.7774C20.4109 26.7457 19.6574 27.472 21.4572 28.658C22.322 29.228 23.0141 29.6991 23.7045 30.1693C24.4585 30.6828 25.2104 31.1951 26.1835 31.8328C26.4313 31.9953 26.6682 32.1642 26.8988 32.3286C27.7762 32.954 28.5646 33.5162 29.5384 33.4265C30.1044 33.3743 30.689 32.8423 30.9859 31.2551C31.6874 27.5044 33.0666 19.3777 33.3853 16.0288C33.4131 15.7354 33.3781 15.3599 33.3499 15.1951C33.3217 15.0302 33.2627 14.7954 33.0484 14.6215C32.7946 14.4156 32.4031 14.3722 32.2277 14.3751C31.4311 14.3893 30.209 14.8143 24.3276 17.2606Z"
                  fill="white"
                />
              </svg>
            </Flex>
            <Flex mr={16}>
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.666992 23C0.666992 10.2974 10.9644 0 23.667 0C36.3695 0 46.667 10.2974 46.667 23C46.667 35.7025 36.3695 46 23.667 46C10.9644 46 0.666992 35.7025 0.666992 23ZM32.4357 16.5312C33.442 16.3875 34.3045 16.2437 35.167 15.8125C34.592 16.8188 33.7295 17.6812 32.7232 18.2562C33.0107 25.0125 28.1232 32.3438 19.3545 32.3438C16.767 32.3438 14.3232 31.4812 12.167 30.1875C14.6107 30.475 17.1982 29.7563 18.9232 28.4625C16.767 28.4625 15.042 27.025 14.467 25.1562C15.1857 25.3 15.9045 25.1562 16.6232 25.0125C14.467 24.4375 12.8857 22.425 12.8857 20.2687C13.6045 20.5562 14.3232 20.8438 15.042 20.8438C13.0295 19.4062 12.3107 16.675 13.6045 14.5187C16.0482 17.3937 19.4982 19.2625 23.3795 19.4062C22.6607 16.5312 24.9607 13.6562 27.9795 13.6562C29.2732 13.6562 30.567 14.2312 31.4295 15.0938C32.5795 14.8062 33.5857 14.5188 34.4482 13.9437C34.1607 15.0938 33.442 15.9562 32.4357 16.5312Z"
                  fill="white"
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default LoopStarter
