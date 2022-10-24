export type breakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const breakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

const breakPointsOrder: breakPointType[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

const getBreakPoint = (bp: breakPointType, offset: number): number => {
  const currentIndex = breakPointsOrder.indexOf(bp)
  let nextIndex = currentIndex + offset
  nextIndex = nextIndex < 0 ? 0 : nextIndex >= breakPointsOrder.length ? breakPointsOrder.length - 1 : nextIndex
  return breakPoints[breakPointsOrder[nextIndex]]
}

export const up = (bp: breakPointType) => `(min-width: ${breakPoints[bp]}px)`

export const down = (bp: breakPointType) => `(max-width: ${breakPoints[bp] - 0.2}px)`

export const only = (bp: breakPointType) =>
  `(min-width: ${breakPoints[bp]}px) and (max-width: ${getBreakPoint(bp, 1) - 0.2}px)`

export const between = (bp: breakPointType, bp1: breakPointType) =>
  `(min-width: ${breakPoints[bp]}px) and (max-width: ${breakPoints[bp1] - 0.2}px)`
