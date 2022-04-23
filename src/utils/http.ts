export const LOOP_TOKEN = 'loop-token'

const attachHeaders = () => {
  const token = localStorage.getItem(LOOP_TOKEN)
  if (token) {
    return {
      authorization: `Bearer ${localStorage.getItem(LOOP_TOKEN)}` || undefined,
      'Content-Type': 'application/json',
    }
  }
  return {
    'Content-Type': 'application/json',
  }
}

const handleErrors = async (response) => {
  if ([200, 201].includes(response.status)) {
    return response.json()
  }
  if (response.status === 401) {
    window.localStorage.removeItem(LOOP_TOKEN)
  }

  const error = await response.json()
  throw error
}

export const get = async ({ url, body }: { url: string; body?: any }) => {
  const headers = attachHeaders()
  const response = await fetch(url, {
    headers,
  })
  const responseHandledError = await handleErrors(response)
  return responseHandledError
}

export const post = async ({ url, body }: { url: string; body: any }) => {
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: attachHeaders(),
    method: 'POST',
  })
  const responseHandledError = await handleErrors(response)
  return responseHandledError
}

export const apiRequest = async (url: string, method: string, bodyParams?: any): Promise<any> => {
  const response = await fetch(url, {
    body: bodyParams ? JSON.stringify(bodyParams) : undefined,
    method,
  })

  const payload = await response.json()
  if (!response.ok) {
    throw payload
  }
  return payload
}
