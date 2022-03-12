import React from 'react'
import styled from 'styled-components'
import { Flex, Button } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'

const Section = styled(Flex)`
  width: 323px;
  padding: 25px 0;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 440px;
    padding: 25px 20px;
  }
`

const Label = styled.p`
  font-family: FSMagistralMedium;
  font-size: 13px;
  line-height: 15px;
  text-align: justify;
  color: #ffffff;
  padding: 10px 0 20px;
  min-height: 174px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    line-height: 18px;
    min-height: 174px;
  }
`

const Text = styled.p`
  font-family: FSMagistralBold;
  font-size: 19px;
  line-height: 27px;
  color: #ffffff;
  padding: 215px 0 10px;
  min-height: 367px;
  text-align: center;
  min-height: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 255px 0 10px;
    font-size: 24px;
    line-height: 34px;
    min-height: 367px;
  }
`

const ButtonStyle = styled(Button)`
  background: linear-gradient(94.76deg, #44aeea 0%, #5150ff 139.11%);
  border-radius: 9.24812px;
  width: 145px;
  height: 48px;
  border: 0.924812px solid #ffffff;
  font-family: FSMagistralMedium;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    line-height: 21px;
  }
`

const PictureWrapper = styled.div`
  position: relative;
`

const Picture = styled.picture`
  margin: -390px 0 0;
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: -480px 0 0;

    img {
      width: 460px;
    }
  }
`

const PictureBg = styled.picture`
  margin: 0;
  display: block;
`

const TextWrapper = styled.div`
  background-image: url('/images/home/vector-1.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: -187px 0 0;
  padding: 0 25px 90px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: -187px 0 0;
    padding: 0 31px 90px;
  }
`

const LoopNew = ({ title, description, img }) => {
  const { t } = useTranslation()

  return (
    <Section justifyContent="center" alignItems="center" flexDirection="column">
      <PictureWrapper>
        <PictureBg>
          <img src="/images/home/vector.png" alt={t('Lunar bunny')} />
        </PictureBg>
        <Picture>
          <img src={img} alt={t('Lunar bunny')} />
        </Picture>
      </PictureWrapper>
      <TextWrapper>
        <Text>{title}</Text>
        <Label>{description}</Label>
        <Flex flex="1" flexDirection="column" alignItems="center">
          <ButtonStyle>{t('Learn more')}</ButtonStyle>
        </Flex>
      </TextWrapper>
    </Section>
  )
}

export default LoopNew
