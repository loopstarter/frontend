import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: url('/images/term-services/banner-mobile.jpg');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-around;
  width: 100%;
  padding: 456px 19px 71px;
  margin: 0 0 45px;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/term-services/banner.jpg');
    padding: 157px 0 222px 70px;
  }
`

const Title = styled.p`
  font-family: 'FSMagistralBold';
  font-size: 75px;
  line-height: 78px;
  text-align: center;
  color: #fff;
  ${({ theme }) => theme.mediaQueries.md} {
    line-height: 106px;
    text-align: left;
  }
`

const Description = styled.p`
  font-family: FSMagistralLight;
  font-size: 18px;
  line-height: 21px;

  color: #fff;
  padding: 34px 0 0;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 12px 0 0;
    text-align: justify;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <Title>Terms</Title>
      <Description>Last Updated: [Jan 15th, 2022]</Description>
    </Wrapper>
  )
}

export default Footer
