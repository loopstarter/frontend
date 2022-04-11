import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Flex, Grid, CardBody, Text, Link, useTooltip } from '@loopstarter/uikit'
import { TwitterIcon, TelegramIcon } from '../Footer'

const data = [
  {
    id: 1,
    name: 'Mr.Evan Luthra',
    profile: '/images/home/our-advisors/evan.png',
    twitter: 'https://twitter.com/EvanLuthra',
    description: 'Crypto Billionaire Evan Luthra Joins Loopstarter as Investor & Lead Advisor',
  },
  {
    id: 2,
    name: 'Mr.Krishna',
    profile: '/images/home/our-advisors/krishna.png',
    twitter: 'https://twitter.com/paycoincapital',
    description: 'Founder PayCoin Capital',
  },
  {
    id: 3,
    name: 'Can Ukşul',
    profile: '/images/home/our-advisors/can-uksul.jpeg',
    twitter: 'https://www.linkedin.com/in/umcaca/',
    telegram: 'https://t.me/listmyprojects',
    description: 'Founder at https://www.listmyproject.com/',
  },
]

const ImageWrapper = styled(Flex)`
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  width: 110px;
  height: 110px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 150px;
    height: 150px;
  }
  ${({ theme }) => theme.mediaQueries.xxxl} {
    width: 220px;
    height: 220px;
  }
`

const TextStyle = styled(Text)`
  font-family: FSMagistralBold;
  font-size: 15px;
  line-height: 21px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
    line-height: 30px;
  }
  ${({ theme }) => theme.mediaQueries.xxxl} {
    font-size: 30px;
    line-height: 42px;
  }
`

const TextTitle = styled(Text)`
  font-family: FSMagistralMedium;
  font-size: 12px;
  line-height: 17px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
    line-height: 25px;
  }
  ${({ theme }) => theme.mediaQueries.xxxl} {
    font-size: 24px;
    line-height: 33px;
  }
`
const OurAdvisors = ({ infoMember }) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(infoMember.description, {
    trigger: 'hover',
    placement: 'top',
  })

  return (
    <CardBody id={`member${infoMember.id}`} p={[null, '0', '8px']} m={[null, '0', '0', '16px']}>
      {tooltipVisible && tooltip}
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <ImageWrapper
          mb="16px"
          width="100%"
          style={{ overflow: 'hidden', borderWidth: 8, borderColor: '#39BCFF', borderStyle: 'solid' }}
          ref={targetRef}
        >
          <picture>
            <img src={infoMember.profile} alt={infoMember.name} />
          </picture>
        </ImageWrapper>
        <TextStyle color="white" fontWeight="bold" mb="8px">
          {infoMember.name}
        </TextStyle>
        <TextTitle color="white" mb="8px">
          {infoMember.title}
        </TextTitle>
        <Flex justifyContent="center">
          {infoMember.twitter ? (
            <Flex m="4px">
              <Link external href={infoMember.twitter}>
                <TwitterIcon />
              </Link>
            </Flex>
          ) : null}
          {infoMember.telegram ? (
            <Flex m="4px">
              <Link external href={infoMember.telegram}>
                <TelegramIcon />
              </Link>
            </Flex>
          ) : null}
        </Flex>
      </Flex>
    </CardBody>
  )
}

const LoopsOurAdvisors: React.FC = forwardRef((props, ref) => {
  return (
    <Grid
      ref={ref}
      gridGap="16px"
      gridTemplateColumns={[null, 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
      mb="64px"
      mt="64px"
      width="100%"
    >
      {data.map((member) => (
        <OurAdvisors key={member.id} infoMember={member} />
      ))}
    </Grid>
  )
})

export default LoopsOurAdvisors
