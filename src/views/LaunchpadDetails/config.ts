import tokens from 'config/constants/tokens'

export interface IConfigIDO {
  pid: number
  mainContractIDO: string
  hidden: boolean
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
      decimals: number
    }
  }
  projectInfo: {
    timeDistribute: string
    timeDistributeEnd: string
    timeDistributeListing: string
    allocation?: string
    allocationSize?: string
    listingPrice?: string
    projectName?: string
    projectNameShort?: string
    symbol?: string
    // demicals?: number
    totalSupply?: string
    // addressToken?: string
    access?: string
    roundType: string
    linkWhiteList?: string
    logoWidth: number,
    startTime: number,
    totalSales: number,
  }
}

export const configIDO: IConfigIDO[] = [
  // {
  //   pid: 0,
  //   projectDescription:
  //     'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.LOOPStarter is a platform used to launch crypto projects, introduce some new coins, and increase liquidity.This is one of the biggest things for this digital world, especially when it comes to decentralized finance.LOOPStarter is beyond just being a IDO Launchpad platform.It’s an integrated ecosystem that introduces an all-in -one solution to launch and manage decentralized finances.It supports all the major Multi - chain wallets along with our inline wallet management system.The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner.The first DAO supports multi - chain, cross - platform launchpad with a full DEX and deflation mechanism.',
  //   projectShortDescription:
  //     'Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.',
  //   projectLogo: '/images/home/logo.svg',
  //   social: {
  //     twitter: '',
  //     website: 'https://loopstarter.com/',
  //   },
  //   viewTokenLink: 'https://loopstarter.com/',
  //   tokenInfo: {
  //     sell: {
  //       symbol: 'LOOPS',
  //       address: tokens.loops.address,
  //       decimals: tokens.loops.decimals,
  //     },
  //     useForBuy: {
  //       symbol: 'BUSD',
  //       address: tokens.busd.address,
  //     },
  //   },
  //   projectInfo: {
  //     timeDistribute: '30/05/2022',
  //     allocation: '10 BUSD',
  //     allocationSize: ' - ',
  //     listingPrice: '$ 0.10',
  //     projectName: 'LOOPS SET',
  //     symbol: 'LOOPS',
  //     demicals: tokens.loops.decimals,
  //     totalSupply: '100,000,000',
  //     addressToken: tokens.loops.address,
  //     access: 'Public',
  //     startTime: 1654707600
  //   },
  // },
  // {
  //   pid: 0,
  //   mainContractIDO: "0xc972bC7A8Afc4Da883AEE52429f569f5002E71dA",
  //   hidden: true,
  //   projectDescription: 'Acadex Network is the World’s Pioneering Decentralized Education Network, introducing blockchain’s first Proof of Knowledge (PoK) consensus.',
  //   projectShortDescription:
  //     'Acadex Network is the World’s Pioneering Decentralized Education Network, introducing blockchain’s first Proof of Knowledge (PoK) consensus.',
  //   projectLogo: '/images/app-ido/acdx.png',
  //   social: {
  //     twitter: '',
  //     website: 'https://acadex.network/',
  //   },
  //   viewTokenLink: 'https://acadex.network/',
  //   tokenInfo: {
  //     sell: {
  //       symbol: tokens.acdx.symbol,
  //       address: tokens.acdx.address,
  //       decimals: tokens.acdx.decimals,
  //     },
  //     useForBuy: {
  //       symbol: 'BUSD',
  //       address: tokens.busd.address,
  //       decimals: tokens.busd.decimals,

  //     },
  //   },
  //   projectInfo: {
  //     timeDistribute: '08/06/2022',
  //     timeDistributeEnd: '--/--/2022',
  //     timeDistributeListing: '--/--/2022',
  //     allocation: '100 BUSD',
  //     allocationSize: ' - ',
  //     listingPrice: '$0.003',
  //     projectName: 'PIONEERING DECENTRALIZED EDUCATION NETWORK',
  //     projectNameShort: 'Acadex Network',
  //     symbol: 'ACDX',
  //     demicals: tokens.acdx.decimals,
  //     totalSupply: '1,000,000,000',
  //     addressToken: tokens.acdx.address,
  //     access: 'Public',
  //     logoWidth: 120,
  //     startTime: 1654682400
  //   }
  // },
  {
    pid: 0,
    mainContractIDO: "0xcb987B25679c47Fc3BB6A713d5f9Fc3D1242469d",
    hidden: true,
    projectDescription: 'WalkN exists with only one mission - To bring people, fitness and crypto together by building a solid platform that rewards people to take care of their fitness. WalkN provides a platform for improving one\'s fitness while earning rewards in cryptocurrency.It leverages the newly born trend, Move2Earn.The app users purchase an NFT of their choice, start the app, and earn money with every step they take.',
    projectShortDescription:
      'WalkN App I Walk, Jog, or Run & Earn Rewards!',
    projectLogo: '/images/app-ido/walkn-pid-1.png',
    social: {
      twitter: 'https://twitter.com/WalkN_app',
      website: 'https://t.me/walknapp',
    },
    viewTokenLink: 'https://walkn.app/',
    tokenInfo: {
      sell: {
        symbol: tokens.walkn.symbol,
        address: tokens.walkn.address,
        decimals: tokens.walkn.decimals,
      },
      useForBuy: {
        symbol: tokens.busd.symbol,
        address: tokens.busd.address,
        decimals: tokens.busd.decimals,

      },
    },
    projectInfo: {
      timeDistribute: '25/06/2022',
      timeDistributeEnd: '26/06/2022',
      timeDistributeListing: '27/06/2022',
      allocation: '100 BUSD',
      allocationSize: ' - ',
      listingPrice: '$0.0049',
      projectName: 'WalkN App I Walk, Jog, or Run & Earn Rewards!',
      projectNameShort: 'WalkN',
      symbol: 'WALKN',
      totalSupply: '3,000,000,000',
      access: 'Public',
      roundType: 'FCFS round',
      linkWhiteList: 'https://sweepwidget.com/view/59279-8ltinjxv',
      logoWidth: 120,
      startTime: 1656162000,
      totalSales: 29000
    }
  },
  {
    pid: 1,
    mainContractIDO: "0xcb987B25679c47Fc3BB6A713d5f9Fc3D1242469d",
    hidden: true,
    projectDescription: 'WalkN exists with only one mission - To bring people, fitness and crypto together by building a solid platform that rewards people to take care of their fitness. WalkN provides a platform for improving one\'s fitness while earning rewards in cryptocurrency.It leverages the newly born trend, Move2Earn.The app users purchase an NFT of their choice, start the app, and earn money with every step they take.',
    projectShortDescription:
      'WalkN App I Walk, Jog, or Run & Earn Rewards!',
    projectLogo: '/images/app-ido/walkn-pid-1.png',
    social: {
      twitter: 'https://twitter.com/WalkN_app',
      website: 'https://t.me/walknapp',
    },
    viewTokenLink: 'https://walkn.app/',
    tokenInfo: {
      sell: {
        symbol: tokens.walkn.symbol,
        address: tokens.walkn.address,
        decimals: tokens.walkn.decimals,
      },
      useForBuy: {
        symbol: tokens.busd.symbol,
        address: tokens.busd.address,
        decimals: tokens.busd.decimals,

      },
    },
    projectInfo: {
      timeDistribute: '25/06/2022',
      timeDistributeEnd: '26/06/2022',
      timeDistributeListing: '27/06/2022',
      allocation: '200 BUSD',
      allocationSize: ' - ',
      listingPrice: '$0.0049',
      projectName: 'WalkN App I Walk, Jog, or Run & Earn Rewards!',
      projectNameShort: 'WalkN',
      symbol: 'WALKN',
      totalSupply: '3,000,000,000',
      access: 'Public',
      roundType: 'Guaranteed round',
      linkWhiteList: 'https://sweepwidget.com/view/59279-8ltinjxv',
      logoWidth: 120,
      startTime: 1656162000,
      totalSales: 36000
    }
  },
  {
    pid: 2,
    mainContractIDO: "0xcb987B25679c47Fc3BB6A713d5f9Fc3D1242469d",
    hidden: true,
    projectDescription: 'WalkN exists with only one mission - To bring people, fitness and crypto together by building a solid platform that rewards people to take care of their fitness. WalkN provides a platform for improving one\'s fitness while earning rewards in cryptocurrency.It leverages the newly born trend, Move2Earn.The app users purchase an NFT of their choice, start the app, and earn money with every step they take.',
    projectShortDescription:
      'WalkN App I Walk, Jog, or Run & Earn Rewards!',
    projectLogo: '/images/app-ido/walkn-pid-1.png',
    social: {
      twitter: 'https://twitter.com/WalkN_app',
      website: 'https://t.me/walknapp',
    },
    viewTokenLink: 'https://walkn.app/',
    tokenInfo: {
      sell: {
        symbol: tokens.walkn.symbol,
        address: tokens.walkn.address,
        decimals: tokens.walkn.decimals,
      },
      useForBuy: {
        symbol: tokens.busd.symbol,
        address: tokens.busd.address,
        decimals: tokens.busd.decimals,

      },
    },
    projectInfo: {
      timeDistribute: '25/06/2022',
      timeDistributeEnd: '26/06/2022',
      timeDistributeListing: '27/06/2022',
      allocation: '500 BUSD',
      allocationSize: ' - ',
      listingPrice: '$0.0049',
      projectName: 'WalkN App I Walk, Jog, or Run & Earn Rewards!',
      projectNameShort: 'WalkN',
      symbol: 'WALKN',
      totalSupply: '3,000,000,000',
      access: 'Public',
      roundType: 'Guaranteed round',
      linkWhiteList: 'https://sweepwidget.com/view/59279-8ltinjxv',
      logoWidth: 120,
      startTime: 1656162000,
      totalSales: 35000
    }
  },
  {
    pid: 5,
    mainContractIDO: "0xcb987B25679c47Fc3BB6A713d5f9Fc3D1242469d",
    hidden: false,
    projectDescription: 'WalkN exists with only one mission - To bring people, fitness and crypto together by building a solid platform that rewards people to take care of their fitness. WalkN provides a platform for improving one\'s fitness while earning rewards in cryptocurrency.It leverages the newly born trend, Move2Earn.The app users purchase an NFT of their choice, start the app, and earn money with every step they take.',
    projectShortDescription:
      'WalkN App I Walk, Jog, or Run & Earn Rewards!',
    projectLogo: '/images/app-ido/walkn-pid-1.png',
    social: {
      twitter: 'https://twitter.com/WalkN_app',
      website: 'https://t.me/walknapp',
    },
    viewTokenLink: 'https://walkn.app/',
    tokenInfo: {
      sell: {
        symbol: tokens.walkn.symbol,
        address: tokens.walkn.address,
        decimals: tokens.walkn.decimals,
      },
      useForBuy: {
        symbol: tokens.busd.symbol,
        address: tokens.busd.address,
        decimals: tokens.busd.decimals,

      },
    },
    projectInfo: {
      timeDistribute: '25/06/2022',
      timeDistributeEnd: '26/06/2022',
      timeDistributeListing: '27/06/2022',
      allocation: '100 BUSD',
      allocationSize: ' - ',
      listingPrice: '$0.0049',
      projectName: 'WalkN App I Walk, Jog, or Run & Earn Rewards!',
      projectNameShort: 'WalkN',
      symbol: 'WALKN',
      totalSupply: '3,000,000,000',
      access: 'Public',
      roundType: 'FCFS round',
      linkWhiteList: 'https://sweepwidget.com/view/59279-8ltinjxv',
      logoWidth: 120,
      startTime: 1656162000,
      totalSales: 29000
    }
  },
  {
    pid: 4,
    mainContractIDO: "0xcb987B25679c47Fc3BB6A713d5f9Fc3D1242469d",
    hidden: false,
    projectDescription: 'WalkN exists with only one mission - To bring people, fitness and crypto together by building a solid platform that rewards people to take care of their fitness. WalkN provides a platform for improving one\'s fitness while earning rewards in cryptocurrency.It leverages the newly born trend, Move2Earn.The app users purchase an NFT of their choice, start the app, and earn money with every step they take.',
    projectShortDescription:
      'WalkN App I Walk, Jog, or Run & Earn Rewards!',
    projectLogo: '/images/app-ido/walkn-pid-1.png',
    social: {
      twitter: 'https://twitter.com/WalkN_app',
      website: 'https://t.me/walknapp',
    },
    viewTokenLink: 'https://walkn.app/',
    tokenInfo: {
      sell: {
        symbol: tokens.walkn.symbol,
        address: tokens.walkn.address,
        decimals: tokens.walkn.decimals,
      },
      useForBuy: {
        symbol: tokens.busd.symbol,
        address: tokens.busd.address,
        decimals: tokens.busd.decimals,

      },
    },
    projectInfo: {
      timeDistribute: '25/06/2022',
      timeDistributeEnd: '26/06/2022',
      timeDistributeListing: '27/06/2022',
      allocation: '200 BUSD',
      allocationSize: ' - ',
      listingPrice: '$0.0049',
      projectName: 'WalkN App I Walk, Jog, or Run & Earn Rewards!',
      projectNameShort: 'WalkN',
      symbol: 'WALKN',
      totalSupply: '3,000,000,000',
      access: 'Public',
      roundType: 'Guaranteed round',
      linkWhiteList: 'https://sweepwidget.com/view/59279-8ltinjxv',
      logoWidth: 120,
      startTime: 1656162000,
      totalSales: 36000
    }
  },
  {
    pid: 3,
    mainContractIDO: "0xcb987B25679c47Fc3BB6A713d5f9Fc3D1242469d",
    hidden: false,
    projectDescription: 'WalkN exists with only one mission - To bring people, fitness and crypto together by building a solid platform that rewards people to take care of their fitness. WalkN provides a platform for improving one\'s fitness while earning rewards in cryptocurrency.It leverages the newly born trend, Move2Earn.The app users purchase an NFT of their choice, start the app, and earn money with every step they take.',
    projectShortDescription:
      'WalkN App I Walk, Jog, or Run & Earn Rewards!',
    projectLogo: '/images/app-ido/walkn-pid-1.png',
    social: {
      twitter: 'https://twitter.com/WalkN_app',
      website: 'https://t.me/walknapp',
    },
    viewTokenLink: 'https://walkn.app/',
    tokenInfo: {
      sell: {
        symbol: tokens.walkn.symbol,
        address: tokens.walkn.address,
        decimals: tokens.walkn.decimals,
      },
      useForBuy: {
        symbol: tokens.busd.symbol,
        address: tokens.busd.address,
        decimals: tokens.busd.decimals,

      },
    },
    projectInfo: {
      timeDistribute: '25/06/2022',
      timeDistributeEnd: '26/06/2022',
      timeDistributeListing: '27/06/2022',
      allocation: '500 BUSD',
      allocationSize: ' - ',
      listingPrice: '$0.0049',
      projectName: 'WalkN App I Walk, Jog, or Run & Earn Rewards!',
      projectNameShort: 'WalkN',
      symbol: 'WALKN',
      totalSupply: '3,000,000,000',
      access: 'Public',
      roundType: 'Guaranteed round',
      linkWhiteList: 'https://sweepwidget.com/view/59279-8ltinjxv',
      logoWidth: 120,
      startTime: 1656162000,
      totalSales: 35000
    }
  }
]
