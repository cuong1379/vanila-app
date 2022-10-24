import { format } from 'date-fns-tz'

export const displayInTimeZone = (time: string | Date, timeFormat = 'MM-dd-yyyy HH:mm', timeZone = 'US/Alaska') => {
  return format(new Date(time), timeFormat, { timeZone })
}
