import tokens from 'config/constants/tokens';

export interface IConfigIDO {
    pid: number;
    projectDescription: string;
    projectLogo: string;
    social: {
        twitter?: string;
        website?: string;
    }, 
    tokenInfo: {
        sell: {
            symbol: string
            address: string
            decimals: number
        }, 
        useForBuy: {
            symbol: string
        }
    }
}

export const configIDO: IConfigIDO[] = [
    {
        pid: 0,
        projectDescription: "Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.LOOPStarter is a platform used to launch crypto projects, introduce some new coins, and increase liquidity.This is one of the biggest things for this digital world, especially when it comes to decentralized finance.LOOPStarter is beyond just being a IDO Launchpad platform.It’s an integrated ecosystem that introduces an all-in -one solution to launch and manage decentralized finances.It supports all the major Multi - chain wallets along with our inline wallet management system.The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner.The first DAO supports multi - chain, cross - platform launchpad with a full DEX and deflation mechanism.",
        projectLogo: "/images/home/logo.svg",
        social: {

        },
        tokenInfo: {
            sell: {
                symbol: "LOOPS",
                address: "",
                decimals: 18
            },
            useForBuy: {
                symbol: "BUSD"
            }
        }
    },
    {
        pid: 2,
        projectDescription: "Initial token distribution event for LOOPStarter tokens with allocation based on a whitelist and ranking order based on the score achieved by each individual.LOOPStarter is a platform used to launch crypto projects, introduce some new coins, and increase liquidity.This is one of the biggest things for this digital world, especially when it comes to decentralized finance.LOOPStarter is beyond just being a IDO Launchpad platform.It’s an integrated ecosystem that introduces an all-in -one solution to launch and manage decentralized finances.It supports all the major Multi - chain wallets along with our inline wallet management system.The portal will integrate a launchpad for decentralized fundraising for new projects needing liquidity at the start in a fair manner.The first DAO supports multi - chain, cross - platform launchpad with a full DEX and deflation mechanism.",
        projectLogo: "/images/home/logo.svg",
        social: {
            twitter: "",
            website: "https://loopstarter.com/"
        },
        tokenInfo: {
            sell: {
                symbol: "LOOPS",
                address: tokens.loops.address,
                decimals: tokens.loops.decimals
            },
            useForBuy: {
                symbol: "USDT"
            }
        }
    }

]