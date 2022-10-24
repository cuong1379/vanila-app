import getConfig from 'next/config'

const configs = () => getConfig?.()?.publicRuntimeConfig || {}

export const commonShared = (iconPath: string, tail = 'svg', c = configs()) =>
  `${c.cdnBasePath}${c.cdnCommonShared}${c.cdnIcon}${iconPath}.${tail}`

export const defaultTemplate = (iconPath: string, c = configs()) =>
  `${c.cdnBasePath}${c.cdnDefaultTemplate}${c.cdnIcon}${iconPath}.svg`

export const p10nTemplate = (iconPath: string, c = configs()) =>
  `${c.cdnBasePath}${c.cdnP10nTemplate}${c.cdnIcon}${iconPath}.svg`

export const shopHelp = (iconPath: string, c = configs()) =>
  `${c.cdnBasePath}${c.cdnShopHelp}${c.cdnIcon}${iconPath}.svg`
