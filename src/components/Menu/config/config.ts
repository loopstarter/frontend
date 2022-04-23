import { MenuItemsType, DropdownMenuItemType } from '@loopstarter/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Loopdex'),
    icon: 'Swap',
    // href: 'https://dex.loopstarter.com/',
    href: '#',
    // target: '_blank',
    showItemsOnMobile: false,
  },
  {
    label: t('Looppad'),
    href: '/#looppad',
    icon: 'Earn',
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: t('Team'),
    href: '/#team',
    icon: 'Stake',
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: 'Partner',
    href: 'https://docs.loopstarter.com/our-teams/partnership',
    target: '_blank',
    icon: 'More',
    hideSubNav: true,
    items: [],
    showItemsOnMobile: false,
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
  {
    label: 'Roadmaps',
    href: '/?q=roadmaps',
    icon: 'More',
    hideSubNav: true,
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: 'Doc',
    href: 'https://docs.loopstarter.com/',
    target: '_blank',
    icon: 'More',
    hideSubNav: true,
    showItemsOnMobile: false,
    items: [],
    type: DropdownMenuItemType.EXTERNAL_LINK,
  },
  {
    label: 'Whitelist',
    href: '/#',
    icon: 'More',
    hideSubNav: true,
    items: [],
    showItemsOnMobile: false,
  },
]

export default config
