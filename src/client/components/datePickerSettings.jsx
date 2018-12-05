const WEEKDAYS_LONG = {
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
const WEEKDAYS_SHORT = {
  en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
}
const MONTHS = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
}
const FIRST_DAY = {
  en: 1
}

function formatDay(d, locale = 'gb') {
  return `${WEEKDAYS_LONG[locale][d.getDay()]}, ${d.getDate()} ${
    MONTHS[locale][d.getMonth()]
  } ${d.getFullYear()}`
}

function formatMonthTitle(d, locale = 'gb') {
  return `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`
}

function formatWeekdayShort(i, locale) {
  return WEEKDAYS_SHORT[locale][i]
}

function formatWeekdayLong(i, locale) {
  return WEEKDAYS_SHORT[locale][i]
}

function getFirstDayOfWeek(locale) {
  return FIRST_DAY[locale]
}

const localeUtils = {
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek
}

export default localeUtils
