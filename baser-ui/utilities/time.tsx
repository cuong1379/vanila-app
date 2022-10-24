import { differenceInDays, format } from 'date-fns'
import { format as formatTz, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'

/** deprecated */
export const displayInTimeZone = (
  time: Date | number | string | null | undefined,
  { timeFormat = 'MM-dd-yyyy HH:mm (OOO)', timeZone = 'US/Alaska' }
): string => {
  const standardizedDate = standardizeDate(time)

  return standardizedDate ? formatTz(utcToZonedTime(standardizedDate, timeZone), timeFormat) : ''
}
/** deprecated */
export const displayDateTime = (time: string | Date, timeFormat = 'MM-dd-yyyy HH:mm') => {
  if (!time) {
    return
  }

  return format(new Date(time), timeFormat)
}

/*
 * Get the number of full day periods between two dates. Fractional days are truncated towards zero.
 * Documentation: https://date-fns.org/v2.21.1/docs/differenceInDays
 */
export const getDifferentInDays = (
  date1: Date | string | number,
  date2: Date | string | number
): number | undefined => {
  if (!date1 || !date2) {
    return
  }

  return differenceInDays(new Date(date1), new Date(date2))
}

export const getDifferentInDaysWithNow = (date?: Date | string | number): number | undefined => {
  if (!date) {
    return
  }
  return getDifferentInDays(timeCN(new Date()).toServer(), new Date(date))
}

export type DefaultDate = Date | number | string | null | undefined

export const TimeTemplate = {
  date: 'MM-dd-yyyy',
  dateTime: 'MM-dd-yyyy HH:mm',
  timeZone: 'MM-dd-yyyy HH:mm (OOO)'
}

export const TimeZone = {
  US: 'US/Alaska',
  CN: 'Asia/Shanghai',
  VN: 'Asia/Ho_Chi_Minh',
  UTC: 'Etc/UCT'
}

export const timeCN = (date: DefaultDate) => new TimeConverter(date, 'Asia/Shanghai')

export const timeUS = (date: DefaultDate) => new TimeConverter(date, 'US/Alaska')
export const formatTimezone = (
  date: DefaultDate,
  tZone: 'US/Alaska' | 'Asia/Shanghai' | 'Asia/Ho_Chi_Minh' | 'Etc/UCT' = 'US/Alaska'
) => new TimeConverter(date, tZone)

export class TimeConverter {
  date?: Date | number
  timeZone: string

  constructor(
    date: DefaultDate,
    timeZone: 'US/Alaska' | 'Asia/Shanghai' | 'Asia/Ho_Chi_Minh' | 'Etc/UCT' = 'US/Alaska'
  ) {
    this.timeZone = timeZone
    const _date = standardizeDate(date)
    if (!_date) {
      return null as any
    } else {
      this.date = new Date(_date)
    }
  }

  fromServer() {
    if (this.date) {
      this.date = utcToZonedTime(this.date, this.timeZone)
    }
    return this
  }

  toServer() {
    if (this.date) {
      const date: Date = zonedTimeToUtc(this.date, this.timeZone)
      return date ? date.toISOString() : ''
    } else {
      return ''
    }
  }

  transform(fn: any) {
    this.date = fn?.(this.date)
    return this
  }

  getDate() {
    return this.date
  }

  /* Return string in template format */
  format(template = TimeTemplate.dateTime): string {
    return this.date ? formatTz(this.date, template) : ''
  }
}

/*
 * Parse date to UTC format
 * @params date: Accept input as Date, number or string
 */
export const standardizeDate = (date: Date | string | number | null | undefined) => {
  if (!date) {
    return date
  }

  if (date instanceof Date) {
    return date
  }

  if (typeof date === 'number' || !isNaN(+date)) {
    return date
  }

  return date.endsWith('Z') ? date : `${date}Z`
}
