import { ResetCSS } from '@loopstarter/uikit'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import BigNumber from 'bignumber.js'
import EasterEgg from 'components/EasterEgg'
import GlobalCheckClaimStatus from 'components/GlobalCheckClaimStatus'
import SubgraphHealthIndicator from 'components/SubgraphHealthIndicator'
import { ToastListener } from 'contexts/ToastsContext'
import useEagerConnect from 'hooks/useEagerConnect'
import { useInactiveListener } from 'hooks/useInactiveListener'
import useSentryUser from 'hooks/useSentryUser'
import useUserAgent from 'hooks/useUserAgent'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore, persistor } from 'state'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { NextPage } from 'next'
import { useFetchProfile } from 'state/profile/hooks'
import { Blocklist, Updaters } from '..'
import ErrorBoundary from '../components/ErrorBoundary'
import Menu from '../components/Menu'
import Providers from '../Providers'
import GlobalStyle from '../style/Global'

const MenuModal = dynamic(() => import('components/Menu/MenuModal'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function GlobalHooks() {
  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  usePollCoreFarmData()
  useUserAgent()
  useInactiveListener()
  useSentryUser()
  return null
}

function MyApp(props: AppProps) {
  const { pageProps } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="The first DAO multi-chain and multi-launchpad platform with full DEX and deflation mechanism
"
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="https://loopstarter.com/images/home/banner-hero.png" />
        <meta
          name="twitter:description"
          content="The first DAO multi-chain and multi-launchpad platform with full DEX and deflation mechanism
"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A evolution of Dao on Multi chain " />
        
        <meta property="og:title" content="A evolution of Dao on Multi chain" />
        <meta property="og:description" content="The first DAO multi-chain and multi-launchpad platform with full DEX and deflation mechanism" />
        <meta property="og:image" content="https://loopstarter.com/images/home/banner-hero.png" />
        <meta property="og:type" content="website" />
        <title>Loopstarter</title>
      </Head>
      <Providers store={store}>
        <Blocklist>
          <GlobalHooks />
          <Updaters />
          <ResetCSS />
          <GlobalStyle />
          <GlobalCheckClaimStatus excludeLocations={[]} />
          <PersistGate loading={null} persistor={persistor}>
            <App {...props} />
          </PersistGate>
        </Blocklist>
      </Providers>
      <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTAG}');
          `,
        }}
      />
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment
  const [isShowMenu, setShowMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setShowMenu(!isShowMenu)
  }

  return (
    <ErrorBoundary>
      <MenuModal onDismiss={toggleMenu} isShowModal={isShowMenu} />
      <Menu toggleMenu={toggleMenu}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Menu>
      <EasterEgg iterations={2} />
      <ToastListener />
      <SubgraphHealthIndicator />
    </ErrorBoundary>
  )
}

export default MyApp
