/* eslint-disable no-debugger */
import React from 'react'
import { Flex, Box, Button } from '@loopstarter/uikit'
import styled from 'styled-components'
import { withAuth, getLoopToken } from 'hooks/useAuthSign'
import { useWeb3React } from '@web3-react/core'
import { get, LOOP_TOKEN } from 'utils/http'
import { BASE_API_URL } from 'config'
import Page from 'components/Layout/Page'
import { useIdoContract } from 'hooks/useContract'

import Footer from './components/Footer'


const Launchpad: React.FC = () => {
  const { account, library, connector } = useWeb3React()
  const idoContract = useIdoContract()

  const handleCommit = () => {
    withAuth(async() => {
      const res = await get({
        url: `${BASE_API_URL}/ido-signature?pid=0`,
      }).catch((err) => {
        console.error('Failed to fetch ido-signature')
        return err
      })
      console.log({
        res
      })
    }, { account, library, connector })
  }

  return (
    <>
      <Page>
        <Box mt="500px">
          <Button onClick={handleCommit}>Commit</Button>
        </Box>
        
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