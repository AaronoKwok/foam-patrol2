//ampm
/* function ampm(nextTideTime, zone) {
        const iso = new Date(nextTideTime)
        return iso.toLocaleTimeString('en-US', {timeZone: zone})
    
}
console.log(ampm("2022-09-16T03:18:00+00:00", "PST"))
console.log(ampm("2022-09-16T03:18:00+00:00", "HST")) */

/* function localStartString() {
    const date = new Date()
    const localTime = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours() - 12, date.getUTCMinutes(), date.getUTCSeconds())
    const timeString = new Date(localTime).toLocaleString('en-UK', {timeZone: loc.timezone})
    return timeString
}

function tideStart(timeString) {
    const splitArr = timeString.split(" ")
    const date = splitArr[0].slice(0, -1)
    const dateArr = date.split("/")
    function dateMonth() {
        if (dateArr[1][0] === "0") {
            return dateArr[1][1]
        }
    }
    const callDate = `${dateArr[2]}-${dateMonth()}-${dateArr[0]}`
    const time = splitArr[1].slice(0, -3)
    return `${callDate} ${time}`
} 

console.log(tideStart(localStartString()))

*/

/* const loading = false
function ampm(time, zone) { 
    if (time === loading) {
        return loading
    }  else {
        const long = new Date(time).toLocaleTimeString('en-US', {timeZone: zone})
        const longArr = long.split(" ")
        const timeStr = longArr[0].slice(0, -3)
        const aOrp = longArr[1].toLowerCase()
        return `${timeStr}${aOrp}`
    }
}

console.log(ampm("2022-09-16T21:57:00+00:00", 'PST')) */


/* const sep16 = [
    {
        "ident": 0,
        "height": -0.012889004234729298,
        "time": "2022-09-15T23:36:00+00:00",
        "type": "low"
    },
    {
        "ident": 1,
        "height": 0.02919644967791164,
        "time": "2022-09-16T03:08:00+00:00",
        "type": "high"
    },
    {
        "ident": 2,
        "height": -0.20466773820521764,
        "time": "2022-09-16T10:11:00+00:00",
        "type": "low"
    },
    {
        "ident": 3,
        "height": 0.19723764518882736,
        "time": "2022-09-16T18:19:00+00:00",
        "type": "high"
    },
    {
        "ident": 4,
        "height": -0.18573532102449133,
        "time": "2022-09-17T10:42:00+00:00",
        "type": "low"
    },
    {
        "ident": 5,
        "height": 0.19966214491535736,
        "time": "2022-09-17T19:56:00+00:00",
        "type": "high"
    },
    {
        "ident": 6,
        "height": -0.16001538828232575,
        "time": "2022-09-18T11:33:00+00:00",
        "type": "low"
    },
    {
        "ident": 7,
        "height": 0.2207132453437618,
        "time": "2022-09-18T21:21:00+00:00",
        "type": "high"
    },
    {
        "ident": 8,
        "height": -0.1273202686113023,
        "time": "2022-09-19T07:04:00+00:00",
        "type": "low"
    },
    {
        "ident": 9,
        "height": -0.11759667959979221,
        "time": "2022-09-19T09:58:00+00:00",
        "type": "high"
    },
    {
        "ident": 10,
        "height": -0.13859591075125458,
        "time": "2022-09-19T13:27:00+00:00",
        "type": "low"
    },
    {
        "ident": 11,
        "height": 0.24710261005006814,
        "time": "2022-09-19T22:18:00+00:00",
        "type": "high"
    },
    {
        "ident": 12,
        "height": -0.15138752356025148,
        "time": "2022-09-20T06:25:00+00:00",
        "type": "low"
    },
    {
        "ident": 13,
        "height": -0.0806869809420679,
        "time": "2022-09-20T11:05:00+00:00",
        "type": "high"
    },
    {
        "ident": 14,
        "height": -0.14088280117903948,
        "time": "2022-09-20T15:10:00+00:00",
        "type": "low"
    },
    {
        "ident": 15,
        "height": 0.26925659217350306,
        "time": "2022-09-20T23:00:00+00:00",
        "type": "high"
    },
    {
        "ident": 16,
        "height": -0.17319191602660275,
        "time": "2022-09-21T06:27:00+00:00",
        "type": "low"
    },
    {
        "ident": 17,
        "height": -0.03775607900948947,
        "time": "2022-09-21T11:38:00+00:00",
        "type": "high"
    },
    {
        "ident": 18,
        "height": -0.15698052310831634,
        "time": "2022-09-21T16:18:00+00:00",
        "type": "low"
    },
    {
        "ident": 19,
        "height": 0.2831572203997717,
        "time": "2022-09-21T23:34:00+00:00",
        "type": "high"
    },
    {
        "ident": 20,
        "height": -0.18859999586367993,
        "time": "2022-09-22T06:37:00+00:00",
        "type": "low"
    },
    {
        "ident": 21,
        "height": 0.008795949613874733,
        "time": "2022-09-22T12:04:00+00:00",
        "type": "high"
    },
    {
        "ident": 22,
        "height": -0.1750719011118187,
        "time": "2022-09-22T17:08:00+00:00",
        "type": "low"
    },
    {
        "ident": 23,
        "height": 0.2870740434760578,
        "time": "2022-09-23T00:04:00+00:00",
        "type": "high"
    },
    {
        "ident": 24,
        "height": -0.19860370149244166,
        "time": "2022-09-23T06:50:00+00:00",
        "type": "low"
    },
    {
        "ident": 25,
        "height": 0.058758487956965616,
        "time": "2022-09-23T12:28:00+00:00",
        "type": "high"
    },
    {
        "ident": 26,
        "height": -0.1897457897764996,
        "time": "2022-09-23T17:51:00+00:00",
        "type": "low"
    },
    {
        "ident": 27,
        "height": 0.2804582097417078,
        "time": "2022-09-24T00:31:00+00:00",
        "type": "high"
    },
    {
        "ident": 28,
        "height": -0.2062541325178678,
        "time": "2022-09-24T07:03:00+00:00",
        "type": "low"
    },
    {
        "ident": 29,
        "height": 0.11169231319138048,
        "time": "2022-09-24T12:52:00+00:00",
        "type": "high"
    },
    {
        "ident": 30,
        "height": -0.19813584623747954,
        "time": "2022-09-24T18:30:00+00:00",
        "type": "low"
    },
    {
        "ident": 31,
        "height": 0.2634742199924862,
        "time": "2022-09-25T00:56:00+00:00",
        "type": "high"
    },
    {
        "ident": 32,
        "height": -0.2149439465976898,
        "time": "2022-09-25T07:19:00+00:00",
        "type": "low"
    },
    {
        "ident": 33,
        "height": 0.16561244248849763,
        "time": "2022-09-25T13:18:00+00:00",
        "type": "high"
    },
    {
        "ident": 34,
        "height": -0.19807380257246407,
        "time": "2022-09-25T19:09:00+00:00",
        "type": "low"
    }
]

const dates = sep16.map(tide => {
    return `${new Date(tide.time).toLocaleString('en-US', {timeZone: "HST"})}, height: ${((tide.height + 0.251) * 3.281).toFixed(1)} ft, ${tide.type}`
})

console.log(dates)
 */

console.log(Date.now())