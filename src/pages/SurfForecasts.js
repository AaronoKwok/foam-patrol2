import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"

//images
import surfHeightIcon from "../images/surfHeight.jpeg"
import swellDirectionIcon from "../images/swellDirection.jpeg"
import tideIcon from "../images/tide.jpeg"
import windIcon from "../images/wind.jpeg"
import seaIcon from "../images/seaIcon.svg"
import up from "../images/up.jpeg"
import down from "../images/down.jpeg"

//weather 
import dayClear from "../images/dayClear.jpeg"
import dayBriefShower from "../images/dayBriefShower.jpeg"
import dayLightRain from "../images/dayLightRain.jpeg" 
import dayMostlyCloudy from "../images/dayMostlyCloudy.jpeg"
import dayOvercastCloudy from "../images/dayOvercastCloudy.jpeg"
import dayShowers from "../images/dayShowers.jpeg"
import fogHaze from "../images/fogHaze.jpeg"
import heavyRain from "../images/heavyRain.jpeg"
import mist from "../images/mist.jpeg"
import moderateRain from "../images/moderateRain.jpeg"
import nightClear from "../images/nightClear.jpeg"
import nightLightRain from "../images/nightLightRain.jpeg"
import nightLightShower from "../images/nightLightShower.jpeg"
import nightMostlyCloudy from "../images/nightMostlyCloudy.jpeg"
import nightOvercastCloudy from "../images/nightOvercastCloudy.jpeg"


function SurfForecasts({loc}) {
    const refresh = loc.location //used in useEffect so that it gets new data on location change
    console.log(loc.name)
    const loading = "..."

    const [loaded, setLoaded] = useState(false)

    //weather states
    const [airTemp, setAirTemp] = useState(loading)
    const [cloudCover, setCloudCover] = useState(loading)
    const [gust, setGust] = useState(loading)
    const [precipitation, setPrecipitation] = useState(loading)
    const [swellDirection, setSwellDirection] = useState(loading)
    const [swellLetters, setSwellLetters] = useState(loading)
    const [swellHeight, setSwellHeight] = useState(loading)
    const [swellPeriod, setSwellPeriod] = useState(loading)
    const [secondarySwellPeriod, setSecondarySwellPeriod] = useState(loading)
    const [secondarySwellDirection, setSecondarySwellDirection] = useState(loading)
    const [secondarySwellLetters, setSecondarySwellLetters] = useState(loading)
    const [secondarySwellHeight, setSecondarySwellHeight] = useState(loading)
    const [waterTemperature, setWaterTemperature] = useState(loading)
    const [waveHeight, setWaveHeight] = useState(loading)
    const [windLetters, setWindLetters] = useState(loading)
    const [windDirection, setWindDirection] = useState(loading)
    const [windSpeed, setWindSpeed] = useState(loading)
    const [visibility, setVisibility] = useState(loading)

    //astronomy states
    const [firstLight, setFirstLight] = useState(loading)
    const [sunrise, setSunrise] = useState(loading)
    const [sunset, setSunset] = useState(loading)
    const [lastLight, setLastLight] = useState(loading)

    //tide states 
    const [calcTide, setCalcTide] = useState(loading)
    const [nextTideTime, setNextTideTime] = useState(loading)
    const [tideHeight, setTideHeight] = useState(loading)
    const [tideType, setTideType] = useState(loading)

    //location variables 
    const localVibe = loc.guide.localVibe.level
    const crowdFactor = loc.guide.crowdFactor.level
    const spotRating = loc.guide.spotRating.level
    const shoulderBurn = loc.guide.shoulderBurn.level
    const waterQuality = loc.guide.waterQuality.level
    const surfHeightDes = loc.guide.idealConditions.surfHeight
    const swellDirectionDes = loc.guide.idealConditions.swellDirection
    const tideDes = loc.guide.idealConditions.tide
    const windDes = loc.guide.idealConditions.wind 

    const lat = loc.location[0]; 
    const tideLat = loc.tideLocation[0];
    const lng = loc.location[1];
    const tideLng = loc.tideLocation[1];

    const utcYear = (new Date()).getUTCFullYear()
    const utcMonth = (new Date()).getUTCMonth() + 1
    const utcDay = (new Date()).getUTCDate()
    const utcHour = (new Date()).getUTCHours()

    function addZero(num) {
        if (num === 9) {
            return "0"
        } else if (num < 10) {
            return 0
        }
        return ""
    }

    //utcDate is local time in utc in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
    const utcDate = `${utcYear}-${addZero(utcMonth)}${utcMonth}-${addZero(utcDay)}${utcDay}T${addZero(utcHour)}${utcHour}:00:00+00:00`  // format is 0digit:00 if utc hour is less than 10

    const utcStart = `${utcYear}-${utcMonth}-${addZero(utcDay)}${utcDay} ${addZero(utcHour)}${utcHour}:00`  // format is 0digit:00 if utc hour is less than 10;;; utc from local time

    function localStartString() {
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
        console.log(`${callDate} ${time}`, "tide start")
        return `${callDate} ${time}`
    }

    const start = utcStart //utcDate and utcStart need to be different as they are used for different processes
    console.log(start, "utcStart")

    /* ability level */
    function isBlue(lvl) {
        const levelArr = loc.guide.abilityLevel.level;
        if(levelArr[lvl]) {
            return <div className="levelYesHighlight"></div>
        } else {
            return <div className="levelNoHighlight"></div>
        }
    }

    /* percent bar */
    function isFilled(amount) {
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

    /* find direction */
    function findDegreeLetters(degree) {
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

    /* ampm */

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

    /* find time in tide */
    /* 
        next high tide: use correctTideTime() to find next tide in tideForecast using times 
        converted to ms using Date.parse() for ISO 8601 times in returned forecast and 
        for utcDate which is local time in utc
    */
    function correctTideTime(forecast) {
        console.log(forecast, "correctTideTime forecase")
        for (let i = 0; i < forecast.length; i++) {
            if (Date.parse(forecast[i].time) - Date.now() >= 0) {
                console.log(forecast[i])
                return forecast[i]
            }
        }
        return "time exceeds forecast's limit"
    }

    /* calc current tide height */
    function calcTideHeight(nextTide, tideArray) {

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

    /* -0.0 tide */
    function zeroTide() {
        if (tideHeight === -0.0) {
            return setTideHeight(0)
        } else {
            return tideHeight
        } 
    }

    /* tide up or down image */
    function upOrDown(tide) {
        if (tide === "High") {
            return up
        } else if (tide === "Low") {
            return down
        }
    }

    /* find correct day */
    function correctAst(forecast, location) {
        for (let i = 0; i < forecast.length; i++) {
            if (Date.parse(forecast[i].civilDusk) - Date.parse(new Date().toLocaleString("en-US", {timeZone: location.timezone})) >= 0) {
                return forecast[i]
            }
        }
        return "time exceeds forecast's limit"
    }
    
    /* clear/rainy function */

    function findSky(clouds, rain, visible, light, dark) { 
        if (clouds === loading) {
            return loading
        }
        const currentMs = Date.now()
        const startDay = new Date(light).getTime()
        const endDay = new Date(dark).getTime()
        console.log(currentMs)
        console.log(startDay)
        console.log(endDay)
        console.log(clouds, "findSky clouds")
        console.log(rain, "findSky rain")
        console.log(visible, "findSky visible")
        
        if (currentMs > startDay && currentMs < endDay) {
            if (clouds < 30) {
                if (rain > 0.1 && rain < 0.5) {
                    return dayBriefShower
                } else if (visible < 1) {
                    return fogHaze
                } else if (visible >= 1 && visible < 2) {
                    return mist
                } else if  (visible >= 2 && visible < 5) {
                    return fogHaze
                } else {
                    return dayClear
                }
            } else if (clouds >= 30 && clouds < 70) {
                if (rain > 0.1 && rain < 0.5) {
                    return dayBriefShower
                } else if (rain >= 0.5 && rain < 4) {
                    return dayShowers
                } else if (rain > 4 && rain < 8) {
                    return moderateRain
                } else if (rain >= 8) {
                    return heavyRain 
                } else {
                    return mist
                }
            } else if (clouds >= 70 && clouds < 95) {
                if (rain > 0.1 && rain < 0.5) {
                    return dayLightRain
                } else if (rain >= 0.5 && rain < 4) {
                    return dayShowers
                } else if (rain > 4 && rain < 8) {
                    return moderateRain
                } else if (rain >= 8) {
                    return heavyRain 
                } else {
                    return dayMostlyCloudy
                }
            } else if (clouds >= 95) {
                if (rain > 0.1 && rain < 0.5) {
                    return dayLightRain
                } else if (rain >= 0.5 && rain < 4) {
                    return dayShowers
                } else if (rain > 4 && rain < 8) {
                    return moderateRain
                } else if (rain >= 8) {
                    return heavyRain 
                } else {
                    return dayOvercastCloudy
                }
            }
        } else {
            if (clouds < 30) {
                if (rain > 0.1 && rain < 0.5) {
                    return nightLightShower
                } else if (visible < 1) {
                    return fogHaze
                } else if (visible >= 1 && visible < 2) {
                    return mist
                } else if  (visible >= 2 && visible < 5) {
                    return fogHaze
                } else {
                    return nightClear
                }
            } else if (clouds >= 30 && clouds < 70) {
                if (rain > 0.1 && rain < 0.5) {
                    return nightLightShower
                } else if (rain >= 0.5 && rain < 4) {
                    return nightLightShower
                } else if (rain > 4 && rain < 8) {
                    return moderateRain
                } else if (rain >= 8) {
                    return heavyRain
                } else {
                    return mist
                }
            } else if (clouds >= 70 && clouds < 95) {
                if (rain > 0.1 && rain < 0.5) {
                    return nightLightRain
                } else if (rain >= 0.5 && rain < 4) {
                    return nightLightShower
                } else if (rain > 4 && rain < 8) {
                    return moderateRain
                } else if (rain >= 8) {
                    return heavyRain
                } else {
                    return nightMostlyCloudy
                }
            } else if (clouds >= 95) {
                if (rain > 0.1 && rain < 0.5) {
                    return nightLightRain
                } else if (rain >= 0.5 && rain < 4) {
                    return nightLightShower
                } else if (rain > 4 && rain < 8) {
                    return moderateRain
                } else if (rain >= 8) {
                    return heavyRain 
                } else {
                    return nightOvercastCloudy
                }
            }
        }
    }

    /* determine wave height */
    function determineHeight(height) {
        if (height === "loading") {
            return loading
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

    /* determine waveheight words*/
    function determineHeightWord(height) {
        if (height === "loading") {
            return loading
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

    /* //searchbar
    function lookChange(event) {
        const text = event.target.value
        setLookUpLoc(text)
    }

    function findLoc(event) {
        event.preventDefault();   
        console.log("Searching")
        setLookUpLoc("")
    } */
 
   //stormglass api
    //state change function 
    function getData() {
        console.log("retrieving data...")

        const weatherParams = 'seaLevel,airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,waveHeight,windDirection,windSpeed,visibility'; 
        const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}` //`https://api.stormglass.io/v2/point?lat=${lat}&lng=${lng}&params=${weatherParams}&start=${tideStart(localStartString())}`
        const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&start=${tideStart(localStartString())}`
        const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${tideLat}&lng=${tideLng}&start=${tideStart(localStartString())}`  //tide data relative to local mean sea level (msl) which is included in locationData.json
        const headers = {
            headers: {
                'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
            }
        } 
        
        const requestOne = axios.get(weatherUrl, {
            headers: {
                'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
            }
        });
        const requestTwo = axios.get(astronomyUrl, headers);
        const requestThree = axios.get(tideUrl, headers); 

        axios
            .all([requestOne, requestTwo, requestThree])
            .then(axios.spread((...res) => {  
                console.log(res[0], "weather")
                console.log(res[1], "ast")
                console.log(res[2], "tide")

                const weatherIdents = res[0].data.hours.map((hour, i) => { //adds and ident to each hour returned in weather
                    return {
                        "ident": i, 
                        ...hour
                    }
                }) 
                
                const startingHour = weatherIdents.filter(hour => { //finds hour obj in weatherIdents array that has a time that matches utcDate declared above
                    return hour.time === utcDate
                }) //starting hour should be 0 bc I called api with start time as local time

                const additionalHours = 4;
                const weatherForecastLastId = startingHour[0].ident + additionalHours //weather forecast length in hours (5), zero included

                const weatherForecast = weatherIdents.filter(hour => { //filters hours from weatherIdents that are between the first and last desired weather hours 
                    return hour.ident >= weatherForecastLastId - additionalHours && hour.ident <= weatherForecastLastId
                })
                
                const astronomyForecast = res[1].data.data.map((day, i) => {
                    return {
                        "ident": i, 
                        ...day
                    }
                })

                const tideForecast = res[2].data.data.map((tide, i) => {
                    return {
                        "ident": i, 
                        ...tide
                    }
                })

                const nextTideHour = correctTideTime(tideForecast);
                const capTide = nextTideHour.type
                
                console.log(weatherForecast)
                console.log(weatherForecast[0], "weather hour used")
                console.log(astronomyForecast, "ast forecast")
                console.log(astronomyForecast[0], "ast day used") 

                /* Bug for astronomy, need function that finds closest day using returned time data, as api returns next utc hour */

                console.log(new Date(weatherForecast[0].time).toLocaleString('en-US', {timeZone: "PST"}), "current local weather hour")
                console.log(weatherForecast[0].precipitation.sg, "precipitation")
                console.log(weatherForecast[0].cloudCover.sg, "cloud cover")
                console.log(weatherForecast[0].visibility.sg, "visibility")

                console.log(tideForecast, "tide forecast")

                setAirTemp(Math.floor((weatherForecast[0].airTemperature.sg) * (9/5) + 32))
                setCalcTide(calcTideHeight(nextTideHour, tideForecast))
                setCloudCover(weatherForecast[0].cloudCover.sg)
                setFirstLight(correctAst(astronomyForecast, loc).civilDawn)
                setGust(Math.floor((weatherForecast[0].gust.sg) * 1.944))
                setLastLight(correctAst(astronomyForecast, loc).civilDusk)
                setNextTideTime(nextTideHour.time) 
                setPrecipitation(weatherForecast[0].precipitation.sg)
                setSwellDirection(Math.floor(weatherForecast[0].swellDirection.sg))
                setSwellLetters(findDegreeLetters(weatherForecast[0].swellDirection.sg))
                setSwellHeight((weatherForecast[0].swellHeight.sg * 3.281).toFixed(1))
                setSwellPeriod(Math.floor(weatherForecast[0].swellPeriod.sg))
                setSecondarySwellDirection(Math.floor(weatherForecast[0].secondarySwellDirection.sg))
                setSecondarySwellLetters(findDegreeLetters(weatherForecast[0].secondarySwellDirection.sg))
                setSecondarySwellHeight((weatherForecast[0].secondarySwellHeight.sg).toFixed(1))
                setSecondarySwellPeriod(Math.floor(weatherForecast[0].secondarySwellPeriod.sg))
                setSunrise(correctAst(astronomyForecast, loc).sunrise)
                setSunset(correctAst(astronomyForecast,loc).sunset)
                
                setTideHeight(((loc.msl + nextTideHour.height) * 3.281).toFixed(1)) 
                setTideType(capTide[0].toUpperCase() + capTide.substring(1))
                setVisibility(weatherForecast[0].visibility.sg)
                setWaterTemperature(Math.floor((weatherForecast[0].waterTemperature.sg) * (9/5) + 32))
                setWaveHeight(Math.floor(weatherForecast[0].waveHeight.sg * 3.281))
                setWindLetters(findDegreeLetters(weatherForecast[0].windDirection.sg))
                setWindDirection(Math.floor(weatherForecast[0].windDirection.sg))
                setWindSpeed(Math.floor((weatherForecast[0].windSpeed.sg) * 1.944))

                setLoaded(true)

                console.log(res[2].data.meta.requestCount + 1, "stormglass requests made")
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        console.log("effect ran")
        //getData() //turn off when editing

        /* 
            Place api call and state changes outside of useEffect 
            to avoid recalling api on each state change as state 
            changes trigger rerenders and thus useEffect, repeatedly
        */
    }, [refresh]) //get forecast on location name change for now...
    /* 
        //NOTE: //when using dependency array as an optimization, 
        make sure the array includes all values from the component 
        scope (such as state and prosps) taht change over time and 
        that are used by the effect. Otherwise, your code will 
        reference stale values from previous renders
    */

    const location = useLocation()
    useEffect(() => {
        setLoaded(false)
    }, [location])

    return ( 
        <div className="forecast-background">
            <div className="filler"></div> {/* used to makes space between footer and header */}
            
            <section className="locSet">

                <div className="top-forecast">
                    <p className="fcDir">{loc.country} / {loc.state} / {loc.county} / {loc.name}</p>
                    <p className="fcTitle">{loc.name} Surf Report & Forecast</p>
                    <p className="fcRating">FAIR</p>

                    {
                        loaded && 
                            <div className="forecast-load">
                                <p className="loading-text">Loading...</p>
                            </div>
                    }

                    {
                        !loaded &&
                            <section className="fcData">
                            <div className="first-data-row">
                                <div className="data-box">
                                    <p className="type-name">Surf Height</p>
                                    <hr className="data-hr"/>
                                    <p className="current-data-point">{determineHeight(waveHeight)}<span className="data-span">ft</span></p>
                                    <p className="data-description">{determineHeightWord(waveHeight)}</p>
                                </div>
                                <div className="data-box">
                                    <p className="type-name">Tide</p>
                                    <hr className="data-hr"/>
                                    <p className="current-data-point">{calcTide}<span className="data-span">ft</span><span><img className="up-down-arrow" src={upOrDown(tideType)} alt =""/></span></p>
                                    <p className="data-description">{tideType} tide {zeroTide()}ft at {ampm(nextTideTime, loc.timezone)}</p>
                                </div>
                                <div className="data-box">
                                    <p className="type-name">Wind</p>
                                    <hr className="data-hr"/>
                                    <p className="current-data-point">{windSpeed}<span className="data-span">kts</span></p>
                                    <p className="data-description">{windLetters} ({windDirection}&#176;)</p>
                                    <p className="data-description">with {gust}kt gusts</p>
                                </div>
                                <div className="data-box">
                                    <p className="type-name">Swells</p>
                                    <hr className="data-hr"/>
                                    <div className="swell-dot">
                                        <div className="primary-dot"></div>
                                        <p className="data-description">{swellHeight}ft at {swellPeriod}s {swellLetters} {swellDirection}&#176;</p>
                                    </div>
                                    <div className="swell-dot-two">
                                        <div className="secondary-dot"></div>
                                        <p className="data-description">{secondarySwellHeight}ft at {secondarySwellPeriod}s {secondarySwellLetters} {secondarySwellDirection}&#176;</p>
                                    </div>
                                </div>
                                <div className="data-box">
                                    <p className="type-name">Water Temp</p>
                                    <hr className="data-hr"/>
                                    <div className="icon-data-box">
                                        <img className="sea-icon" src={seaIcon} alt="" />
                                        <p className="current-data-point">{waterTemperature}<span className="data-span">&#176;f</span></p>
                                    </div>
                                </div>
                                <div className="data-box">
                                    <p className="type-name">Weather</p>
                                    <hr className="data-hr"/>
                                    <div className="icon-data-box">
                                        <img className="weather-icon" src={findSky(cloudCover, precipitation, visibility, firstLight, lastLight)} alt=""/>
                                        <p className="current-data-point">{airTemp}<span className="data-span">&#176;f</span></p>
                                    </div>
                                </div>
                                <div className="data-box">
                                    <p className="type-name">Sunlight</p>
                                    <hr className="data-hr"/>
                                    <div className="time-data-box">
                                        <p className="data-description">First Light: {ampm(firstLight, loc.timezone)}</p>
                                        <p className="data-description">Sunrise: {ampm(sunrise, loc.timezone)}</p>
                                        <p className="data-description">Sunset: {ampm(sunset, loc.timezone)}</p>
                                        <p className="data-description">Last Light: {ampm(lastLight, loc.timezone)}</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="forecast-row"> 
                                <div className="forecast-data-box">
                                    <p className="data-description">First Light: {ampm(firstLight, loc.timezone)}</p>
                                    <p className="data-description">Sunrise: {ampm(sunrise, loc.timezone)}</p>
                                    <p className="data-description">Sunset: {ampm(sunset, loc.timezone)}</p>
                                    <p className="data-description">Last Light: {ampm(lastLight, loc.timezone)}</p>
                                </div>
                            </div> */}
                        </section>
                    }
  
                </div>

                <section className="surfConditions">
                    <p className="sc-Title">Ideal {loc.name} Surf Conditions</p>
                    
                    <section className="conditions">
                        <div className="icon-container">
                            <img className="sc-icon" src={swellDirectionIcon} alt=""></img>
                            <div >
                                <p className="condition-title">Swell Direction</p>
                                <p className="condition-des">{swellDirectionDes}</p>
                            </div>
                        </div>
                        <div className="icon-container">
                            <img className="sc-icon" src={windIcon} alt=""></img>
                            <div >
                                <p className="condition-title">Wind</p>
                                <p className="condition-des">{windDes}</p>
                            </div>
                        </div>
                        <div className="icon-container">
                            <img className="sc-icon" src={surfHeightIcon} alt=""></img>
                            <div >
                                <p className="condition-title">Surf Height</p>
                                <p className="condition-des">{surfHeightDes}</p>
                            </div>
                        </div>
                        <div className="icon-container">
                            <img className="sc-icon" src={tideIcon} alt=""></img>
                            <div >
                                <p className="condition-title">Tide</p>
                                <p className="condition-des">{tideDes}</p>
                            </div>
                        </div>
                    </section>
                    
                </section>

                <section className="fcGuide">
                    <p className="fcGuideName">{loc.name} Surf Guide</p>
                    <p className="fcGuideAbout">{loc.about}</p>

                    <section className="guide">

                        <div className="guideContainer">
                            <p className="guideName">Ability Level</p>
                            <p className="guideTitle">{loc.guide.abilityLevel.title}</p>
                            <div className="abilityLevel">
                                <div className="partLevel">
                                    {isBlue(0)}
                                    <p className="levelText">Beg</p>
                                </div>
                                <div className="partLevel">
                                    {isBlue(1)}
                                    <p className="levelText">Int</p>
                                </div>
                                <div className="partLevel">
                                    {isBlue(2)}
                                    <p className="levelText">Adv</p>
                                </div>
                            </div>
                            <p className="guideDes">{loc.guide.abilityLevel.description}</p>
                        </div>

                        <div className="guideContainer">
                            <p className="guideName">Spot Rating</p>
                            <p className="guideTitle">{loc.guide.spotRating.title}</p>
                            <div className="barContainer">
                                {isFilled(spotRating)}
                            </div>
                            <div className="barDes">
                                <p className="barDesText">Poor</p>
                                <p className="barDesText">Perfect</p>
                            </div>
                            <p className="guideDes">{loc.guide.spotRating.description}</p>
                        </div>
                    
                        <div className="guideContainer">
                            <p className="guideName">Local Vibe</p>
                            <p className="guideTitle">{loc.guide.localVibe.title}</p>
                            <div className="barContainer">
                                {isFilled(localVibe)}
                            </div>
                            <div className="barDes">
                                <p className="barDesText">Welcoming</p>
                                <p className="barDesText">Intimidating</p>
                            </div>
                            <p className="guideDes">{loc.guide.localVibe.description}</p>
                        </div>

                        <div className="guideContainer">
                            <p className="guideName">Shoulder Burn</p>
                            <p className="guideTitle">{loc.guide.shoulderBurn.title}</p>
                            <div className="barContainer">
                                {isFilled(shoulderBurn)}
                            </div>
                            <div className="barDes">
                                <p className="barDesText">Light</p>
                                <p className="barDesText">Exhausting</p>
                            </div>
                            <p className="guideDes">{loc.guide.shoulderBurn.description}</p>
                        </div>
                    
                        <div className="guideContainer">
                            <p className="guideName">Crowd Factor</p>
                            <p className="guideTitle">{loc.guide.crowdFactor.title}</p>
                            <div className="barContainer">
                                {isFilled(crowdFactor)}
                            </div>
                            <div className="barDes">
                                <p className="barDesText">Mellow</p>
                                <p className="barDesText">Heavy</p>
                            </div>
                            <p className="guideDes">{loc.guide.crowdFactor.description}</p>
                        </div>

                        <div className="guideContainer">
                            <p className="guideName">Water Quality</p>
                            <p className="guideTitle">{loc.guide.waterQuality.title}</p>
                            <div className="barContainer">
                                {isFilled(waterQuality)}
                            </div>
                            <div className="barDes">
                                <p className="barDesText">Clean</p>
                                <p className="barDesText">Dirty</p>
                            </div>
                            <p className="guideDes">{loc.guide.waterQuality.description}</p>
                        </div>        

                    </section>

                    <hr className="conditions-hr"/>

                    <div className="addiPoints">

                        <section className="hazAccBest">
                            <p className="addiTitle">Hazards</p>
                            <p className="addiDes">{loc.guide.hazards}</p>
                            <p className="addiTitle">Access</p>
                            <p className="addiDes">{loc.guide.access}</p>
                            <p className="addiTitle">Best Season</p>
                            <p className="addiDes">{loc.guide.bestSeason}</p>
                        </section>

                        <section className="bringBottom">
                            <p className="addiTitle">Bring Your</p>
                            <p className="addiDes">{loc.guide.bringYour}</p>
                            <p className="addiTitle">Bottom</p>
                            <p className="addiDes">{loc.guide.bottom}</p>
                        </section>

                    </div>

                </section> 
            </section>
        </div>
    )
}
 
export default SurfForecasts

// can unfamiliar terms link to glossary
// can limit api calls per usr using quota from meta


           /*  SEARCH BAR:
            <section className="fc-backscene-img">
                
                <form onSubmit={findLoc} className="fc-backscene-form">
                    <label>
                        <input className="loc-input" required type="text" value={lookUpLoc} onChange={lookChange} placeholder="Search for a surf break - ex:  'North Shore Oahu, HI'"></input>
                    </label>
                    <br />
                    <input className="find-break" type="submit" value="Find a Break" />
                </form>
            </section> */ 

