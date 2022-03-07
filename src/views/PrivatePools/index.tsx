import React from 'react'
import styled from 'styled-components'
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
  const pools = usePoolsWithVault()
  pools.length = 10

  return (
    <Page>
      {pools.map((pool) => (
        <Card key={pool.vaultKey} />
      ))}
    </Page>
  )
}

export default Pools
