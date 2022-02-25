import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Flex, Heading, IconButton } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'

import useTheme from 'hooks/useTheme'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(0, 15px) rotateY(70deg);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled(Flex)`
  background-image: url('/images/home/roadmap-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 412px;
  height: 490px;
  position: relative;
  padding: 0 65px;
`

const HeadingTitle = styled.p`
  font-family: FSMagistralBold;
  font-size: 22px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
  padding: 10px 0;
`

const Description = styled.p`
  font-family: FSMagistralMedium;
  font-size: 15.4571px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  padding: 13px 40px;
  span {
    font-weight: 500;
  }
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  padding: 60px 0 0;
  picture {
    width: 85px;
  }
`

const IconBottom = styled.div`
  position: absolute;
  bottom: 10px;
  z-index: 1;
  animation: ${flyingAnim} 3s ease-in-out infinite;
  animation-delay: 1s;
`

const IdoIcon = styled.div`
  padding: 40px 0 0;
`

const IconWrapper = styled.div`
  display: flex;
  padding: 0 0 20px;
  img {
    padding: 0 5px;
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

const TimeWrapper = styled.div`
  width: 310px;
  height: 90px;
  background: linear-gradient(96.18deg, rgba(255, 255, 255, 0.22) 3.05%, rgba(255, 255, 255, 0.15) 104.29%);
  border-radius: 5px;
  display: flex;
  padding: 10px;
  justify-content: space-around;
`

const Time = styled.p`
  font-family: FSMagistralBold;
  font-size: 35px;
  line-height: 40px;
  color: #f2c94c;
  text-align: center;
`

const TimeLabel = styled.p`
  font-family: FSMagistralMedium;
  font-size: 15.4571px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`

const Button = styled(IconButton)`
  background-color: transparent;
  box-shadow: none;
  img {
    width: 15px;
  }
`

const Ul = styled.ul`
  font-family: FSMagistralMedium;
  font-size: 15.4571px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`

const Li = styled.li`
  font-family: FSMagistralMedium;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
`

const FlexWrapper = styled(Flex)<{ padding?: string; margin?: string }>`
  margin: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ padding }) => padding};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ margin }) => margin};
  }
`

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'bunny'

const IDOPool: React.FC<{ items: Array<string>; title: string; icon: string; padding?: string; margin?: string }> = ({
  icon,
  padding,
  margin,
  items,
  title,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <FlexWrapper flex="1" margin={margin} flexDirection="column" alignItems="center" position="relative">
      <BgWrapper
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'baseline']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center">
          <BunnyWrapper>
            <picture>
              <img src={icon} alt={t('Lunar bunny')} />
            </picture>
          </BunnyWrapper>
          <HeadingTitle>{title}</HeadingTitle>
          <Ul>
            {items.map((item) => (
              <Li key={item}>{item}</Li>
            ))}
          </Ul>
        </Flex>
      </BgWrapper>
    </FlexWrapper>
  )
}

export default IDOPool
