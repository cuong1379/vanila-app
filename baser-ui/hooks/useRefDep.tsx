import { useEffect, useRef } from 'react'

export const useRefDep = <T,>(dependency: T) => {
  const ref = useRef(dependency)

  useEffect(() => {
    ref.current = dependency
  }, [dependency])

  return ref
}
