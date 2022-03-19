import React from 'react'
import styled from 'styled-components'
import { Flex } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'

const BgWrapper = styled(Flex)`
  background-image: url('/images/home/roadmap-bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  width: 325px;
  height: 373px;
  position: relative;
  padding: 0 40px;
  background-size: contain;
  margin: 30px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 412px;
    height: 490px;
    background-size: cover;
    padding: 0 53px;
    margin: 0;
  }
`

const HeadingTitle = styled.p`
  font-family: FSMagistralBold;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  padding: 10px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 22px;
    line-height: 34px;
    padding: 10px 0;
  }
`

const BunnyWrapper = styled.div`
  padding: 50px 0 0;
  img {
    width: 77%;
    ${({ theme }) => theme.mediaQueries.md} {
      width: auto;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 80px 0 0;
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
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: #ffffff;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    line-height: 19px;
  }
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

const IDOPool: React.FC<{ items: Array<string>; title: string; icon: string; margin?: string }> = ({
  icon,
  margin,
  items,
  title,
}) => {
  const { t } = useTranslation()

  return (
    <FlexWrapper flex="1" margin={margin} flexDirection="column" alignItems="center" position="relative">
      <BgWrapper
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'baseline']}
        justifyContent="center"
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" alignItems="center">
          <BunnyWrapper>
            <picture>
              <img src={icon} alt={t('Loop roadmap')} />
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
