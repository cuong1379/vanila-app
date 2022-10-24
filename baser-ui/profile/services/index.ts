import { Axios } from 'com-ui2/utilities'
import getConfig from 'next/config'
import { serviceOptions } from './auth.gen'

const instance = Axios({
  baseURL: getConfig().publicRuntimeConfig.apiBasePath,
  timeout: 100000,
  withCredentials: true
})

serviceOptions.axios = instance

export * from './auth.gen'
