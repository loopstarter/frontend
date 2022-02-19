import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { formatUnits } from '@ethersproject/units'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import {
  useFetchPublicPoolsData,
  usePools,
  useFetchUserPools,
  useFetchCakeVault,
  useFetchIfoPool,
  useVaultPools,
} from 'state/pools/hooks'
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
const NUMBER_OF_POOLS_VISIBLE = 12

const Pools: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { userDataLoaded } = usePools()
  const pools = usePoolsWithVault()
  const cardLayout = (
    <>
      {pools.map((pool) =>
          <Card key={pool.vaultKey}  />
      )}
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
