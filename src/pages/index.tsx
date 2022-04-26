import React from 'react'
import Home from '../views/Home'
import Launchpad from '../views/IDOLaunchpad'

const getMainPage = () => {
  if (process.env.NEXT_PUBLIC_SUB_DOMAIN === 'app') {
    return <Launchpad />
  }
  return <Home />
}

const IndexPage = () => getMainPage()

export default IndexPage
