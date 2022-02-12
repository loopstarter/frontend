import { MenuItemsType, DropdownMenuItemType } from '@loopstarter/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Loop Starter'),
    icon: 'Swap',
    href: '/#',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Trade'),
        href: '/#',
      },
      {
        label: t('Exchange'),
        href: '/#',
      },
      {
        label: t('Liquidity'),
        href: '/#',
      },
    ],
  },
  {
    label: t('Voting'),
    href: '/#',
    icon: 'Earn',
  },
  {
    label: t('Buy Loops'),
    href: '/#',
    icon: 'Trophy',
    items: [],
  },
  {
    label: t('Document'),
    href: '/#',
    icon: 'Nft',
    items: [
      {
        label: t('Overview'),
        href: '/#',
      },
      {
        label: t('Collections'),
        href: '/#',
      },
      {
        label: t('Activity'),
        href: '/#',
      },
    ],
  },
  {
    label: 'Contract',
    href: '/#',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
  {
    label: 'Privacy Policy',
    href: '/#',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
]

export default config