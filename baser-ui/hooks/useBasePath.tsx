import getConfig from 'next/config'
export default function useBasePath(path = '') {
  const basePath = getConfig().publicRuntimeConfig.basePath || ''
  return `${basePath}${path}`
}
