import { MenuItemsType } from '@loopstarter/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Loopdex'),
    icon: 'Swap',
    href: 'https://dex.loopstarter.com/',
    target: '_blank',
    showItemsOnMobile: false,
  },
  {
    label: t('Looppad'),
    href: '/?q=looppad',
    icon: 'Earn',
    items: [],
  },
  {
    label: t('Team'),
    href: '/?q=team',
    icon: 'Stake',
    items: [],
  },
  {
    label: 'Partner',
    href: '/?q=partner',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
  {
    label: 'Roadmaps',
    href: '/?q=roadmaps',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
  {
    label: 'Doc',
    href: 'https://docs.loopstarter.com/',
    target: '_blank',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
  {
    label: 'Whitelist',
    href: '/#',
    icon: 'More',
    hideSubNav: true,
    items: [],
  },
]

export default config
