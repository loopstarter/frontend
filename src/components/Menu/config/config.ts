import { MenuItemsType } from '@loopstarter/uikit'
import { ContextApi } from 'contexts/Localization/types'

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
        // href: 'https://dex.loopstarter.com/swap',
        href: '/#',
        target: 'blank',
      },
      {
        label: t('Liquidity'),
        // href: 'https://dex.loopstarter.com/liquidity',
        href: '/#',
        target: 'blank',
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
