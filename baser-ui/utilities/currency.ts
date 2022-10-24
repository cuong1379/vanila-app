const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export const formatUSD = (money: number | string | any) => {
  if (!money && money !== 0) return money
  return usdFormatter.format(+money)
}

export const formatUSDNoC = (money: number | string | any, decimals = 2) => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: decimals
  })

  if (!money) return money
  return formatter.format(+money)
}
