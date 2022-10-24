declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}
const isDev = process.env.NODE_ENV != 'production'
const config = {
  name: 'P10N_STATE',
  trace: true,
  actionsBlacklist: ['stickyState'],
  actionsWhitelist: []
}
let devTools: any = undefined

export const initRDT = (value: any) => {
  if (process.browser && isDev) {
    devTools = devTools || window.__REDUX_DEVTOOLS_EXTENSION__.connect(config)
    devTools.subscribe((message: any) => {
      if (message.type === 'DISPATCH' && message.state) {
        console.log('DevTools requested to change the state to', message.state)
      }
    })
    devTools.init(value)
  }
}

export const sendRDT = (event: string, value: any) => {
  devTools?.send(event, value)
}
