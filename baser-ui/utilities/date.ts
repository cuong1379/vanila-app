export const getDateFromNow = (datesFromNow = 0) => {
  const newDate = new Date()
  newDate.setDate(new Date().getDate() - datesFromNow)

  return newDate
}
