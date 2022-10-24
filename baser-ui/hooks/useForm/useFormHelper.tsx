export const isRequire = (error?: string) => (value: any, name: string) =>
  [null, undefined, NaN].includes(value) || value?.length === 0 ? error || `${name} is required` : ''

export const isEmail = () => (value: string, name: string) => {
  return isRegex(/^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+$/, `Invalid ${name} format, must be abc@domain.xyz`)(value, name)
}

export const isEmailCustom = () => (value: string, res: string) => {
  return isRegex(/^[0-9a-zA-Z._-]+@([\w-]+\.)+[\w-]{1,50}$/g, `${res}`)(value, res)
}

export const isPhoneNumber = () => (value: string, name: string) => {
  return isRegex(/^[\d\s()+-]+$/)(value, name)
}

// export const isRegex = (regex: any, error?: string) => (value: any, name: string) =>
//   regex.test(value) ? '' : error || `${name} is wrong format`

export const isRegex = (regex: any, error?: string) => (value: any, name: string) =>
  regex.test(value) ? '' : error || `${name} is wrong format`
// regex.test(value) ? '' : error || `Invalid ${name} format, must be abc@domain.xyz`

export const isNumber = (error?: string) => (value: any, name: string) =>
  !isNaN(value) ? '' : error || `${name} must be number`

export const isString = (error?: string) => (value: any, name: string) =>
  typeof value === 'string' ? '' : error || `${name} must be string`

export const isArray = (error?: string) => (value: any, name: string) =>
  Array.isArray(value) ? '' : error || `${name} must be array`

export const isObject = (error?: string) => (value: any, name: string) =>
  typeof value === 'object' && value !== null ? '' : error || `${name} must be object`

export const isEqual = (val: any, valName: string, error?: string) => (value: any, name: string) =>
  value === val ? '' : error || `${name} must be equal to ${valName}`

export const isEqualPassword = (val: any, valName: string, error?: string) => (value: any, name: string) =>
  value === val ? '' : error || `${valName} and ${name} do not match`

export const isDiff = (val: any, valName: string, error?: string) => (value: any, name: string) =>
  value === val ? error || `${name} must be different to ${valName}` : ''

export const isMin = (val: number, equal = false, error?: string) => (value: number, name: string) =>
  (equal ? value >= val : value > val) ? '' : error || `${name} must greater ${equal ? 'or equal' : ''} than ${val}`

export const isMax = (val: number, equal = false, error?: string) => (value: number, name: string) =>
  (equal ? value <= val : value < val) ? '' : error || `${name} must less ${equal ? 'or equal' : ''} than ${val}`

export const isMinLen = (val: number, equal = false, error?: string) => (value: string, name: string) =>
  (equal ? value.length >= val : value.length > val)
    ? ''
    : error || `${name} length must greater ${equal ? 'or equal' : ''} than ${val}`

export const isMaxLen = (val: number, equal = false, error?: string) => (value: string, name: string) =>
  (equal ? value.length <= val : value.length < val)
    ? ''
    : error || `${name} length must less ${equal ? 'or equal' : ''} than ${val}`
export const isLength = (val: number, error?: string) => (value: string, name: string) =>
  value.length == val ? '' : error || `${name} needs to have ${val} number`

export const passwordValidators = [
  /* isRegex(/[a-z]/, 'Password must contain lowercase'),
  isRegex(/[A-Z]/, 'Password must contain uppercase'),
  isRegex(/[0-9]/, 'Password must contain numeric'),
  isRegex(/[!@#$%^&*]/, 'Password must contain special character'), */
  isMinLen(8, true, 'Password must be eight characters or longer')
]

export const phoneValidators = [
  isPhoneNumber(),
  isMinLen(8, true, `Phone number needs to have at least 8 numbers (exclude country code)`)
]
export const phoneValidatorsSelless = [
  isPhoneNumber(),
  isLength(
    10,
    `Phone number needs to have 10 number (exclude country code)
`
  )
]
