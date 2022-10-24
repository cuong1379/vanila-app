import { useEffect, useRef } from 'react'

export function useLongApi<T>(fn?: Function, onSuccess?: (data: T) => any, onError?: (error: any) => any) {
  const subscribe = useRef(false)

  useEffect(() => {
    subscribe.current = true
    return () => {
      subscribe.current = false
    }
  }, [])

  return (...args: any[]) =>
    fn?.(...args)
      .then((data: any) => subscribe.current && onSuccess?.(data))
      .catch((error: any) => {
        if (subscribe.current) {
          console.log(error)
          onError?.(error)
        }
      })
}
