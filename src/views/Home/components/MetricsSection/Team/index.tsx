import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Flex, Heading, IconButton, Grid, CardBody, ProfileAvatar, Image, Text } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'

import useTheme from 'hooks/useTheme'


const BgWrapper = styled(Flex)`
  background-image: url('/images/home/roadmap-loop.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 380px;
  height: 440px;
  position: relative;
  z-index: 2;
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

const TeamInfo = [
    {
        id: 1,
        name: 'Leon Tran',
        profile: '/images/teams/member_01.png',
        telegram: '',
        linkedin: '',
        title: 'CEO & Co-founder'
    },
    {
        id: 2,
        name: 'Dree Do',
        profile: '/images/teams/member_02.png',
        telegram: '',
        linkedin: '',
        title: 'COO & Co-founder'
    },
    {
        id: 3,
        name: 'Thien Duyen',
        profile: '/images/teams/member_03.png',
        telegram: '',
        linkedin: '',
        title: 'CFO'
    },
    {
        id: 4,
        name: 'Roy Nguyen',
        profile: '/images/teams/member_04.png',
        telegram: '',
        linkedin: '',
        title: 'CMO'
    },
    {
        id: 5,
        name: 'Mr.Duy',
        profile: '/images/teams/member_05.png',
        telegram: '',
        linkedin: '',
        title: 'CTO'
    },
    {
        id: 6,
        name: 'Dung Nguyen',
        profile: '/images/teams/member_06.png',
        telegram: '',
        linkedin: '',
        title: 'DevOps SoftWare'
    },
    {
        id: 7,
        name: 'Phuc La',
        profile: '/images/teams/member_07.png',
        telegram: '',
        linkedin: '',
        title: 'DevOps Software'
    },
    {
        id: 8,
        name: 'Toan Dang',
        profile: '/images/teams/member_08.png',
        telegram: '',
        linkedin: '',
        title: 'UI/UX Designer'
    },
    {
        id: 9,
        name: 'Marshall Tran',
        profile: '/images/teams/member_09.png',
        telegram: '',
        linkedin: '',
        title: 'R&D'
    },
    {
        id: 10,
        name: 'Bach Pham',
        profile: '/images/teams/member_10.png',
        telegram: '',
        linkedin: '',
        title: 'R&D'
    },
]
const LoopsTeamAvatar = styled(ProfileAvatar)`
  left: 0;
  position: absolute;
  top: -32px;
  border: 4px white solid;
`

const StyledImage = styled(Image)`
  img {
    border-radius: 4px;
  }
`


const LoopsTeam: React.FC<{ padding?: string; margin?: string }> = ({ padding, margin }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  const TeamMember = ({ infoMember }) => {
    return (
      <CardBody p="8px" m='16px'>
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Flex
            mb='16px'
            width='100%'
            borderRadius={400}
            maxWidth={200}
            style={{ overflow: 'hidden', borderWidth: 8, borderColor: '#39BCFF', borderStyle: 'solid' }}
          >
            <StyledImage src={infoMember.profile} width={200} height={200} />
          </Flex>
          <Text color="white" fontWeight="bold" mb='8px'>
            {infoMember.name}
          </Text>
          <Text color="white" mb='8px'>
            {infoMember.title}
          </Text>
          <Flex justifyContent='center'>
            <Flex m='4px'>
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
            </Flex>
            <Flex m='4px'>
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
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    )
  }


  return (
    <Grid
      gridGap="16px"
      gridTemplateColumns={['1fr', '1fr', 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
      mb="64px"
      width="100%"
      maxWidth={1200}
    >
      {TeamInfo.map((member) => <TeamMember infoMember={member} />)}
    </Grid>
  )
}

export default LoopsTeam
