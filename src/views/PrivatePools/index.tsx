import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { usePools } from 'state/pools/hooks'
import { Flex, Loading } from '@loopstarter/uikit'
import { usePoolsWithVault } from 'views/Home/hooks/useGetTopPoolsByApr'
import Card from './components/Card'

const Page = styled.div`
  background-image: url('/images/pools/bg.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 104px 0;
  background-color: #43019f;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 104px 0;
  }
`

const Pools: React.FC = () => {
  const { account } = useWeb3React()
  const { userDataLoaded } = usePools()
  const pools = usePoolsWithVault()
  pools.length = 10
  const cardLayout = (
    <>
      {pools.map((pool) => (
        <Card key={pool.vaultKey} />
      ))}
    </>
  )

  return (
    <Page>
      {account && !userDataLoaded && stakedOnly && (
        <Flex justifyContent="center" mb="4px">
          <Loading />
        </Flex>
      )}
      {cardLayout}
    </Page>
  )
}

export default Pools
