import { useRouter } from 'next/router'
import React from 'react'
import { HistoryOptions, Serializers } from './defs'

export interface UseQueryStateOptions<T> extends Serializers<T> {
  /**
   * The operation to use on state updates. Defaults to `replace`.
   */
  history: HistoryOptions
  defaultValue: T
}

export type UseQueryStateReturn<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export type UseQueryStateOptionsWithDefault<T> = Pick<UseQueryStateOptions<T>, 'parse' | 'serialize' | 'defaultValue'> &
  Partial<Omit<UseQueryStateOptions<T>, 'parse' | 'serialize' | 'defaultValue'>>

export function useQueryState<T = string>(
  key: string,
  options: UseQueryStateOptionsWithDefault<T>
): UseQueryStateReturn<T>
export function useQueryState<T = string>(
  key: string,
  options?: Partial<UseQueryStateOptions<T>>
): UseQueryStateReturn<T | null>

// Implementation --------------------------------------------------------------

export function useQueryState<T = string>(
  key: string,
  {
    history = 'replace',
    parse = (x: any) => (x as unknown) as T,
    serialize = (x: any) => `${x}`,
    defaultValue
  }: Partial<UseQueryStateOptions<T>> = {}
) {
  const router = useRouter()

  const updateUrl = React.useMemo(() => (history === 'push' ? router.push : router.replace), [history])

  const getValue = React.useCallback((): T | null => {
    if (typeof window === 'undefined') {
      // Not available in an SSR context
      return null
    }
    const query = new URLSearchParams(window.location.search)
    const value = query.get(key)
    return value !== null ? parse(value) : null
  }, [])

  const value = React.useMemo(getValue, [router.query[key]])

  const update = React.useCallback(
    (stateUpdater: React.SetStateAction<T | null>) => {
      const isUpdaterFunction = (input: any): input is (prevState: T | null) => T | null => {
        return typeof input === 'function'
      }

      const oldValue = getValue()
      const newValue = isUpdaterFunction(stateUpdater) ? stateUpdater(oldValue) : stateUpdater
      const query = new URLSearchParams(window.location.search)
      if (newValue === null || newValue === undefined) {
        query.delete(key)
      } else {
        query.set(key, serialize(newValue))
      }
      const [asPath] = router.asPath.split(/\?|#/, 1)
      const search = query.toString()
      const hash = window.location.hash
      updateUrl?.call(
        router,
        {
          pathname: router.pathname,
          hash,
          search
        },
        {
          pathname: asPath,
          hash,
          search
        }
      )
    },
    [key, updateUrl]
  )
  return [value ?? defaultValue ?? null, update]
}
