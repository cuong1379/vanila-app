export const localKey = (key: string) => ['_local_'].some((pre: string) => key.startsWith(pre))

export const setLocalState = (key: string, nextState: any) => {
  if (process.browser && localKey(key)) {
    localStorage.setItem(key, JSON.stringify(nextState))
  }
}

export const getLocalState = () => {
  const localState = Object.fromEntries(
    Object.entries(localStorage)
      ?.filter(([key]) => localKey(key))
      ?.map(([_, value]) => [_, JsonParse(value)])
  )
  return localState
}

export const syncLocalTab = (fn: (data: any) => any) => {
  if (process.browser) {
    // init sync between tabs
    window.addEventListener('storage', (e: any) => {
      const { key, newValue } = e
      const data = { [key]: JsonParse(newValue) }
      fn(data)
    })
  }
}

const JsonParse = (val: any) => {
  try {
    return JSON.parse(val)
  } catch (error) {
    console.error('Cannot parse: ', val, error)
    return val
  }
}

export const setPrefix = (data = {}, prefix = '_admin_') =>
  Object.fromEntries(Object.entries(data)?.map(([key, value]) => [`${prefix}${key}`, value]))
