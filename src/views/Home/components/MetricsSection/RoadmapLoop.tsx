import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'

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

const BgWrapper = styled(Flex)`
  background-image: url('/images/home/roadmap-loop-mobile.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 325px;
  height: 373px;
  width: 325px;
  position: relative;
  z-index: 2;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/home/roadmap-loop.png');
    width: 380px;
    height: 440px;
  }
`

const IconBottom = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  animation: none;
  animation-delay: 1s;
  picture {
    max-width: 400px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    animation: ${flyingAnim} 3s ease-in-out infinite;
    bottom: -10px;
  }
`

const FlexWrapper = styled(Flex)<{ padding?: string; margin?: string }>`
  padding: 0 0 140px;
  margin: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ padding }) => padding};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ margin }) => margin};
  }
`

const IDOPool: React.FC<{ padding?: string; margin?: string }> = ({ margin }) => {
  const { t } = useTranslation()

  return (
    <FlexWrapper flex="1" margin={margin} flexDirection="column" alignItems="center" position="relative">
      <BgWrapper
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center" />
      </BgWrapper>
      <IconBottom>
        <picture>
          <img src="/images/home/roadmap.png" alt={t('ido')} />
        </picture>
      </IconBottom>
    </FlexWrapper>
  )
}

export default IDOPool
