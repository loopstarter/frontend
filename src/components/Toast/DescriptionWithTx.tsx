import React from 'react'
import { Link, Text } from '@loopstarter/uikit'
import { getBscScanLink } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import truncateHash from 'utils/truncateHash'

interface DescriptionWithTxProps {
  description?: string
  txHash?: string
  type?: 'transaction' | 'token' | 'address' | 'block' | 'countdown'
}

const DescriptionWithTx: React.FC<DescriptionWithTxProps> = ({ txHash, children, type = 'transaction' }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  return (
    <>
      {typeof children === 'string' ? <Text as="p">{children}</Text> : children}
      {txHash && (
        <Link external href={getBscScanLink(txHash, type, chainId)}>
          {t('View on BscScan')}: {truncateHash(txHash, 8, 0)}
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
