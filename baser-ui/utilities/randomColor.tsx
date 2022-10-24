type ColorSet =
  | 'red'
  | 'purple'
  | 'indigo'
  | 'light-blue'
  | 'teal'
  | 'light-green'
  | 'amber'
  | 'brown'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'yellow'
  | 'deep-orange'
  | 'lime'
  | 'orange'
  | 'blue-gray'
  | null
  | undefined

const colorSet: ColorSet[] = [
  'red',
  'purple',
  'indigo',
  'light-blue',
  'teal',
  'light-green',
  'amber',
  'brown',
  'blue',
  'cyan',
  'green',
  'yellow',
  'deep-orange',
  'lime',
  'orange',
  'blue-gray'
]

type NumberSet = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700
const numberSet: NumberSet[] = [50, 100, 200, 300, 400, 500, 600, 700]

export const randomColor = (color?: ColorSet, number?: NumberSet) => {
  number = number || numberSet[Math.floor(Math.random() * numberSet.length)]
  color = color || colorSet[Math.floor(Math.random() * colorSet.length)]
  return `var(--${color}-${number})`
}

export const nameColor = (name: string, number: NumberSet = 500) => {
  let sum = 0
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i) * (i + 1)
  }
  const color = colorSet[sum % colorSet.length]
  return `var(--${color}-${number})`
}
