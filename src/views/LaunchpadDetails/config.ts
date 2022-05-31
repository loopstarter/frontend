import tokens from 'config/constants/tokens'

export interface IConfigIDO {
  pid: number
  projectDescription: string
  projectShortDescription: string
  projectLogo: string
  social: {
    twitter?: string
    website?: string
  }
  viewTokenLink: string
  tokenInfo: {
    sell: {
      symbol: string
      address: string
      decimals: number
    }
    useForBuy: {
      symbol: string
      address: string
    }
  }
  projectInfo: {
    timeDistribute?: string
    allocation?: string
    allocationSize?: string
    listingPrice?: string
    projectName?: string
    symbol?: string
    demicals?: number
    totalSupply?: string
    addressToken?: string
    access?: string
  }
}

export const configIDO: IConfigIDO[] = [
  {
    pid: 0,
    projectDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.LOOPStarter is a platform used to launch crypto projects, introduce some new coins, and increase liquidity.This is one of the biggest things for this digital world, especially when it comes to decentralized finance.LOOPStarter is beyond just being a IDO Launchpad platform.It’s an integrated ecosystem that introduces an all-in -one solution to launch and manage decentralized finances.It supports all the major Multi - chain wallets along with our inline wallet management system.The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner.The first DAO supports multi - chain, cross - platform launchpad with a full DEX and deflation mechanism.',
    projectShortDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.',
    projectLogo: '/images/home/logo.svg',
    social: {
      twitter: '',
      website: 'https://loopstarter.com/',
    },
    viewTokenLink: 'https://loopstarter.com/',
    tokenInfo: {
      sell: {
        symbol: 'LOOPS',
        address: tokens.loops.address,
        decimals: tokens.loops.decimals,
      },
      useForBuy: {
        symbol: 'BUSD',
        address: tokens.busd.address,
      },
    },
    projectInfo: {
      timeDistribute: '30/05/2022',
      allocation: '10 BUSD',
      allocationSize: ' - ',
      listingPrice: '$ 0.10',
      projectName: 'LOOPS SET',
      symbol: 'LOOPS',
      demicals: tokens.loops.decimals,
      totalSupply: '100,000,000',
      addressToken: tokens.loops.address,
      access: 'Public',
    },
  },
  {
    pid: 1,
    projectDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.LOOPStarter is a platform used to launch crypto projects, introduce some new coins, and increase liquidity.This is one of the biggest things for this digital world, especially when it comes to decentralized finance.LOOPStarter is beyond just being a IDO Launchpad platform.It’s an integrated ecosystem that introduces an all-in -one solution to launch and manage decentralized finances.It supports all the major Multi - chain wallets along with our inline wallet management system.The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner.The first DAO supports multi - chain, cross - platform launchpad with a full DEX and deflation mechanism.',
    projectShortDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.',
    projectLogo: '/images/home/logo.svg',
    social: {
      twitter: '',
      website: 'https://loopstarter.com/',
    },
    viewTokenLink: 'https://loopstarter.com/',
    tokenInfo: {
      sell: {
        symbol: 'LOOPS-A',
        address: tokens.loops.address,
        decimals: tokens.loops.decimals,
      },
      useForBuy: {
        symbol: 'BUSD',
        address: tokens.busd.address,
      },
    },
    projectInfo: {
      timeDistribute: '30/05/2022',
      allocation: '10 BUSD',
      allocationSize: ' - ',
      listingPrice: '$ 0.10',
      projectName: 'LOOPS SET',
      symbol: 'LOOPS',
      demicals: tokens.loops.decimals,
      totalSupply: '100,000,000',
      addressToken: tokens.loops.address,
      access: 'Public',
    },
  },
  {
    pid: 2,
    projectDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.LOOPStarter is a platform used to launch crypto projects, introduce some new coins, and increase liquidity.This is one of the biggest things for this digital world, especially when it comes to decentralized finance.LOOPStarter is beyond just being a IDO Launchpad platform.It’s an integrated ecosystem that introduces an all-in -one solution to launch and manage decentralized finances.It supports all the major Multi - chain wallets along with our inline wallet management system.The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner.The first DAO supports multi - chain, cross - platform launchpad with a full DEX and deflation mechanism.',
    projectShortDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.',
    projectLogo: '/images/home/logo.svg',
    social: {
      twitter: '',
      website: 'https://loopstarter.com/',
    },
    viewTokenLink: 'https://loopstarter.com/',
    tokenInfo: {
      sell: {
        symbol: 'LOOPS-B',
        address: tokens.loops.address,
        decimals: tokens.loops.decimals,
      },
      useForBuy: {
        symbol: 'BUSD',
        address: tokens.busd.address,
      },
    },
    projectInfo: {
      timeDistribute: '30/05/2022',
      allocation: '10 BUSD',
      allocationSize: ' - ',
      listingPrice: '$ 0.10',
      projectName: 'LOOPS SET',
      symbol: 'LOOPS',
      demicals: tokens.loops.decimals,
      totalSupply: '100,000,000',
      addressToken: tokens.loops.address,
      access: 'Public',
    },
  },
  {
    pid: 4,
    projectDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.LOOPStarter is a platform used to launch crypto projects, introduce some new coins, and increase liquidity.This is one of the biggest things for this digital world, especially when it comes to decentralized finance.LOOPStarter is beyond just being a IDO Launchpad platform.It’s an integrated ecosystem that introduces an all-in -one solution to launch and manage decentralized finances.It supports all the major Multi - chain wallets along with our inline wallet management system.The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner.The first DAO supports multi - chain, cross - platform launchpad with a full DEX and deflation mechanism.',
    projectShortDescription:
      'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.',
    projectLogo: '/images/home/logo.svg',
    social: {
      twitter: '',
      website: 'https://loopstarter.com/',
    },
    viewTokenLink: 'https://loopstarter.com/',
    tokenInfo: {
      sell: {
        symbol: 'LOOPS',
        address: tokens.loops.address,
        decimals: tokens.loops.decimals,
      },
      useForBuy: {
        symbol: 'BUSD',
        address: tokens.busd.address,
      },
    },
    projectInfo: {
      timeDistribute: '30/05/2022',
      allocation: '10 BUSD',
      allocationSize: ' - ',
      listingPrice: '$ 0.10',
      projectName: 'LOOPS SET',
      symbol: 'LOOPS',
      demicals: tokens.loops.decimals,
      totalSupply: '100,000,000',
      addressToken: tokens.loops.address,
      access: 'Public',
    },
  },
]
