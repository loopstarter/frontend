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
  },
  {
    label: t('Exchange'),
    href: '/#',
    icon: 'Earn',
    items: [
      {
        label: t('Exchange'),
        href: 'https://dex.loopstarter.com/swap',
        target:"blank"
      },
      {
        label: t('Liquidity'),
        href: 'https://dex.loopstarter.com/liquidity',
        target:"blank"
      },
    ],
  },
  {
    label: t('Stake'),
    href: '/#',
    icon: 'Stake',
    items: [],
  },
  {
    label: 'Token Dao',
    href: '/#',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
]

export default config