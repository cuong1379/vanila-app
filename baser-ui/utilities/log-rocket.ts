import logRocket from 'logrocket'
import getConfig from 'next/config'

export interface ILogRocketConfig {
  fullSession?: boolean
  id?: string
}
export const isEmpty = (obj: any) => JSON.stringify(obj) === '{}'

const isProduction = getConfig().publicRuntimeConfig.defaultDomain?.includes('.com')

export interface ILogRocketContainer {
  logRocket?: ILogRocket
}

export interface ILogRocket {
  init: (isSignUp?: boolean) => void
  identify: (user: any) => void
  track: (event: string) => void
}

const setLoggedEvent = new Set<string>()

const options = {
  console: {
    isEnabled: false
  }
  // network: {
  //   requestSanitizer: (request: any) => {
  //     if (request.url.toLowerCase().includes('/cart/pay/cc')) {
  //       // let body = request.body

  //       try {
  //         // if (typeof body === 'string') {
  //         //   body = JSON.parse(body)
  //         // }
  //         // delete body.credit_card_info
  //         request.body = ''
  //       } catch (err) {
  //         console.error('Init log rocket error. Cannot sanitize network', err)
  //         return request
  //       }
  //     }

  //     return request
  //   }
  // }
}

// function isReady() {
//   const url = logRocket.sessionURL
//   if (config.id && url?.includes(config.id)) {
//     return true
//   }

//   return false
// }

const LogRocketContainer: ILogRocketContainer = {}

const logRocketId = getConfig().publicRuntimeConfig.logRocketId
const logRocketIdSelless = getConfig().publicRuntimeConfig.logRocketIdSelless

export default function getLogRocket(): ILogRocketContainer {
  const init = (isSignUp = false) => {
    if (isSignUp) {
      if (!isProduction || !logRocketIdSelless) {
        return null
      }
      if (!setLoggedEvent.has(logRocketIdSelless)) {
        console.log('init log logrocket')
        logRocket.init(logRocketIdSelless, options)
        setLoggedEvent.add(logRocketIdSelless)
      }
    } else {
      if (!isProduction || !logRocketId) {
        return null
      }
      if (!setLoggedEvent.has(logRocketId)) {
        console.log('init log logrocket')
        logRocket.init(logRocketId, options)
        setLoggedEvent.add(logRocketId)
      }
    }
  }

  const identify = (user: any = {}) => {
    if (!isProduction) {
      return null
    }
    logRocket.getSessionURL(() => {
      const name = `${user.firstName || ''} ${user.lastName || ''}`.trim()
      logRocket.identify(user.email, {
        name,
        email: user.email
      })
    })
  }

  const track = (event: string) => {
    if (!isProduction) {
      return null
    }

    logRocket.getSessionURL(() => {
      logRocket.track(event)
    })
  }

  LogRocketContainer.logRocket = {
    init,
    identify,
    track
  }

  return LogRocketContainer
}
