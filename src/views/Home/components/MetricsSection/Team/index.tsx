import React from 'react'
import styled from 'styled-components'
import { Flex, Grid, CardBody, Text, Link, useTooltip } from '@loopstarter/uikit'

const TeamInfo = [
  {
    id: 1,
    name: 'Leon Tran',
    profile: '/images/teams/member_01.png',
    telegram: 'https://t.me/LeonTran',
    linkedin: 'https://www.linkedin.com/in/leon-tran-loopstarter/',
    title: 'CEO & Co-founder',
    description: '',
  },
  {
    id: 2,
    name: 'Dree Do',
    profile: '/images/teams/member_02.png',
    telegram: 'https://t.me/Dree_Loopstarter',
    linkedin: 'https://www.linkedin.com/in/dree-do/',
    title: 'COO & Co-founder',
    description:
      'A blockchain researcher with 4 years in Blockchain participates in operating and investing in big projects in Australia such as Chronobank, Chronobank',
  },
  {
    id: 3,
    name: 'Thien Duyen',
    profile: '/images/teams/member_03.png',
    telegram: '',
    linkedin: 'https://www.linkedin.com/in/nguyenthienduyen/',
    title: 'CFO',
    description:
      '5 years experience in Startup and technology companies, 2 years experience in finance and marketing in crypto.  Build business strategies for 4 companies. Main domain knowledge: AI, blockchain, eCommerce.',
  },
  {
    id: 4,
    name: 'Roy Nguyen',
    profile: '/images/teams/member_04.png',
    telegram: 'https://t.me/Roynguyen27',
    linkedin: 'https://www.linkedin.com/in/roy-crypto-researcher-954500203/',
    title: 'CMO',
    description:
      'Having been involved in cryptocurrency since the beginning of 2019, I have had more than 4 years of volunteering in IT as a community manager, accumulated experience with CM Bit.Country Vietnam project, CM Crypto Review Community Vietnam with more 6,500 members',
  },
  {
    id: 5,
    name: 'Mr.Duy',
    profile: '/images/teams/member_05.webp',
    telegram: '',
    linkedin: '',
    github: 'https://www.linkedin.com/in/huquduy/',
    description: 'I have been working in blockchain domain since 2019 with lot of experiences in developing dapp',
    title: 'CTO',
  },
  {
    id: 6,
    name: 'Dung Nguyen',
    profile: '/images/teams/member_06.webp',
    telegram: 'https://t.me/LeonTran',
    linkedin: '',
    title: 'DevOps SoftWare',
    description: ' 3 year develop stock finance application. 1 year experience with devops and automation tools',
  },
  {
    id: 7,
    name: 'Phuc La',
    profile: '/images/teams/member_07.webp',
    telegram: '',
    linkedin: '',
    github: 'https://github.com/join-tevet',
    title: 'DevOps Software',
    description: '',
  },
  {
    id: 8,
    name: 'Toan Dang',
    profile: '/images/teams/member_08.webp',
    telegram: '',
    linkedin: '',
    title: 'UI/UX Designer',
    description: '',
  },
  {
    id: 9,
    name: 'Marshall Tran',
    profile: '/images/teams/member_9.webp',
    telegram: '',
    linkedin: '',
    title: 'R&D',
    description: '',
  },
  {
    id: 10,
    name: 'Bach Pham',
    profile: '/images/teams/member_10.webp',
    telegram: '',
    linkedin: '',
    description: '',
    title: 'R&D',
  },
  {
    id: 11,
    name: 'Bach Pham',
    profile: '/images/teams/member_10.webp',
    telegram: '',
    linkedin: '',
    title: 'R&D',
    description: '',
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
const TeamMember = ({ infoMember }) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(infoMember.description, { trigger: 'hover', placement: 'top' })

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
          <Flex m="4px">
            <Link external href={infoMember.linkedin}>
              <svg width="24" height="24" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.45101C0 1.09806 1.12543 0 2.51293 0H31.4871C32.875 0 34 1.09806 34 2.45101V31.7648C34 33.1182 32.875 34.2154 31.4871 34.2154H2.51293C1.12543 34.2154 0 33.1182 0 31.7653V2.45056V2.45101Z"
                  fill="white"
                />
                <path
                  d="M10.3064 28.6419V13.1919H5.17106V28.6419H10.3069H10.3064ZM7.73964 11.0828C9.53011 11.0828 10.6448 9.89632 10.6448 8.41368C10.6111 6.8974 9.5301 5.74414 7.77374 5.74414C6.01603 5.74414 4.86816 6.8974 4.86816 8.41368C4.86816 9.89632 5.98238 11.0828 7.70598 11.0828H7.73919H7.73964ZM13.1487 28.6419H18.2836V20.0149C18.2836 19.5536 18.3173 19.0914 18.4528 18.762C18.8239 17.839 19.6689 16.8836 21.0878 16.8836C22.9456 16.8836 23.6891 18.3003 23.6891 20.3775V28.6419H28.8241V19.7834C28.8241 15.038 26.2909 12.8297 22.9124 12.8297C20.1423 12.8297 18.9258 14.3779 18.25 15.4324H18.2841V13.1923H13.1492C13.216 14.6417 13.1487 28.6424 13.1487 28.6424V28.6419Z"
                  fill="#100052"
                />
              </svg>
            </Link>
          </Flex>
          <Flex m="4px">
            <Link external href={infoMember.telegram}>
              <svg width="24" height="24" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.45101C0 1.09806 1.12543 0 2.51293 0H31.4871C32.875 0 34 1.09806 34 2.45101V31.7648C34 33.1182 32.875 34.2154 31.4871 34.2154H2.51293C1.12543 34.2154 0 33.1182 0 31.7653V2.45056V2.45101Z"
                  fill="white"
                />
                <path
                  d="M10.3064 28.6419V13.1919H5.17106V28.6419H10.3069H10.3064ZM7.73964 11.0828C9.53011 11.0828 10.6448 9.89632 10.6448 8.41368C10.6111 6.8974 9.5301 5.74414 7.77374 5.74414C6.01603 5.74414 4.86816 6.8974 4.86816 8.41368C4.86816 9.89632 5.98238 11.0828 7.70598 11.0828H7.73919H7.73964ZM13.1487 28.6419H18.2836V20.0149C18.2836 19.5536 18.3173 19.0914 18.4528 18.762C18.8239 17.839 19.6689 16.8836 21.0878 16.8836C22.9456 16.8836 23.6891 18.3003 23.6891 20.3775V28.6419H28.8241V19.7834C28.8241 15.038 26.2909 12.8297 22.9124 12.8297C20.1423 12.8297 18.9258 14.3779 18.25 15.4324H18.2841V13.1923H13.1492C13.216 14.6417 13.1487 28.6424 13.1487 28.6424V28.6419Z"
                  fill="white"
                />
                <path
                  d="M6.41009 16.2745C6.41009 16.2745 16.5824 12.1037 20.1104 10.635C21.4628 10.0476 26.0492 8.16772 26.0492 8.16772C26.0492 8.16772 28.166 7.34534 27.9896 9.34263C27.9307 10.1651 27.4603 13.0436 26.99 16.1571C26.2843 20.563 25.5199 25.38 25.5199 25.38C25.5199 25.38 25.4024 26.7312 24.4028 26.9662C23.4032 27.2011 21.7568 26.1438 21.4628 25.9087C21.2275 25.7325 17.0528 23.089 15.524 21.7966C15.1124 21.4441 14.642 20.7392 15.5828 19.9168C17.6996 17.9782 20.228 15.5696 21.7568 14.0423C22.4624 13.3373 23.1679 11.6925 20.228 13.6898C16.0532 16.5683 11.9373 19.2706 11.9373 19.2706C11.9373 19.2706 10.9964 19.858 9.23247 19.3293C7.46842 18.8006 5.41043 18.0957 5.41043 18.0957C5.41043 18.0957 3.99932 17.2145 6.41009 16.2745Z"
                  fill="#100052"
                />
              </svg>
            </Link>
          </Flex>
          {/* {infoMember.github ? (
            <Flex m="4px">
              <Link external href={infoMember.github}>
                <svg width="24" height="24" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 2.45101C0 1.09806 1.12543 0 2.51293 0H31.4871C32.875 0 34 1.09806 34 2.45101V31.7648C34 33.1182 32.875 34.2154 31.4871 34.2154H2.51293C1.12543 34.2154 0 33.1182 0 31.7653V2.45056V2.45101Z"
                    fill="white"
                  />
                  <path
                    d="M10.3064 28.6419V13.1919H5.17106V28.6419H10.3069H10.3064ZM7.73964 11.0828C9.53011 11.0828 10.6448 9.89632 10.6448 8.41368C10.6111 6.8974 9.5301 5.74414 7.77374 5.74414C6.01603 5.74414 4.86816 6.8974 4.86816 8.41368C4.86816 9.89632 5.98238 11.0828 7.70598 11.0828H7.73919H7.73964ZM13.1487 28.6419H18.2836V20.0149C18.2836 19.5536 18.3173 19.0914 18.4528 18.762C18.8239 17.839 19.6689 16.8836 21.0878 16.8836C22.9456 16.8836 23.6891 18.3003 23.6891 20.3775V28.6419H28.8241V19.7834C28.8241 15.038 26.2909 12.8297 22.9124 12.8297C20.1423 12.8297 18.9258 14.3779 18.25 15.4324H18.2841V13.1923H13.1492C13.216 14.6417 13.1487 28.6424 13.1487 28.6424V28.6419Z"
                    fill="white"
                  />
                  <path
                    d="M6.41009 16.2745C6.41009 16.2745 16.5824 12.1037 20.1104 10.635C21.4628 10.0476 26.0492 8.16772 26.0492 8.16772C26.0492 8.16772 28.166 7.34534 27.9896 9.34263C27.9307 10.1651 27.4603 13.0436 26.99 16.1571C26.2843 20.563 25.5199 25.38 25.5199 25.38C25.5199 25.38 25.4024 26.7312 24.4028 26.9662C23.4032 27.2011 21.7568 26.1438 21.4628 25.9087C21.2275 25.7325 17.0528 23.089 15.524 21.7966C15.1124 21.4441 14.642 20.7392 15.5828 19.9168C17.6996 17.9782 20.228 15.5696 21.7568 14.0423C22.4624 13.3373 23.1679 11.6925 20.228 13.6898C16.0532 16.5683 11.9373 19.2706 11.9373 19.2706C11.9373 19.2706 10.9964 19.858 9.23247 19.3293C7.46842 18.8006 5.41043 18.0957 5.41043 18.0957C5.41043 18.0957 3.99932 17.2145 6.41009 16.2745Z"
                    fill="#100052"
                  />
                </svg>
              </Link>
            </Flex>
          ) : null} */}
        </Flex>
      </Flex>
    </CardBody>
  )
}

const LoopsTeam: React.FC<{ padding?: string; margin?: string }> = () => {
  return (
    <Grid
      gridGap="16px"
      gridTemplateColumns={[null, 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
      mb="64px"
      mt="64px"
      width="100%"
    >
      {TeamInfo.map((member) => (
        <TeamMember key={member.id} infoMember={member} />
      ))}
    </Grid>
  )
}

export default LoopsTeam
