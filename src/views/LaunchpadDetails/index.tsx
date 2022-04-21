/* eslint-disable no-debugger */
import { Box, Button, CopyIcon, Flex, Slider, Text } from '@loopstarter/uikit'
import { useWeb3React } from '@web3-react/core'
import Page from 'components/Layout/Page'
import { BASE_API_URL } from 'config'
import { withAuth } from 'hooks/useAuthSign'
import { useIdoContract } from 'hooks/useContract'
import React, { useState } from 'react'
import { get } from 'utils/http'

import Container from 'components/Layout/Container'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import styled from 'styled-components'
import Footer from './components/Footer'
import { CurrencyLogo } from 'views/Info/components/CurrencyLogo'

const WrapLaunchpad = styled.div`
  border: 1px solid #d520af;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 64px;
  box-shadow: inset 0 0 10px #d520af, 0 0 10px #d520af;
  background: #360060;
  padding: 32px;
`
const ButtonViewLoops = styled(Button)`
  background: #5c0c9b;
  border-radius: 5px;
`
const ButtonClosed = styled(Button)`
  background: linear-gradient(106.04deg, #ffc677 -44.63%, #c94fd8 92.68%);
  border-radius: 5px;
`
const ButtonIDOStyled = styled(Button)`
  border-radius: 8px;
`

const Launchpad: React.FC = () => {
  const { account, library, connector } = useWeb3React()
  const idoContract = useIdoContract()
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
  const [stepIDO, setStepIDO] = useState(1)

  const handleCommit = () => {
    withAuth(
      async () => {
        const res = await get({
          url: `${BASE_API_URL}/ido-signature?pid=0`,
        }).catch((err) => {
          console.error('Failed to fetch ido-signature')
          return err
        })
        console.log({
          res,
        })
      },
      { account, library, connector },
    )
  }

  return (
    <>
      <Page>
        <Container maxWidth={1200}>
          <WrapLaunchpad>
            <Flex flexDirection="row">
              <Flex flex={1} flexDirection="column">
                <picture>
                  <img src="/images/home/logo.svg" alt={t('logo')} width={80} />
                </picture>
                <Text style={{ color: '#fff' }}>
                  Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and
                  ranking order based on the score achieved by each individual. LOOPStarter is a platform used to launch
                  crypto projects, introduce some new coins, and increase liquidity. This is one of the biggest things
                  for this digital world, especially when it comes to decentralized finance. LOOPStarter is beyond just
                  being a IDO Launchpad platform. It’s an integrated ecosystem that introduces an all-in-one solution to
                  launch and manage decentralized finances. It supports all the major Multi-chain wallets along with our
                  inline wallet management system. The portal will integrate a launchpad for decentralized fundraising
                  for new projects needing liquidity at the start in a fair manner. The first DAO supports multi-chain,
                  cross-platform launchpad with a full DEX and deflation mechanism.
                </Text>
                <Flex>
                  <Button variant="text" m={1} mt={2}>
                    <svg width="58" height="44" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="58" height="44" rx="5" fill="#450279" />
                      <mask id="mask0_1020_3686" maskUnits="userSpaceOnUse" x="16" y="10" width="24" height="24">
                        <rect x="16" y="10" width="23.5848" height="23.5848" fill="#C4C4C4" />
                      </mask>
                      <g mask="url(#mask0_1020_3686)">
                        <path
                          d="M24.6468 30.8729H23.0643C22.6866 30.8257 22.3065 30.7934 21.9314 30.7338C20.5406 30.5207 19.1964 30.0721 17.9564 29.4071C17.6931 29.2655 17.4372 29.1065 17.1788 28.955C18.3067 29.0394 19.4408 28.9319 20.5327 28.637C21.6295 28.3302 22.6557 27.812 23.5537 27.1116C22.6465 27.0819 21.7705 26.7736 21.0447 26.2287C20.3188 25.6838 19.7784 24.9286 19.4967 24.0658C20.1309 24.1703 20.7798 24.1415 21.4022 23.9813C18.8682 23.3403 17.8695 21.0845 17.9912 19.6536C18.5746 19.9606 19.2204 20.1305 19.8793 20.1504C18.9781 19.5184 18.3466 18.5714 18.1098 17.4964C17.8729 16.4215 18.0478 15.2968 18.5999 14.3445C20.9575 17.1195 23.9412 18.6524 27.5982 18.9008C27.4623 18.1956 27.4801 17.4694 27.6504 16.7717C27.8962 15.8743 28.4205 15.078 29.1478 14.4976C29.8751 13.9172 30.7678 13.5826 31.6974 13.542C32.2932 13.5182 32.8876 13.6175 33.4433 13.8338C33.999 14.0501 34.5041 14.3787 34.9271 14.7991C34.9615 14.8399 35.0073 14.8695 35.0586 14.8841C35.11 14.8987 35.1645 14.8977 35.2152 14.8811C36.0484 14.6982 36.8508 14.3961 37.5977 13.9843C37.6574 13.9495 37.722 13.9222 37.8188 13.875C37.502 14.8417 36.8683 15.6733 36.0202 16.2351C36.8418 16.1369 37.645 15.921 38.4051 15.5941C38.3505 15.6811 38.3257 15.7208 38.2983 15.7606C37.7727 16.5233 37.1257 17.1947 36.3829 17.7481C36.3343 17.7788 36.2952 17.8226 36.2702 17.8744C36.2452 17.9262 36.2351 17.984 36.2413 18.0412C36.2756 18.9705 36.1921 19.9004 35.9928 20.8088C35.2848 24.1279 33.6079 26.8259 30.808 28.7786C29.2678 29.8443 27.4904 30.5173 25.6306 30.7387L24.6468 30.8729Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Button>
                  <Button variant="text" m={1} mt={2}>
                    <svg width="58" height="44" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="58" height="44" rx="5" fill="#450279" />
                      <mask id="mask0_1020_3687" maskUnits="userSpaceOnUse" x="17" y="10" width="24" height="24">
                        <rect x="17" y="10" width="23.5848" height="23.5848" fill="#C4C4C4" />
                      </mask>
                      <g mask="url(#mask0_1020_3687)">
                        <path
                          d="M18.1797 22.1328C18.4146 22.1328 18.6478 22.1488 18.8916 22.1506C19.7329 22.1506 20.5753 22.1506 21.419 22.1506C21.54 22.1506 21.6147 22.1666 21.6183 22.3126C21.6522 23.6348 21.8385 24.9487 22.1736 26.2282C22.1799 26.2576 22.1847 26.2873 22.1878 26.3172L21.4332 26.189C20.659 26.0555 19.8848 25.9167 19.1105 25.7903C19.061 25.7866 19.0139 25.7675 18.9759 25.7355C18.9379 25.7036 18.9109 25.6605 18.8987 25.6124C18.5293 24.6596 18.3032 23.6574 18.2277 22.6383C18.2197 22.5919 18.2065 22.5465 18.1886 22.503L18.1797 22.1328Z"
                          fill="white"
                        />
                        <path
                          d="M18.1797 21.0566C18.2224 20.7505 18.2633 20.4443 18.3061 20.14C18.4192 19.3761 18.6217 18.6282 18.9094 17.9117C18.9313 17.8736 18.9611 17.8406 18.9967 17.8148C19.0322 17.789 19.0729 17.7711 19.1159 17.7622C20.0307 17.5966 20.9491 17.4418 21.8657 17.2852L22.195 17.23C21.8294 18.5855 21.6298 19.9804 21.6005 21.3841C21.5258 21.3841 21.4777 21.4001 21.4225 21.4001H18.3025C18.2613 21.3986 18.2203 21.3944 18.1797 21.3876V21.0566Z"
                          fill="white"
                        />
                        <path
                          d="M22.3335 22.165H28.408V27.0649H28.1855C26.6746 27.0284 25.1692 26.8683 23.6844 26.5861C23.5064 26.5541 23.3159 26.5309 23.1362 26.4829C23.101 26.4728 23.0685 26.4549 23.0411 26.4305C23.0136 26.4062 22.992 26.3761 22.9778 26.3423C22.7998 25.4524 22.6076 24.5625 22.4599 23.6725C22.3851 23.1795 22.3744 22.6812 22.3335 22.165Z"
                          fill="white"
                        />
                        <path
                          d="M29.1786 27.0653V22.1672H35.2549C35.2104 22.7225 35.2015 23.2707 35.1161 23.8065C34.9826 24.6341 34.7975 25.4546 34.6337 26.2786C34.6287 26.3386 34.6021 26.3946 34.5589 26.4365C34.5157 26.4784 34.4589 26.5032 34.3988 26.5064C32.7601 26.8259 31.0983 27.0128 29.4295 27.0653H29.1786Z"
                          fill="white"
                        />
                        <path
                          d="M28.4072 16.5007V21.3881H22.3843C22.3843 21.1229 22.3683 20.8541 22.3843 20.5925C22.463 19.4643 22.655 18.3469 22.9574 17.2571C22.9859 17.1557 23.0162 17.0791 23.1496 17.0613C24.8503 16.7222 26.5774 16.5328 28.3111 16.4954L28.4072 16.5007Z"
                          fill="white"
                        />
                        <path
                          d="M29.1763 21.3837V16.5052C29.2403 16.5052 29.2991 16.4945 29.3543 16.4963C30.8855 16.5263 32.4114 16.6852 33.9159 16.9715C33.9291 16.9767 33.9428 16.9803 33.9569 16.9822C34.4695 16.9537 34.6474 17.226 34.7542 17.7048C35.0357 18.9121 35.1955 20.1445 35.2312 21.3837H29.1763Z"
                          fill="white"
                        />
                        <path
                          d="M29.1805 15.7383V11.1802C29.6121 11.2078 30.0346 11.3159 30.4264 11.4988C31.5726 12.0025 32.4074 12.8603 33.0961 13.8748C33.5998 14.6211 34.0076 15.4278 34.31 16.2758C32.619 15.9484 30.9027 15.7685 29.1805 15.7383Z"
                          fill="white"
                        />
                        <path
                          d="M28.4125 11.1802V15.7365C26.6897 15.7634 24.9727 15.9421 23.2812 16.2705C23.5204 15.5994 23.8244 14.9532 24.189 14.3411C24.7267 13.3879 25.4688 12.5655 26.3621 11.933C26.9084 11.5555 27.5314 11.3033 28.1864 11.1944C28.2594 11.1909 28.3235 11.1909 28.4125 11.1802Z"
                          fill="white"
                        />
                        <path
                          d="M23.231 27.2981C24.1618 27.4262 25.0108 27.5633 25.8526 27.6541C26.6945 27.7448 27.5435 27.7911 28.4049 27.857V32.3759C27.8236 32.3252 27.2604 32.1478 26.755 31.8562C25.6355 31.2315 24.8239 30.3007 24.1956 29.2078C23.8468 28.6009 23.562 27.9584 23.231 27.2981Z"
                          fill="white"
                        />
                        <path
                          d="M29.1763 32.3783V27.8255C30.9006 27.7926 32.6187 27.6092 34.311 27.2773C34.2488 27.4411 34.2007 27.5764 34.1437 27.7116C33.6098 28.9949 32.9157 30.166 31.878 31.1075C31.1945 31.76 30.3319 32.1938 29.4005 32.3534C29.3275 32.3605 29.2635 32.3694 29.1763 32.3783Z"
                          fill="white"
                        />
                        <path
                          d="M39.4061 22.1507C39.3805 22.9422 39.261 23.7278 39.0501 24.4911C38.9398 24.8756 38.8098 25.2529 38.6817 25.6302C38.6702 25.6635 38.6517 25.6939 38.6274 25.7194C38.6032 25.7449 38.5737 25.7648 38.5411 25.7779C37.5052 25.9648 36.4676 26.1428 35.3926 26.3297C35.4602 26.0396 35.5296 25.7779 35.5848 25.5128C35.8058 24.5225 35.9333 23.5136 35.9657 22.4995C35.9657 22.1436 35.9764 22.1436 36.3127 22.1436H39.399L39.4061 22.1507Z"
                          fill="white"
                        />
                        <path
                          d="M39.399 21.3891H35.9888C35.9599 19.9841 35.7596 18.5879 35.3926 17.2314L36.5388 17.4219C37.1617 17.5287 37.7847 17.6426 38.4111 17.7423C38.4841 17.7473 38.5535 17.7753 38.6095 17.8223C38.6655 17.8694 38.7051 17.9329 38.7226 18.0039C39.1042 19.0248 39.3321 20.0966 39.399 21.1844C39.4025 21.2449 39.399 21.3055 39.399 21.3891Z"
                          fill="white"
                        />
                        <path
                          d="M25.421 11.7851C25.1719 12.02 24.9085 12.2389 24.6771 12.497C23.7114 13.5532 22.9832 14.804 22.5413 16.1652C22.5242 16.2492 22.4802 16.3254 22.416 16.3822C22.3518 16.4391 22.2708 16.4735 22.1853 16.4802C21.2741 16.6226 20.3663 16.7899 19.4569 16.9483C19.4302 16.9483 19.4035 16.9483 19.3447 16.9483C20.6034 14.4958 22.7575 12.6215 25.3605 11.7139L25.421 11.7851Z"
                          fill="white"
                        />
                        <path
                          d="M32.174 11.7039C34.8039 12.6049 36.9845 14.4864 38.2609 16.9561C37.9424 16.9045 37.6629 16.86 37.3835 16.8119C36.6983 16.6945 36.013 16.5681 35.326 16.456C35.2691 16.453 35.2147 16.4313 35.1712 16.3943C35.1278 16.3573 35.0978 16.3071 35.0857 16.2513C34.686 15 34.0471 13.8382 33.2045 12.8305C32.8859 12.4567 32.5477 12.1079 32.174 11.7039Z"
                          fill="white"
                        />
                        <path
                          d="M19.3236 26.6001L20.4609 26.7888C21.0661 26.8938 21.6676 27.0077 22.2746 27.1038C22.3282 27.1069 22.3792 27.1278 22.4196 27.1633C22.4599 27.1988 22.4872 27.2468 22.497 27.2996C22.9053 28.57 23.557 29.7488 24.4157 30.7702C24.6666 31.071 24.9496 31.3469 25.2219 31.6317C25.2894 31.6822 25.3493 31.7422 25.3999 31.8096C22.6928 30.8806 20.6887 29.1559 19.3236 26.6001Z"
                          fill="white"
                        />
                        <path
                          d="M32.1962 31.8476C32.5931 31.4008 32.9811 30.9986 33.3335 30.5661C34.102 29.6196 34.6869 28.5379 35.0581 27.3767C35.0713 27.2972 35.111 27.2245 35.1708 27.1705C35.2306 27.1165 35.307 27.0844 35.3874 27.0794C36.2987 26.9388 37.2081 26.7697 38.1176 26.6131C38.1633 26.6101 38.209 26.6101 38.2547 26.6131C36.9838 29.0724 34.8139 30.9471 32.1962 31.8476Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Button>
                </Flex>
                <Flex flexDirection="row" justifyContent="space-between">
                  <Box>
                    <Text color="#883BC3">TOTAL RAISE</Text>
                    <Text color="#fff" fontWeight={800}>
                      $ 120.000
                    </Text>
                  </Box>
                  <Box>
                    <Text color="#883BC3">NETWORK</Text>
                    <Text color="#fff" fontWeight={800}>
                      BSC
                    </Text>
                  </Box>
                  <Box>
                    <Text color="#883BC3">PARTICIPANTS</Text>
                    <Text color="#fff" fontWeight={800}>
                      {' '}
                      -{' '}
                    </Text>
                  </Box>
                  <Box>
                    <Text color="#883BC3">ACCESS</Text>
                    <Text color="#fff" fontWeight={800}>
                      Public
                    </Text>
                  </Box>
                </Flex>
                <Flex mt={3} flexDirection="column" alignItems="center">
                  <Text color="#883BC3">IDO SALES CONTRACT ADDRESS</Text>
                  <Text
                    color="#fff"
                    fontWeight={800}
                    onClick={() => {
                      toastSuccess('Copy Success')
                      navigator.clipboard.writeText('0x4D92Cd12D1Bf0994b9f54a6671059C32D86c0e30')
                    }}
                  >
                    0x4D92Cd12D1Bf0994b9f54a6671059C32D86c0e30
                    <CopyIcon color="primary" width="20px" ml={2} />
                  </Text>
                </Flex>
                <Flex mt={3} flexDirection="column" alignItems="center">
                  <ButtonViewLoops scale="sm">View Loops</ButtonViewLoops>
                </Flex>
              </Flex>

              <Flex flex={1} flexDirection="column">
                <Box
                  mt="32px"
                  p="16px"
                  ml="16px"
                  style={{
                    background: '#450279',
                  }}
                >
                  <Flex justifyContent="flex-end">
                    <ButtonViewLoops scale="sm">
                      <Text fontSize="12px" color="#fff">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.5 11C2.46228 11 0 8.53772 0 5.5C0 2.46228 2.46228 0 5.5 0C8.53772 0 11 2.46228 11 5.5C11 8.53772 8.53772 11 5.5 11ZM7.73438 6.58419C7.73438 5.71691 7.19263 5.22706 5.92522 4.92181V3.39556C6.31709 3.476 6.69212 3.64478 7.05891 3.90981L7.52606 3.15494C7.06592 2.8179 6.52545 2.6074 5.95856 2.54444V2.0625H5.23325V2.52828C4.191 2.60872 3.48253 3.20306 3.48253 4.07034C3.48253 4.97784 4.04938 5.41956 5.26659 5.72481V7.29919C4.7245 7.21875 4.27453 6.97778 3.79912 6.60825L3.26562 7.33906C3.83669 7.77868 4.51711 8.05375 5.23325 8.1345V8.9375H5.95856V8.14241C7.01731 8.05406 7.73438 7.46763 7.73438 6.58419ZM5.26625 4.75303C4.62447 4.56844 4.46634 4.35153 4.46634 4.01397C4.46634 3.66094 4.74134 3.37975 5.26659 3.33953L5.26625 4.75303ZM6.75056 6.64022C6.75056 7.02591 6.45047 7.29094 5.92522 7.33116V5.87744C6.57559 6.06237 6.75056 6.27894 6.75056 6.64056V6.64022Z"
                            fill="#479EEE"
                          />
                        </svg>{' '}
                        1 BUSD = 18,18 $LOOPS
                      </Text>
                    </ButtonViewLoops>
                    <ButtonClosed scale="sm" ml={2}>
                      <Text fontSize="12px" color="#fff">
                        Closed
                      </Text>
                    </ButtonClosed>
                  </Flex>
                  <Flex mb={2}>
                    <CurrencyLogo size="56px" address="0xB8c77482e45F1F44dE1745F52C74426C631bDD52" />
                    <Flex flexDirection="column" ml={2}>
                      <Text fontSize="28px" fontWeight={800} color="#fff">
                        120,000 BSUD
                      </Text>
                      <Text fontSize="12px" color="#fff">
                        Total Raise Amount
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex mb={2}>
                    <CurrencyLogo size="56px" address="0xB8c77482e45F1F44dE1745F52C74426C631bDD52" />
                    <Flex flexDirection="column" ml={2}>
                      <Text fontSize="28px" fontWeight={800} color="#fff">
                        2,181,818.18 LOOPS
                      </Text>
                      <Text fontSize="12px" color="#fff">
                        Total Sales Amount
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <Slider
                      mt={2}
                      mb={1}
                      min={0}
                      max={100}
                      value={100}
                      onValueChanged={() => null}
                      name="stake"
                      valueLabel={`${1}%`}
                      step={1}
                      width="100%"
                    />
                  </Flex>
                  <Flex justifyContent="space-between" mb={4}>
                    <ButtonViewLoops scale="sm">
                      <Text fontSize="12px" color="#fff">
                        100.00 % Completed
                      </Text>
                    </ButtonViewLoops>
                    <Text fontSize="12px" color="#fff">
                      000,000/120,000 $LOOPS
                    </Text>
                  </Flex>

                  {stepIDO === 1 ? (
                    <Flex justifyContent="center" mt="32px">
                      <ButtonIDOStyled scale="sm" onClick={() => setStepIDO(2)}>
                        Next
                      </ButtonIDOStyled>
                    </Flex>
                  ) : null}
                  {stepIDO === 2 ? (
                    <>
                      {' '}
                      <Flex justifyContent="center" mt="32px">
                        <ButtonIDOStyled scale="sm" onClick={() => setStepIDO(3)}>
                          Aprove BUSD
                        </ButtonIDOStyled>
                      </Flex>
                      <Flex justifyContent="center" mt="32px">
                        <ButtonIDOStyled scale="sm" onClick={() => null}>
                          {' '}
                          Claim SHAL
                        </ButtonIDOStyled>
                      </Flex>
                    </>
                  ) : null}

                  {stepIDO === 3 ? (
                    <>
                      <Flex justifyContent="center" mt="32px">
                        <ButtonIDOStyled scale="sm" onClick={handleCommit}>
                          Deposit BUSD
                        </ButtonIDOStyled>
                      </Flex>
                      <Flex justifyContent="center" mt="32px">
                        <ButtonIDOStyled scale="sm" onClick={handleCommit}>
                          Claim LOOPS
                        </ButtonIDOStyled>
                      </Flex>
                    </>
                  ) : null}
                  {stepIDO === 3 || stepIDO === 2 ? (
                    <Flex mt="32px">
                      <ButtonIDOStyled minWidth={100} scale="sm" onClick={() => null}>
                        Add LOOPS to Metamask
                      </ButtonIDOStyled>
                    </Flex>
                  ) : null}
                </Box>
              </Flex>
            </Flex>
          </WrapLaunchpad>
        </Container>
      </Page>
      <div style={{ background: '#100151' }}>
        <div
          style={{
            background: 'linear-gradient(91.59deg, rgba(83, 83, 238, 0.38) 16.47%, rgba(25, 25, 140, 0.41) 92.23%)',
            backdropFilter: 'blur(100px)',
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Launchpad
