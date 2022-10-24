/**
 * decimal: number of decimal to round
 */
export const round = (num: number | string | null | undefined, decimal: number) => {
  if (!num) {
    return num
  }
  if (typeof num == 'number' || !isNaN(+num)) {
    try {
      const pad = Math.pow(10, decimal)
      return Math.round(+num * pad) / pad
    } catch (error) {
      return num
    }
  }
  return 0
}

export const random = (min = 0, max = 100) => {
  return Math.floor(min + Math.random() * (max - min))
}

export const formatNumber = (number: number | any) => {
  if (isNaN(number)) {
    return number
  }
  return (+number).toLocaleString()
}

export const sumArray = (arr: any[]): number => arr.reduce((a, b) => (isNaN(b) ? a : a + b), 0)
