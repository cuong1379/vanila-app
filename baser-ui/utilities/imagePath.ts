import getConfig from 'next/config'

const configs = () => getConfig?.()?.publicRuntimeConfig || {}

export const commonLib = (imgPath: string, c = configs()) => `${c.cdnBasePath}${c.cdnCommonLib}${c.cdnImage}${imgPath}`

export const commonShared = (imgPath: string, c = configs()) =>
  `${c.cdnBasePath}${c.cdnCommonShared}${c.cdnImage}${imgPath}`

export const defaultTemplate = (imgPath: string, c = configs()) =>
  `${c.cdnBasePath}${c.cdnDefaultTemplate}${c.cdnImage}${imgPath}`

export const p10nTemplate = (imgPath: string, c = configs()) =>
  `${c.cdnBasePath}${c.cdnP10nTemplate}${c.cdnImage}${imgPath}`

export const shopHelp = (imgPath: string, c = configs()) => `${c.cdnBasePath}${c.cdnShopHelp}${c.cdnImage}${imgPath}`

export const iconPath = (iconName: any, c = configs()) =>
  `${c.cdnBasePath}${c.cdnCommonLib}fluent-ui/o/${iconName}.svg`

export const flagPath = (countryCode: string, c = configs()) =>
  `${c.cdnBasePath}${c.cdnCommonLib}flag-icon/o/4x3/${countryCode}.svg`
