import { useEffect } from 'react'

export function useKeyPressed(keyCode: number, handler: any) {
  const handleKeydown = (e: any) => {
    if (e.keyCode == keyCode) {
      handler?.(e)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  })
}
