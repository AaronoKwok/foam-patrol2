const utcYear = (new Date()).getUTCFullYear()
const utcMonth = (new Date()).getUTCMonth() + 1
const utcDay = (new Date()).getUTCDate()
const utcHour = (new Date()).getUTCHours()
console.log(utcHour, 'hour')
console.log(utcMonth, 'month')
const utcDate = `${utcYear}-${utcMonth}-${utcDay} ${utcHour}:00`
console.log(utcDate, "utcDate")

if (utcMonth < 10) {
    console.log('0' + utcMonth)
}