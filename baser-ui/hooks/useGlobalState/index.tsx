import { getLocalState, setPrefix, syncLocalTab } from './StateLocal'
import { initRDT, sendRDT } from './ReduxDevTool'
import { useEffect, useState } from 'react'

import { StateListener } from './StateListener'
import { StateStorer } from './StateStorer'
import equal from 'fast-deep-equal/es6/react'

const isDev = process.env.NODE_ENV != 'production'
const _globalState = new StateStorer()
const _listener = new StateListener(_globalState)

declare global {
  interface Window {
    _globalState: any
  }
}
if (isDev && process.browser) {
  window._globalState = window._globalState || _globalState
}

export function useGlobalState<T = any>(key: string, deepEqual = false) {
  const currentValue = _globalState.get(key) as T
  const [state, _setState] = useState<T>(currentValue)
  const setState = (nextState: T) => {
    _setState((_state: T) => {
      // if (key.startsWith('test')) {
      //   console.log('// Broadcast -> Check', key, _state, nextState, _state === nextState)
      // }
      // Broadcast -> State
      if (deepEqual && equal(_state, nextState)) {
        return _state // deep compare
      }
      if (_state === nextState) {
        return _state // object compare
      }
      return nextState
    })
  }
  useEffect(() => {
    _listener.add(key, setState)
    setState(currentValue)
    return () => {
      _listener.del(key, setState)
    }
  }, [])

  const setNextState = (nextState: T, event = '') => {
    putGlobalState(key, nextState, { deepEqual, event })
  }
  return [state, setNextState] as const // Force type to match correct order [data, Function()]
}

export function setGlobalState(data: any, reset = false) {
  if (reset) {
    Object.entries(data).map(([key, nextState]) => {
      _globalState.set(key, nextState)
      _listener.delAll(key)
    })
  } else {
    Object.entries(data).map(([key, nextState]) => {
      putGlobalState(key, nextState)
    })
  }
}

export function putGlobalState(
  key: string,
  nextState: any,
  options: { deepEqual: boolean; event: string } = { deepEqual: false, event: '' }
) {
  const currentValue = _globalState.get(key)
  nextState = typeof nextState === 'function' ? nextState?.(currentValue) : nextState
  // if (key.startsWith('test')) {
  //   console.log('// Check -> Broadcast', key, currentValue, nextState, currentValue === nextState)
  // }
  // State -> Broadcast
  if (options.deepEqual && equal(currentValue, nextState)) {
    return // deep compare
  }
  if (currentValue === nextState) {
    return // object compare
  }
  if (_globalState.set(key, nextState)) {
    sendRDT(options.event || key, _globalState.getState())
    _listener.broadCast(key)
  }
}

export function clearGlobalState(key: string) {
  if (key) {
    _globalState.del(key)
    _listener.delAll(key)
  } else {
    Object.keys(_globalState).map((key) => clearGlobalState(key))
  }
}

export function initializeGlobalState() {
  const INIT_STATE = process.browser
    ? { ...setPrefix(window?.__NEXT_DATA__?.props?.pageProps), ...getLocalState() }
    : setPrefix((process as any).share)
  setGlobalState(INIT_STATE, true)
  initRDT(INIT_STATE)
  // Set to false to avoid clearing state, this should be changed once we apply sync between tabs of browser.
  syncLocalTab((data: any) => setGlobalState(data))
}
