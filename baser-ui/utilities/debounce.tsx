/**
 * debounce promise, can using in async await to get result
 * @param fn
 * @param interval
 * @returns
 */
export function debounce(fn: any, interval: number) {
  let timer: any = null
  return (...args: any[]) => {
    clearTimeout(timer)
    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(fn?.(...args)), interval)
    })
  }
}
