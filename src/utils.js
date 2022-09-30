import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

/* fontAwesome list */
export const iconList = (arr) => {
    return arr.map((bullet, index) => {
        return  <div className="info-space">
                    <FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/>
                    <p className="bullet-point">{bullet}</p>
                </div>
    })
}

/* adds zero infront of hours or mins */
export const addZero = (num) => {
    if (num === 9) {
        return "0"
    } else if (num < 10) {
        return 0
    }
    return ""
}

/* finds local start time string */
export const localStartString = (loc) =>  {
    const date = new Date()
    const localTime = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours() - 12, date.getUTCMinutes(), date.getUTCSeconds())
    const timeString = new Date(localTime).toLocaleString('en-UK', {timeZone: loc.timezone}) //needs to be en-UK
    return timeString
}

/* finds tide api call start time */
export const tideStart = (timeString) => {
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
    console.log(`${callDate} ${time}`, "tide start")
    return `${callDate} ${time}`
}

/* determines whether a bar is blue of gray in abilities */
export const isBlue = (lvl, loc) => {
    const levelArr = loc.guide.abilityLevel.level;
    if(levelArr[lvl]) {
        return <div className="levelYesHighlight"></div>
    } else {
        return <div className="levelNoHighlight"></div>
    }
}

/* determines the number of percent bars filled */
export const isFilled = (amount) => {
    const arr = []
    for(let i = 1; i < 101; i++) {
        arr.push(i)
    }
    return arr.map(barSection => {
        if(barSection === 1) {
            return <div key={barSection} className="percentBarFirst"></div>
        } else if(barSection < amount + 1 && barSection !== 100) {
            return <div key={barSection} className="percentBarBlue"></div> 
        } else if(barSection === 100) {
            if(amount === 100) {
                return <div key={barSection} className="percentBarLastBlue"></div> 
            } else {
                return <div key={barSection} className="percentBarLastGray"></div> 
            }                
        } else {
            return <div key={barSection} className="percentBarGray"></div> 
        }
    })
}

/* finds letters associated with degrees */
export const findDegreeLetters = (degree) => {
    if (degree > 348.75 || degree < 11.25) {
        return "N"
    } else if (degree > 11.25 && degree < 33.75) {
        return "NNE"
    } else if (degree > 33.75 && degree < 56.25) {
        return "NE"
    } else if (degree > 56.25 && degree < 78.75) {
        return "ENE"
    } else if (degree > 78.75 && degree < 101.25) {
        return "E"
    } else if (degree > 101.25 && degree < 123.75) {
        return "ESE"
    } else if (degree > 123.75 && degree < 146.25) {
        return "SE"
    } else if (degree > 146.25 && degree < 168.75) {
        return "SSE"
    } else if (degree > 168.75 && degree < 191.25) {
        return "S"
    } else if (degree > 191.25 && degree < 213.75) {
        return "SSW"
    } else if (degree > 213.75 && degree < 236.25) {
        return "SW"
    } else if (degree > 236.25 && degree < 258.75) {
        return "WSW"
    } else if (degree > 258.75 && degree < 281.25) {
        return "W"
    } else if (degree > 281.25 && degree < 303.75) {
        return "WNW"
    } else if (degree > 303.75 && degree < 326.25) {
        return "NW"
    } else if (degree > 326.25 && degree < 348.75) {
        return "NNW"
    }
}

/* determines  whether time is am or pm */
//doesn't run until state has changed after api data returned
export const ampm = (time, zone) => { 
    if (time === "...") { 
        return "..."
    }  else {
        const long = new Date(time).toLocaleTimeString('en-US', {timeZone: zone})
        const longArr = long.split(" ")
        const timeStr = longArr[0].slice(0, -3)
        const aOrp = longArr[1].toLowerCase()
        return `${timeStr}${aOrp}`
    }
}

/* finds next tide in forecast */
export const correctTideTime = (forecast) => {
    console.log(forecast, "correctTideTime forecase")
    for (let i = 0; i < forecast.length; i++) {
        if (Date.parse(forecast[i].time) - Date.now() >= 0) {
            console.log(forecast[i])
            return forecast[i]
        }
    }
    return "time exceeds forecast's limit"
}

/* finds height of tide */
export const calcTideHeight = (nextTide, tideArray, loc) => {

    const prevTideHeight = (tideArray[nextTide.ident - 1].height + loc.msl) * 3.281
    const prevTideType = tideArray[nextTide.ident - 1].type
    const nextTideHeight = (nextTide.height + loc.msl) * 3.281
    const prevTideTime = Date.parse(tideArray[nextTide.ident - 1].time)
    const currentTime = Date.now()
    const timeDifference = Date.parse(nextTide.time) - Date.parse(tideArray[nextTide.ident - 1].time)

    function tideDifference() {
        if (prevTideHeight < 0) {
            return nextTideHeight - prevTideHeight
        } else if (nextTideHeight < 0) {
            return prevTideHeight - nextTideHeight
        } else if (prevTideHeight < nextTideHeight) {
            return nextTideHeight - prevTideHeight
        } else {
            return prevTideHeight - nextTideHeight
        }
    }

    const tideHeightDifference = tideDifference()
    const interval = 60
    const timeInterval = timeDifference / interval
    const heightInterval = tideHeightDifference / interval
    
    function timeHeight() {
        const timeHeightArr = [];
        let timeChange = prevTideTime
        let tideChange = prevTideHeight

        function minOrAdd() {
            if (prevTideType === "low") {
                return tideChange += heightInterval
            } else {
                return tideChange -= heightInterval
            }
        } 
        
        for (let i = 0; i < interval; i++) {
            timeHeightArr.push({
                ident: i, 
                tide: minOrAdd(), 
                time: timeChange += timeInterval
            })
        }
        return timeHeightArr
    }

    function currentTideHeight(timeHeightArr) {
        for (let i = 0; i < timeHeightArr.length; i++) {
            if (timeHeightArr[i].time - currentTime >= 0) {
                return timeHeightArr[i].tide.toFixed(1)
            } 
        }
        return timeHeightArr[timeHeightArr.length - 1].tide.toFixed(1)
    }
    return currentTideHeight(timeHeight())
}

/* fixes -0.0 tide bug */
export const zeroTide = (tideHeight) => {
    if (tideHeight === "-0.0") {
        return 0
    } else {
        return tideHeight
    } 
}

/* determines whether next tide is "high"/"low" */
export const upOrDown = (tide) => {
    if (tide === "High") {
        return true
    } else if (tide === "Low") {
        return false
    }
}

/* finds which day to use astrology data from */
export const correctAst = (forecast, location) => {
    for (let i = 0; i < forecast.length; i++) {
        if (Date.parse(forecast[i].civilDusk) - Date.parse(new Date().toLocaleString("en-US", {timeZone: location.timezone})) >= 0) {
            return forecast[i]
        }
    }
    return "time exceeds forecast's limit"
}

/* determines wave height */
export const determineHeight = (height) => {
    if (height === "...") {
        return "..."
    } else if (height <= 2) {
        return "0-1"
    } else if (height === 3) {
        return "1-2"
    } else if (height === 4) {
        return "2-3"
    } else if (height === 5) {
        return "3-4"
    } else if (height === 6) {
        return "4-5"
    } else if (height > 6) {
        return `${height - 2}-${height - 1}`
    }
}

/* determines wave height in words */
export const determineHeightWord = (height) => {
    if (height === "...") {
        return "..."
    } else if (height <= 2) {
        return "Flat to ankle"
    } else if (height === 3) {
        return "Ankle to knee"
    } else if (height === 4) {
        return "Knee to waist"
    } else if (height === 5) {
        return "Waist to chest"
    } else if (height === 6) {
        return "Chest to head"
    } else if (height > 6 && height < 8) {
        return `Chest to ${(height) - 6}ft overhead`
    } else if (height >= 8) {
        return `+${(height) - 6}ft overhead`
    }
}