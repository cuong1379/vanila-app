import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { privateRouters, profileHash } from './routerPath'

import { debounce } from './debounce'
import getConfig from 'next/config'
import { message as AntMessage } from 'antd'

export function AxiosDefault(config?: AxiosRequestConfig) {
  return axios.create({
    // baseURL: getConfig().publicRuntimeConfig.apiBasePath,
    baseURL: `${process.env.API_BASE_PATH}`,
    timeout: 60000,
    withCredentials: true,
    ...config
  })
}

let showError = false
export function Axios(config: AxiosRequestConfig) {
  const instance = axios.create(config)
  const instance2 = axios.create(config)
  // Add a request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      return config
    },
    (error) => {
      // Do something with request error
      showErrorToast(error)
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response
    },
    async (error) => {
      const code = getErrorCode(error)
      const pathname = window.location.pathname
      if ([401, 403].includes(code) && privateRouters(pathname)) {
        const expired = await checkTokenExpired(instance2)
        if (expired) {
          return forceLogout()
        }
      }
      if (!showError) {
        showErrorToast(error)
        showError = true
        setTimeout(() => {
          showError = false
        }, 3000)
      }

      return Promise.reject(error)
    }
  )

  return instance
}

const showErrorToast = (error: any) => {
  const getMsg = (message: any) => (typeof message == 'string' ? message : '')
  const data = error?.response?.data
  const title = getMsg(data?.title)

  AntMessage.error(`Error: ${title}`)
}

const getErrorCode = (error: any) => {
  const data = error?.response?.data
  const code = data?.error?.error_details?.error_code || error?.response?.status || ''
  return code
}

let fetching: Promise<any> | undefined
const checkTokenExpired = async (axios: AxiosInstance) => {
  let code = 200
  try {
    if (!fetching) {
      fetching = axios.get('/auth/profile')
      setTimeout(() => {
        fetching = undefined
      }, 3000)
    }
    const result = await fetching
    const profileId = profileHash(result?.data || {})
    if (profileId != (window as any).profileId) {
      return true // detect change account
    }
  } catch (error) {
    code = getErrorCode(error)
  }
  const expired = [401, 403].includes(code)
  return expired
}

const _forceLogout = async () => {
  const pathname = window.location.pathname
  if (privateRouters(pathname)) {
    const urlSearch = `return_url=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`
    const loginUrl = encodeURIComponent(`${window.location.origin}/login?${urlSearch}`)
    const _url = `${getConfig().publicRuntimeConfig.apiBasePath}auth/logout?redirect_uri=${loginUrl}`
    // const returnUrl = !['/', '/404'].includes(pathname) ? urlSearch : `${encodeURIComponent('?timeout=true')}`
    const logoutUrl = `${_url}`
    if (process.browser) {
      window.location.replace(logoutUrl)
    }
  }
}

const forceLogout = debounce(_forceLogout, 500)
