/* const test = new Date()
const test1 = test.getTimezoneOffset()
console.log(test1, "timezone offset to my Loc")
const test2 = test1 * 60 * 1000
console.log(test2, "ms")

const utcTime = Date.parse("2022-08-25T13:51:00+00:00")
console.log(utcTime)

 */

 /* const utc = new Date("2022-09-03T05:38:00+00:00") //returned utc time
 console.log(utc)
 const localTime = utc.toString()
 console.log(localTime)
 //console.log(localTime.getHours()) //does not work with day of week in front
 console.log(localTime.split(" "))
 const arr = localTime.split(" ")
 const newArr = arr.slice(1, 5)
 console.log(newArr)
 const joinArr = newArr.join(" ")
 console.log(joinArr)

 const newStr = new Date(joinArr)
 console.log(newStr.getHours())
 console.log(newStr.getMinutes())

 const hours = newStr.getHours()
 const minutes = newStr.getMinutes()

 function ampm(hours, minutes) {
     if (hours > 12) {
        return `${hours - 12}:${minutes}pm` 
     } else {
         return `${hours}:${minutes}am`
     }
 }
 console.log(ampm(hours, minutes))

 */

/* const utcYear = (new Date()).getUTCFullYear()
    const utcMonth = (new Date()).getUTCMonth() + 1
    const utcDay = (new Date()).getUTCDate()
    const utcHour = (new Date()).getUTCHours()

    function addZeroHour() {
        return utcHour < 10 ? 0 : ""
    }
    function addZeroDay() {
        return utcDay < 10 ? 0 : ""
    }
    function addZeroMonth() {
        return utcMonth < 10 ? 0 : ""
    }

    //const utcDate = `${utcYear}-${addZeroMonth()}${utcMonth}-${addZeroDay()}${utcDay} ${addZeroHour()}${utcHour}:00`  // format is 0digit:00 if utc hour is less than 10
    const utcDate = `${utcYear}-${addZeroMonth()}${utcMonth}-${addZeroDay()}${utcDay} ${addZeroHour()}${utcHour}:00`  // format is 0digit:00 if utc hour is less than 10

    console.log(utcDate, "utcDate")
    console.log(utcYear, "utcYear")
    console.log(addZeroDay())
    console.log(addZeroHour())
    console.log(addZeroHour())

    //const start = utcDate //MAYBE start format is bad
    const start = `2022-9-06 ${utcHour}:00`
    console.log(start, "start")
    const histEnd = `2022-9-07 ${utcHour}:00` //time format is 00:00, need 0 if hour is less than 10
    console.log(histEnd, "end") */

    /* const msl = 0.862;
    const height = -1.106749669359218
    console.log((msl + height) * 3.321)
    console.log(((msl + height) * 3.281).toString().slice(0, 3))
    console.log(((msl + height) * 3.281).toFixed(1))
    console.log(3.45432.toFixed(1))
    console.log(3.45432.toString().slice(0, 3))
     */

    /* For Tide Start and End
     
    const utcYear = new Date().getUTCFullYear()
    console.log(utcYear)
    const utcDate = new Date().getUTCDate()
    console.log(utcDate)
    const utcMonth = new Date().getUTCMonth()
    console.log(utcMonth + 1)
    const utcHour = new Date().getUTCHours()
    console.log(utcHour)

    function addZero(num) {
        return num < 10 ? 0 : ""
    }

    const tideStart = `${utcYear}-${utcMonth + 1}-${addZero(utcDate)}${utcDate} 00:00`
    console.log(tideStart)

   */

//Reduce method

/* const arr = [1, 2, 3, 4]
const add = arr.reduce((a, b) => {
    return a + b
})
//console.log(add)

const arrr = [
    {"num": 13, "id": 0}, //1.3b
    {"num": 20, "id": 1}, //2b
    {"num": 21, "id": 2}, //3b
    {"num": 50, "id": 3}, //5b
    {"num": 90, "id": 4}, //9b
    {"num": 140, "id": 5} //14b
]
const time = 90; //1.3b 
function findTimeObj(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, (arr[i].num - time >= 0))
        if (arr[i].num - time >= 0) {
            return arr[i] 
        }
    }
    return `${time} exceeds provided times`
}
console.log(findTimeObj(arrr))


const old = Date.now(); 
const now = Date.now() + 345671; 

console.log(old < now)
console.log(old, now) */

/* const offset = new Date().getTimezoneOffset()
const timezoneOffset = (offset / 60) 
const local = new Date() 
console.log(local, "utc time")
const utc = new Date(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), local.getHours(), local.getMinutes(), local.getSeconds()))
console.log(utc, "local time")
console.log(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), local.getHours(), local.getMinutes(), local.getSeconds()), "local ms")
console.log(Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate(), local.getUTCHours(), local.getUTCMinutes(), local.getUTCSeconds()), "utc ms")
//console.log(Date.now(), "utc ms, no change") //same as utc ms but cant change
//console.log(utc.getTime(), "local ms, no change") //same as local ms above but can't change values

const test = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate(), local.getUTCHours() - timezoneOffset, local.getUTCMinutes(), local.getUTCSeconds())
console.log(test)
//console.log(new Date(test).toString())
console.log(new Date(test).toUTCString().split(" ")) */

/* function tideStart() {
    const offset = new Date().getTimezoneOffset()
    const date = new Date()
    const localTime = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours() - offset / 60, date.getUTCMinutes(), date.getUTCSeconds())
    const timeString = new Date(localTime).toUTCString()
    const timeArr = timeString.split(" ")
    const hrMinArr = timeArr[4].split(":")
    function determineMonth(month) {
        if (month === "Jan") {
            return 1
        } else if (month === "Feb") {
            return 2
        } else if (month === "Mar") {
            return 3
        } else if (month === "Apr") {
            return 4
        } else if (month === "May") {
            return 5
        } else if (month === "Jun") {
            return 6
        } else if (month === "Jul") {
            return 7
        } else if (month === "Aug") {
            return 8
        } else if (month === "Sep") {
            return 9
        } else if (month === "Oct") {
            return 10
        } else if (month === "Nov") {
            return 11
        } else {
            return 12
        }
    }   

    return `${timeArr[3]}-${determineMonth(timeArr[2])}-${timeArr[1]} ${hrMinArr[0]}:${hrMinArr[1]}`

}
console.log(tideStart()) */

/* const cloudCover = 20;
const precipitation = 8.9; 
const visibility = 7.14; 
const firstLight = new Date("2022-09-16T13:26:14+00:00").getTime(); 
const lastLight = new Date("2022-09-17T02:42:00+00:00").getTime(); 

function findSky(clouds, rain, visible, light, dark) { 
    if (clouds === loading) {
        return loading
    }
    const currentMs = Date.now()
    if (currentMs > light && currentMs < dark) {
        if (clouds < 30) {
            if (rain > 0 && rain < 0.5) {
                return "dayBriefShower"
            } else if (visible < 1) {
                return "fogHaze"
            } else if (visible >= 1 && visible < 2) {
                return "mist"
            } else if  (visible >= 2 && visible < 5) {
                return "fogHaze"
            } else {
                return "dayClear"
            }
        } else if (clouds >= 30 && clouds < 70) {
            if (rain > 0 && rain < 0.5) {
                return "dayBriefShower"
            } else if (rain >= 0.5 && rain < 4) {
                return "dayShowers"
            } else if (rain > 4 && rain < 8) {
                return "moderateRain"
            } else if (rain >= 8) {
                return "heavyRain" 
            } else {
                return "mist"
            }
        } else if (clouds >= 70 && clouds < 95) {
            if (rain > 0 && rain < 0.5) {
                return "dayLightRain"
            } else if (rain >= 0.5 && rain < 4) {
                return "dayShowers"
            } else if (rain > 4 && rain < 8) {
                return "moderateRain"
            } else if (rain >= 8) {
                return "heavyRain" 
            } else {
                return "dayMostlyCloudy"
            }
        } else if (clouds >= 95) {
            if (rain > 0 && rain < 0.5) {
                return "dayLightRain"
            } else if (rain >= 0.5 && rain < 4) {
                return "dayShowers"
            } else if (rain > 4 && rain < 8) {
                return "moderateRain"
            } else if (rain >= 8) {
                return "heavyRain" 
            } else {
                return "dayOvercastCloudy"
            }
        }
    } else {
        if (clouds < 30) {
            if (rain > 0 && rain < 0.5) {
                return "nightBriefShower"
            } else if (visible < 1) {
                return "fogHaze"
            } else if (visible >= 1 && visible < 2) {
                return "mist"
            } else if  (visible >= 2 && visible < 5) {
                return "fogHaze"
            } else {
                return "nightClear"
            }
        } else if (clouds >= 30 && clouds < 70) {
            if (rain > 0 && rain < 0.5) {
                return "nightBriefShower"
            } else if (rain >= 0.5 && rain < 4) {
                return "nightLightShower"
            } else if (rain > 4 && rain < 8) {
                return "moderateRain"
            } else if (rain >= 8) {
                return "heavyRain" 
            } else {
                return "mist"
            }
        } else if (clouds >= 70 && clouds < 95) {
            if (rain > 0 && rain < 0.5) {
                return "nightLightRain"
            } else if (rain >= 0.5 && rain < 4) {
                return "nightLightShower"
            } else if (rain > 4 && rain < 8) {
                return "moderateRain"
            } else if (rain >= 8) {
                return "heavyRain" 
            } else {
                return "nightMostlyCloudy"
            }
        } else if (clouds >= 95) {
            if (rain > 0 && rain < 0.5) {
                return "nightLightRain"
            } else if (rain >= 0.5 && rain < 4) {
                return "nightLightShower"
            } else if (rain > 4 && rain < 8) {
                return "moderateRain"
            } else if (rain >= 8) {
                return "heavyRain" 
            } else {
                return "nightOvercastCloudy"
            }
        }
    }
    
    
    clouds: 
        clear 30%
        partly cloudy 70%
        cloudy 95%
        overcast 100%
    rain: 
        light <0.5mm
        moderate <4mm
        heavy <8mm
        very heavy >8mm
    visibility: 
        fog <1km
        mist 1-2km
        haze 2-5km
        clear >5km
   
    return "clearDAY"
}
console.log(findSky(cloudCover, precipitation, visibility, firstLight, lastLight))
 */

/* console.log(Date.now())
console.log(Date.parse(new Date().toLocaleString("en-US", {timeZone: "HST"})))
console.log(new Date("2022-09-29T16:00:59+00:00").getTime())
console.log((new Date("2022-09-30T04:44:37+00:00").toLocaleString("en-US", {timeZone: "HST"})))

console.log((Date.now() - Date.parse(new Date().toLocaleString("en-US", {timeZone: "HST"}))) / 1000 / 60 / 60)

const ast = [
    {
        "ident": 0,
        "astronomicalDawn": "2022-09-29T15:09:26+00:00",
        "astronomicalDusk": "2022-09-30T05:36:11+00:00",
        "civilDawn": "2022-09-29T16:00:59+00:00",
        "civilDusk": "2022-09-30T04:44:37+00:00", 
        "moonFraction": 0.09891435409492172,
        "moonPhase": {
            "closest": {
                "text": "New moon",
                "time": "2022-09-25T22:49:00+00:00",
                "value": 0
            },
            "current": {
                "text": "Waxing crescent",
                "time": "2022-09-28T23:00:00+00:00",
                "value": 0.10183903177916515
            }
        },
        "moonrise": "2022-09-28T19:00:31+00:00",
        "moonset": "2022-09-28T05:51:19+00:00",
        "nauticalDawn": "2022-09-29T15:35:13+00:00",
        "nauticalDusk": "2022-09-30T05:10:23+00:00",
        "sunrise": "2022-09-29T16:23:10+00:00",
        "sunset": "2022-09-30T04:22:26+00:00",
        "time": "2022-09-28T23:00:00+00:00"
    },
    {
        "ident": 1,
        "astronomicalDawn": "2022-09-30T15:09:42+00:00",
        "astronomicalDusk": "2022-10-01T05:35:13+00:00",
        "civilDawn": "2022-09-30T16:01:14+00:00",
        "civilDusk": "2022-10-01T04:43:41+00:00",
        "moonFraction": 0.17673736008625468,
        "moonPhase": {
            "closest": {
                "text": "First quarter",
                "time": "2022-10-03T06:17:00+00:00",
                "value": 0.25
            },
            "current": {
                "text": "Waxing crescent",
                "time": "2022-09-29T23:00:00+00:00",
                "value": 0.13811074369228998
            }
        },
        "moonrise": "2022-09-29T20:01:24+00:00",
        "moonset": "2022-09-29T06:31:13+00:00",
        "nauticalDawn": "2022-09-30T15:35:29+00:00",
        "nauticalDusk": "2022-10-01T05:09:26+00:00",
        "sunrise": "2022-09-30T16:23:26+00:00",
        "sunset": "2022-10-01T04:21:29+00:00",
        "time": "2022-09-29T23:00:00+00:00"
    },
    {
        "ident": 2,
        "astronomicalDawn": "2022-10-01T15:09:58+00:00",
        "astronomicalDusk": "2022-10-02T05:34:17+00:00",
        "civilDawn": "2022-10-01T16:01:30+00:00",
        "civilDusk": "2022-10-02T04:42:45+00:00",
        "moonFraction": 0.2731123001352468,
        "moonPhase": {
            "closest": {
                "text": "First quarter",
                "time": "2022-10-03T04:07:00+00:00",
                "value": 0.25
            },
            "current": {
                "text": "Waxing crescent",
                "time": "2022-09-30T23:00:00+00:00",
                "value": 0.1750384196119955
            }
        },
        "moonrise": "2022-09-30T21:04:56+00:00",
        "moonset": "2022-09-30T07:16:00+00:00",
        "nauticalDawn": "2022-10-01T15:35:45+00:00",
        "nauticalDusk": "2022-10-02T05:08:30+00:00",
        "sunrise": "2022-10-01T16:23:42+00:00",
        "sunset": "2022-10-02T04:20:33+00:00",
        "time": "2022-09-30T23:00:00+00:00"
    },
    {
        "ident": 3,
        "astronomicalDawn": "2022-10-02T15:10:15+00:00",
        "astronomicalDusk": "2022-10-03T05:33:21+00:00",
        "civilDawn": "2022-10-02T16:01:46+00:00",
        "civilDusk": "2022-10-03T04:41:49+00:00",
        "moonFraction": 0.38304297230320794,
        "moonPhase": {
            "closest": {
                "text": "First quarter",
                "time": "2022-10-03T01:37:00+00:00",
                "value": 0.25
            },
            "current": {
                "text": "Waxing crescent",
                "time": "2022-10-01T23:00:00+00:00",
                "value": 0.2124232813635203
            }
        },
        "moonrise": "2022-10-01T22:09:39+00:00",
        "moonset": "2022-10-01T08:06:51+00:00",
        "nauticalDawn": "2022-10-02T15:36:01+00:00",
        "nauticalDusk": "2022-10-03T05:07:35+00:00",
        "sunrise": "2022-10-02T16:23:59+00:00",
        "sunset": "2022-10-03T04:19:37+00:00",
        "time": "2022-10-01T23:00:00+00:00"
    },
    {
        "ident": 4,
        "astronomicalDawn": "2022-10-03T15:10:31+00:00",
        "astronomicalDusk": "2022-10-04T05:32:25+00:00",
        "civilDawn": "2022-10-03T16:02:03+00:00",
        "civilDusk": "2022-10-04T04:40:54+00:00",
        "moonFraction": 0.5001988660582154,
        "moonPhase": {
            "closest": {
                "text": "First quarter",
                "time": "2022-10-02T22:57:00+00:00",
                "value": 0.25
            },
            "current": {
                "text": "Waxing gibbous",
                "time": "2022-10-02T23:00:00+00:00",
                "value": 0.2500633010340253
            }
        },
        "moonrise": "2022-10-02T23:13:02+00:00",
        "moonset": "2022-10-02T09:04:07+00:00",
        "nauticalDawn": "2022-10-03T15:36:17+00:00",
        "nauticalDusk": "2022-10-04T05:06:40+00:00",
        "sunrise": "2022-10-03T16:24:15+00:00",
        "sunset": "2022-10-04T04:18:41+00:00",
        "time": "2022-10-02T23:00:00+00:00"
    },
    {
        "ident": 5,
        "astronomicalDawn": "2022-10-04T15:10:48+00:00",
        "astronomicalDusk": "2022-10-05T05:31:31+00:00",
        "civilDawn": "2022-10-04T16:02:19+00:00",
        "civilDusk": "2022-10-05T04:39:59+00:00",
        "moonFraction": 0.6175089393903711,
        "moonPhase": {
            "closest": {
                "text": "First quarter",
                "time": "2022-10-02T20:14:00+00:00",
                "value": 0.25
            },
            "current": {
                "text": "Waxing gibbous",
                "time": "2022-10-03T23:00:00+00:00",
                "value": 0.28775743519122565
            }
        },
        "moonrise": "2022-10-04T00:12:21+00:00",
        "moonset": "2022-10-03T10:06:42+00:00",
        "nauticalDawn": "2022-10-04T15:36:33+00:00",
        "nauticalDusk": "2022-10-05T05:05:45+00:00",
        "sunrise": "2022-10-04T16:24:32+00:00",
        "sunset": "2022-10-05T04:17:46+00:00",
        "time": "2022-10-03T23:00:00+00:00"
    },
    {
        "ident": 6,
        "astronomicalDawn": "2022-10-05T15:11:04+00:00",
        "astronomicalDusk": "2022-10-06T05:30:37+00:00",
        "civilDawn": "2022-10-05T16:02:36+00:00",
        "civilDusk": "2022-10-06T04:39:05+00:00",
        "moonFraction": 0.727868041523059,
        "moonPhase": {
            "closest": {
                "text": "First quarter",
                "time": "2022-10-02T17:37:00+00:00",
                "value": 0.25
            },
            "current": {
                "text": "Waxing gibbous",
                "time": "2022-10-04T23:00:00+00:00",
                "value": 0.3253119586474462
            }
        },
        "moonrise": "2022-10-04T00:12:21+00:00",
        "moonset": "2022-10-04T11:12:11+00:00",
        "nauticalDawn": "2022-10-05T15:36:50+00:00",
        "nauticalDusk": "2022-10-06T05:04:51+00:00",
        "sunrise": "2022-10-05T16:24:50+00:00",
        "sunset": "2022-10-06T04:16:51+00:00",
        "time": "2022-10-04T23:00:00+00:00"
    },
    {
        "ident": 7,
        "astronomicalDawn": "2022-10-06T15:11:21+00:00",
        "astronomicalDusk": "2022-10-07T05:29:43+00:00",
        "civilDawn": "2022-10-06T16:02:53+00:00",
        "civilDusk": "2022-10-07T04:38:12+00:00",
        "moonFraction": 0.824829925988306,
        "moonPhase": {
            "closest": {
                "text": "First quarter",
                "time": "2022-10-02T15:14:00+00:00",
                "value": 0.25
            },
            "current": {
                "text": "Waxing gibbous",
                "time": "2022-10-05T23:00:00+00:00",
                "value": 0.36254433632808736
            }
        },
        "moonrise": "2022-10-05T01:05:53+00:00",
        "moonset": "2022-10-05T12:17:46+00:00",
        "nauticalDawn": "2022-10-06T15:37:06+00:00",
        "nauticalDusk": "2022-10-07T05:03:58+00:00",
        "sunrise": "2022-10-06T16:25:08+00:00",
        "sunset": "2022-10-07T04:15:57+00:00",
        "time": "2022-10-05T23:00:00+00:00"
    },
    {
        "ident": 8,
        "astronomicalDawn": "2022-10-07T15:11:38+00:00",
        "astronomicalDusk": "2022-10-08T05:28:51+00:00",
        "civilDawn": "2022-10-07T16:03:10+00:00",
        "civilDusk": "2022-10-08T04:37:18+00:00",
        "moonFraction": 0.9031759407177815,
        "moonPhase": {
            "closest": {
                "text": "Full moon",
                "time": "2022-10-09T22:22:00+00:00",
                "value": 0.5
            },
            "current": {
                "text": "Waxing gibbous",
                "time": "2022-10-06T23:00:00+00:00",
                "value": 0.39928060125374076
            }
        },
        "moonrise": "2022-10-06T01:53:24+00:00",
        "moonset": "2022-10-06T13:21:27+00:00",
        "nauticalDawn": "2022-10-07T15:37:23+00:00",
        "nauticalDusk": "2022-10-08T05:03:05+00:00",
        "sunrise": "2022-10-07T16:25:26+00:00",
        "sunset": "2022-10-08T04:15:03+00:00",
        "time": "2022-10-06T23:00:00+00:00"
    },
    {
        "ident": 9,
        "astronomicalDawn": "2022-10-08T15:11:55+00:00",
        "astronomicalDusk": "2022-10-09T05:27:59+00:00",
        "civilDawn": "2022-10-08T16:03:28+00:00",
        "civilDusk": "2022-10-09T04:36:26+00:00",
        "moonFraction": 0.9592865732340347,
        "moonPhase": {
            "closest": {
                "text": "Full moon",
                "time": "2022-10-09T20:50:00+00:00",
                "value": 0.5
            },
            "current": {
                "text": "Waxing gibbous",
                "time": "2022-10-07T23:00:00+00:00",
                "value": 0.4353288030297046
            }
        },
        "moonrise": "2022-10-07T02:35:48+00:00",
        "moonset": "2022-10-07T14:22:28+00:00",
        "nauticalDawn": "2022-10-08T15:37:41+00:00",
        "nauticalDusk": "2022-10-09T05:02:13+00:00",
        "sunrise": "2022-10-08T16:25:44+00:00",
        "sunset": "2022-10-09T04:14:10+00:00",
        "time": "2022-10-07T23:00:00+00:00"
    },
    {
        "ident": 10,
        "astronomicalDawn": "2022-10-09T15:12:12+00:00",
        "astronomicalDusk": "2022-10-10T05:27:08+00:00",
        "civilDawn": "2022-10-09T16:03:46+00:00",
        "civilDusk": "2022-10-10T04:35:34+00:00",
        "moonFraction": 0.9912883443343703,
        "moonPhase": {
            "closest": {
                "text": "Full moon",
                "time": "2022-10-09T20:05:00+00:00",
                "value": 0.5
            },
            "current": {
                "text": "Waxing gibbous",
                "time": "2022-10-08T23:00:00+00:00",
                "value": 0.4702468417236905
            }
        },
        "moonrise": "2022-10-08T03:14:30+00:00",
        "moonset": "2022-10-08T15:21:06+00:00",
        "nauticalDawn": "2022-10-09T15:37:58+00:00",
        "nauticalDusk": "2022-10-10T05:01:22+00:00",
        "sunrise": "2022-10-09T16:26:03+00:00",
        "sunset": "2022-10-10T04:13:17+00:00",
        "time": "2022-10-08T23:00:00+00:00"
    }
]

function correctAst(forecast) {
    for (let i = 0; i < forecast.length; i++) {
        if (Date.parse(forecast[i].civilDusk) - Date.parse(new Date().toLocaleString("en-US", {timeZone: "HST"})) >= 0) {
            return forecast[i]
        }
    }
    return "time exceeds forecast's limit"
}
console.log(correctAst(ast)) */

//binding pattern - destructured assignment
/* const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let { b: { c: d } } = obj; // d is re-assignable

console.log(a, d) */ // 1 2

//assignment pattern = destructured assignment
/* const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj); //note the parentheses -- needed when using object literal destructuring assignment without a declaration
/* NOTE: if the destructured assignment above is not followed by a semi-colon, program 
may execute a function above. 
console.log(numbers) */ // [1, 2]

//default values
const [a = 1] = []
console.log(a)
const {b = 2} = {b: undefined}
console.log(b)
const {c = 3} = {c: null} //default values don't work if property is null
console.log(c)

const {d = console.log("default value can be any expression")} = {d: undefined}
console.log(d)



