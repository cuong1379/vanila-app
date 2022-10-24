import { useEffect, useState } from 'react'

export function useCheckMobile(): boolean {
  const [width, setWidth] = useState(window?.innerWidth || 0)
  const breakpoint = 768
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return width < breakpoint
}
