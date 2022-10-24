import { useRouter } from 'next/router'

export function useRedirect() {
  const router = useRouter()

  const redirect = (pathname: string) => {
    const routerQuery = { ...router.query }
    router.push({
      pathname: pathname,
      query: { ...routerQuery }
    })
  }

  return redirect
}
