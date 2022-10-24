import { useEffect } from 'react'

export function useClickOutside(ref: any, callback: any) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref && ref?.current && !ref?.current?.contains?.(event.target)) {
        callback && callback(event)
      }
    }
    document && document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document && document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
