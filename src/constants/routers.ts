export const PUBLIC_ROUTE = ['/public', '/about']
export const PRIVATE_ROUTE = ['/me']
export const NEUTRAL_ROUTE = ['/auth/signin']

export const publicRouters = (path: string) => PUBLIC_ROUTE.some((p) => path.startsWith(p))
export const neuralRouters = (path: string) => NEUTRAL_ROUTE.some((p) => path.startsWith(p))
export const privateRouters = (path: string) => !publicRouters(path) && !neuralRouters(path)
