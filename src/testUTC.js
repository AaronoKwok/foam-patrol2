//ampm
/* function ampm(nextTideTime, zone) {
        const iso = new Date(nextTideTime)
        return iso.toLocaleTimeString('en-US', {timeZone: zone})
    
}
console.log(ampm("2022-09-16T03:18:00+00:00", "PST"))
console.log(ampm("2022-09-16T03:18:00+00:00", "HST")) */

function localStartString() {
    const date = new Date()
    const localTime = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours() - 12, date.getUTCMinutes(), date.getUTCSeconds())
    const timeString = new Date(localTime).toLocaleString('en-UK', {timeZone: 'PST'})
    return timeString
}

function tideStart(timeString) {
    const splitArr = timeString.split(" ")
    console.log(splitArr)
    const date = splitArr[0].slice(0, -1)
    const dateArr = date.split("/")
    function dateMonth() {
        if (dateArr[1][0] === "0") {
            return dateArr[1][1]
        }
    }
    console.log(dateArr)
    const callDate = `${dateArr[2]}-${dateMonth()}-${dateArr[0]}`

    const time = splitArr[1].slice(0, -3)

    return `${callDate} ${time}`

}

console.log(tideStart(localStartString()))




