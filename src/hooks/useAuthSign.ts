import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { simpleRpcProvider } from 'utils/providers'
import { signMessage } from 'utils/web3React'
import { post, LOOP_TOKEN } from 'utils/http'
import jwtDecode from 'jwt-decode'
import { BASE_API_URL } from 'config'

export const getLoopToken = () => localStorage.getItem(LOOP_TOKEN)

const checkExistedAccount = async (account) => {
  const res = await fetch(`${BASE_API_URL}/user-nonce?address=${account}`)
  if (res.ok) {
    const data = await res.json()
    return data.nonce
  }
  console.error('Address not found', account)
  return undefined
}

const loginAccount = async (userNonce, { account, library, connector }) => {
  const msg = `loop- ${userNonce}`
  const signature = await signMessage(connector, library, account, msg)
  const body = {
    signature,
    address: account,
  }
  const res = await fetch(`${BASE_API_URL}/user/authenticate`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((err) => {
    console.error('Failed to fetch to LOGIN', body)
    return err
  })
  if (res.ok) {
    const data = await res.json()
    console.log("authen res ", res);
    
    localStorage.setItem(LOOP_TOKEN, data.token)
    return data.token
  }

  return undefined
}

const checkIfValidToken = (token) => {
  try {
    const decoded: any = token ? jwtDecode(token) : undefined
    return decoded?.user?.address
  } catch (error) {
    return false
  }
}

const registerAccount = async ({ account, library, connector }) => {
  const transactionCount = await simpleRpcProvider.getTransactionCount(account)
  const msg = `loop- ${transactionCount}`
  const signature = await signMessage(connector, library, account, msg)
  localStorage.removeItem(LOOP_TOKEN)
  const body = {
    signature,
    address: account,
    nonce: transactionCount.toString(),
  }
  const res = await post({
    url: `${BASE_API_URL}/users`,
    body,
  }).catch((err) => {
    console.error('Failed to fetch REGISTER', body)
    return err
  })
  if (!checkIfValidToken(res.token)) {
    localStorage.removeItem(LOOP_TOKEN)
  }
  localStorage.setItem(LOOP_TOKEN, res.token)
  return res.token
}

const useAuth = () => {
  const { account, library, connector } = useWeb3React()

  useEffect(() => {
    const token = localStorage.getItem(LOOP_TOKEN)

    const isValidToken = checkIfValidToken(token)
    if (!isValidToken) {
      localStorage.removeItem(LOOP_TOKEN)
    }
    const isChangedAddress = account && isValidToken && isValidToken?.toLowerCase() !== account?.toLowerCase()

    if (account && (!token || isChangedAddress || !isValidToken)) {
      checkExistedAccount(account)
        .then((nonce) => {
          if (nonce) {
            console.log('Go Login')
            loginAccount(nonce, { account, library, connector })
          } else {
            console.log('Go Register')
            registerAccount({ connector, account, library })
          }
        })
        .catch(() => registerAccount({ connector, account, library }))
    }
  }, [account, library])
}

export const withAuth = (callback, { account, library, connector }) => {
  if (account && callback && library) {
    checkExistedAccount(account)
      .then((nonce) => {
        if (nonce) {
          loginAccount(nonce, { connector, account, library }).then(callback)
        } else {
          registerAccount({ connector, account, library }).then(callback)
        }
      })
      .catch(() => registerAccount({ connector, account, library }).then(callback))
  }
}

export default useAuth
