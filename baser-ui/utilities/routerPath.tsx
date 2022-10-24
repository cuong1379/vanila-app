export const PUBLIC_ROUTER = ['/login', '/reset-password', '/forgot-password']
export const NEURAL_ROUTER = [
  '/signup',
  '/signup-thankyou',
  '/privacy',
  '/terms',
  '/sellers/signup',
  '/sellers/signup-1',
  '/sellers/signup-2',
  '/scheduling-meetings'
]
export const publicRouters = (path: string) => PUBLIC_ROUTER.some((p) => path.startsWith(p))
export const neuralRouters = (path: string) => NEURAL_ROUTER.some((p) => path.startsWith(p))
export const privateRouters = (path: string) => !publicRouters(path) && !neuralRouters(path)
export const profileHash = (profile: any = {}) => [profile.id, ...( profile.roles || [])].sort().join('-')

export type RouterType = 'public' | 'private' | 'neural'
export const getRouterType = (path: string): RouterType =>
  publicRouters(path) ? 'public' : privateRouters(path) ? 'private' : 'neural'

export const removeParam = (url: string, ...key: string[]) => {
  let result = url.split('?')[0]
  const queryString = url.indexOf('?') !== -1 ? url.split('?')[1] : ''
  if (queryString !== '') {
    const params_arr = queryString.split('&')
    for (let i = params_arr.length - 1; i >= 0; i -= 1) {
      const param = params_arr[i].split('=')[0]
      if (key.includes(param)) {
        params_arr.splice(i, 1)
      }
    }
    if (params_arr.length) {
      result = result + '?' + params_arr.join('&')
    }
  }
  return result
}
