const inValid = [NaN, undefined, '', null]
export default function useZero(value: any) {
  return !inValid.includes(value)
}
