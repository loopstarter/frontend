import { MenuItemsType, DropdownMenuItemType } from '@loopstarter/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Loop Starter'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Trade'),
        href: '/swap',
      },
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Voting'),
    href: '/voting',
    icon: 'Earn',
  },
  {
    label: t('Buy Loops'),
    href: '/buy-loops',
    icon: 'Trophy',
    items: [],
  },
  {
    label: t('Document'),
    href: '/document',
    icon: 'Nft',
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
      {
        label: t('Activity'),
        href: `${nftsBaseUrl}/activity`,
      },
    ],
  },
  {
    label: 'Contract',
    href: '/contract',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
  {
    label: 'Privacy Policy',
    href: '/policy',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
]

export default config
