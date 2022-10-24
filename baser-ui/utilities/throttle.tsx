/**
 *
 * @param fn
 * @param interval
 * @returns
 */
export function throttle(fn: any, interval: number) {
  let waiting = false
  let lastArgs = []
  return (...args: any[]) => {
    lastArgs = args
    if (!waiting) {
      fn?.(...lastArgs)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, interval)
    }
  }
}
