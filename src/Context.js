import React, {useState} from "react"
import axios from "axios"


import locationData from "./Data/locationData.json"

//weather 
import dayClear from "./images/dayClear.jpeg"
import dayBriefShower from "./images/dayBriefShower.jpeg"
import dayLightRain from "./images/dayLightRain.jpeg" 
import dayMostlyCloudy from "./images/dayMostlyCloudy.jpeg"
import dayOvercastCloudy from "./images/dayOvercastCloudy.jpeg"
import dayShowers from "./images/dayShowers.jpeg"
import fogHaze from "./images/fogHaze.jpeg"
import heavyRain from "./images/heavyRain.jpeg"
import mist from "./images/mist.jpeg"
import moderateRain from "./images/moderateRain.jpeg"
import nightClear from "./images/nightClear.jpeg"
import nightLightRain from "./images/nightLightRain.jpeg"
import nightLightShower from "./images/nightLightShower.jpeg"
import nightMostlyCloudy from "./images/nightMostlyCloudy.jpeg"
import nightOvercastCloudy from "./images/nightOvercastCloudy.jpeg"

import {
    addZero,
    localStartString, 
    tideStart, 
    findDegreeLetters, 
    correctTideTime, 
    calcTideHeight, 
    correctAst
} from "./utils"

const Context = React.createContext()

function ContextProvider({children}) {

    const usaState = locationData[0].globe.northAmerica.country.unitedStates.state

    const pleasurePoint = usaState.california.county.santaCruz[0];
    const jacks = usaState.california.county.santaCruz[1]
    const cowells = usaState.california.county.santaCruz[2]
    const steamer = usaState.california.county.santaCruz[3]
    const theHook = usaState.california.county.santaCruz[4]
    const capitola = usaState.california.county.santaCruz[5]
    const davenport = usaState.california.county.santaCruz[6]
    const pacifica = usaState.california.county.sanMateo[0]
    const hbPier = usaState.california.county.orange[0]
    const waikiki = usaState.hawaii.county.oahu[0];

    const utcYear = (new Date()).getUTCFullYear()
    const utcMonth = (new Date()).getUTCMonth() + 1
    const utcDay = (new Date()).getUTCDate()
    const utcHour = (new Date()).getUTCHours()

    //utcDate is local time in utc in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
    const utcDate = `${utcYear}-${addZero(utcMonth)}${utcMonth}-${addZero(utcDay)}${utcDay}T${addZero(utcHour)}${utcHour}:00:00+00:00`  // format is 0digit:00 if utc hour is less than 10

    //const utcStart = `${utcYear}-${utcMonth}-${addZero(utcDay)}${utcDay} ${addZero(utcHour)}${utcHour}:00`  // format is 0digit:00 if utc hour is less than 10;;; utc from local time

    //const start = utcStart //utcDate and utcStart need to be different as they are used for different processes

    const [loaded, setLoaded] = useState(false)

    //weather states
    const [airTemp, setAirTemp] = useState("...")
    const [cloudCover, setCloudCover] = useState("...")
    const [gust, setGust] = useState("...")
    const [precipitation, setPrecipitation] = useState("...")
    const [swellDirection, setSwellDirection] = useState("...")
    const [swellLetters, setSwellLetters] = useState("...")
    const [swellHeight, setSwellHeight] = useState("...")
    const [swellPeriod, setSwellPeriod] = useState("...")
    const [secondarySwellPeriod, setSecondarySwellPeriod] = useState("...")
    const [secondarySwellDirection, setSecondarySwellDirection] = useState("...")
    const [secondarySwellLetters, setSecondarySwellLetters] = useState("...")
    const [secondarySwellHeight, setSecondarySwellHeight] = useState("...")
    const [waterTemperature, setWaterTemperature] = useState("...")
    const [waveHeight, setWaveHeight] = useState("...")
    const [windLetters, setWindLetters] = useState("...")
    const [windDirection, setWindDirection] = useState("...")
    const [windSpeed, setWindSpeed] = useState("...")
    const [visibility, setVisibility] = useState("...")

    //astronomy states
    const [firstLight, setFirstLight] = useState("...")
    const [sunrise, setSunrise] = useState("...")
    const [sunset, setSunset] = useState("...")
    const [lastLight, setLastLight] = useState("...")

    //tide states 
    const [calcTide, setCalcTide] = useState("...")
    const [nextTideTime, setNextTideTime] = useState("...")
    const [tideHeight, setTideHeight] = useState("...")
    const [tideType, setTideType] = useState("...")

    //mainpage current condition states
    //point
    const [pointLoaded, setPointLoaded] = useState(false)
    const [pointAirTemp, setPointAirTemp] = useState("...")
    const [pointCloud, setPointCloud] = useState("...")
    const [pointPrecip, setPointPrecip] = useState("...")
    const [pointVis, setPointVis] = useState("...")
    const [pointWaveHeight, setPointWaveHeight] = useState("...")
    const [pointTideHeight, setPointTideHeight] = useState("...")
    const [pointFirstLight, setPointFirstLight] = useState("...")
    const [pointLastLight, setPointLastLight] = useState("...")
    const [pointWaterTemp, setPointWaterTemp] = useState("...")
    const [pointTideType, setPointTideType] = useState("...")
    //mar
    const [marLoaded, setMarLoaded] = useState(false)
    const [marAirTemp, setMarAirTemp] = useState("...")
    const [marCloud, setMarCloud] = useState("...")
    const [marPrecip, setMarPrecip] = useState("...")
    const [marVis, setMarVis] = useState("...")
    const [marWaveHeight, setMarWaveHeight] = useState("...")
    const [marTideHeight, setMarTideHeight] = useState("...")
    const [marFirstLight, setMarFirstLight] = useState("...")
    const [marLastLight, setMarLastLight] = useState("...")
    const [marWaterTemp, setMarWaterTemp] = useState("...")
    const [marTideType, setMarTideType] = useState("...")
    //hb
    const [hbLoaded, setHbLoaded] = useState(false)
    const [hbAirTemp, setHbAirTemp] = useState("...")
    const [hbCloud, setHbCloud] = useState("...")
    const [hbPrecip, setHbPrecip] = useState("...")
    const [hbVis, setHbVis] = useState("...")
    const [hbWaveHeight, setHbWaveHeight] = useState("...")
    const [hbTideHeight, setHbTideHeight] = useState("...")
    const [hbFirstLight, setHbFirstLight] = useState("...")
    const [hbLastLight, setHbLastLight] = useState("...")
    const [hbWaterTemp, setHbWaterTemp] = useState("...")
    const [hbTideType, setHbTideType] = useState("...")
    //waikiki
    const [waikikiLoaded, setWaikikiLoaded] = useState(false)
    const [waikikiAirTemp, setWaikikiAirTemp] = useState("...")
    const [waikikiCloud, setWaikikiCloud] = useState("...")
    const [waikikiPrecip, setWaikikiPrecip] = useState("...")
    const [waikikiVis, setWaikikiVis] = useState("...")
    const [waikikiWaveHeight, setWaikikiWaveHeight] = useState("...")
    const [waikikiTideHeight, setWaikikiTideHeight] = useState("...")
    const [waikikiFirstLight, setWaikikiFirstLight] = useState("...")
    const [waikikiLastLight, setWaikikiLastLight] = useState("...")
    const [waikikiWaterTemp, setWaikikiWaterTemp] = useState("...")
    const [waikikiTideType, setWaikikiTideType] = useState("...")

    //weather function

    function findSky(clouds, rain, visible, light, dark) { 
        if (clouds === "...") {
            return "..."
        }
        const currentMs = Date.now()
        const startDay = new Date(light).getTime()
        const endDay = new Date(dark).getTime()

        /* console.log(clouds, "findSky clouds")
        console.log(rain, "findSky rain")
        console.log(visible, "findSky visible") */
        
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

    //get api data for surf page
    function getData(loc) {

        console.log("retrieving data...")
        console.log(localStartString(loc), loc.name)

        const lat = loc.location[0]; 
        const tideLat = loc.tideLocation[0];
        const lng = loc.location[1];
        const tideLng = loc.tideLocation[1];

        const weatherParams = 'seaLevel,airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,waveHeight,windDirection,windSpeed,visibility'; 
        const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}` //`https://api.stormglass.io/v2/point?lat=${lat}&lng=${lng}&params=${weatherParams}&start=${tideStart(localStartString())}`
        const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&start=${tideStart(localStartString(loc))}`
        const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${tideLat}&lng=${tideLng}&start=${tideStart(localStartString(loc))}`  //tide data relative to local mean sea level (msl) which is included in locationData.json
        
        console.log(weatherUrl, "weather url")
        console.log(astronomyUrl, "ast url")
        console.log(tideUrl, "tide url")

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
                
                /* console.log(weatherForecast)
                console.log(weatherForecast[0], "weather hour used")
                console.log(astronomyForecast, "ast forecast")
                console.log(astronomyForecast[0], "ast day used") 
                console.log(new Date(weatherForecast[0].time).toLocaleString('en-US', {timeZone: "PST"}), "current local weather hour")
                console.log(weatherForecast[0].precipitation.sg, "precipitation")
                console.log(weatherForecast[0].cloudCover.sg, "cloud cover")
                console.log(weatherForecast[0].visibility.sg, "visibility") */

                //console.log(tideForecast, "tide forecast")

                setAirTemp(Math.floor((weatherForecast[0].airTemperature.sg) * (9/5) + 32))
                setCalcTide(calcTideHeight(nextTideHour, tideForecast, loc))
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

    //get api data for main page surf component
    function getMPData(loc) {

        console.log("retrieving data...")
        console.log(localStartString(loc), loc.name)

        const lat = loc.location[0]; 
        const tideLat = loc.tideLocation[0];
        const lng = loc.location[1];
        const tideLng = loc.tideLocation[1];

        const weatherParams = 'seaLevel,airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,waveHeight,windDirection,windSpeed,visibility'; 
        const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}` //`https://api.stormglass.io/v2/point?lat=${lat}&lng=${lng}&params=${weatherParams}&start=${tideStart(localStartString())}`
        const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&start=${tideStart(localStartString(loc))}`
        const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${tideLat}&lng=${tideLng}&start=${tideStart(localStartString(loc))}`  //tide data relative to local mean sea level (msl) which is included in locationData.json
        
        console.log(weatherUrl, "weather url")
        console.log(astronomyUrl, "ast url")
        console.log(tideUrl, "tide url")

        const headers = {
            headers: {
                'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
            }
        } 
        
        const requestOne = axios.get(weatherUrl, headers);
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

                if (loc.name === "Pleasure Point") {
                    setPointAirTemp(Math.floor((weatherForecast[0].airTemperature.sg) * (9/5) + 32))
                    setPointCloud(weatherForecast[0].cloudCover.sg)
                    setPointPrecip(weatherForecast[0].precipitation.sg)
                    setPointVis(weatherForecast[0].visibility.sg)
                    setPointWaveHeight(Math.floor(weatherForecast[0].waveHeight.sg * 3.281))
                    setPointTideHeight(calcTideHeight(nextTideHour, tideForecast, loc))
                    setPointFirstLight(correctAst(astronomyForecast, loc).civilDawn)
                    setPointLastLight(correctAst(astronomyForecast, loc).civilDusk)
                    setPointWaterTemp(Math.floor((weatherForecast[0].waterTemperature.sg) * (9/5) + 32))
                    setPointTideType(capTide[0].toUpperCase() + capTide.substring(1))

                    setPointLoaded(true)

                    console.log(res[2].data.meta.requestCount + 1, "stormglass requests made")
                } else if (loc.name === "Pacifica/Linda Mar") {
                    setMarAirTemp(Math.floor((weatherForecast[0].airTemperature.sg) * (9/5) + 32))
                    setMarCloud(weatherForecast[0].cloudCover.sg)
                    setMarPrecip(weatherForecast[0].precipitation.sg)
                    setMarVis(weatherForecast[0].visibility.sg)
                    setMarWaveHeight(Math.floor(weatherForecast[0].waveHeight.sg * 3.281))
                    setMarTideHeight(calcTideHeight(nextTideHour, tideForecast, loc))
                    setMarFirstLight(correctAst(astronomyForecast, loc).civilDawn)
                    setMarLastLight(correctAst(astronomyForecast, loc).civilDusk)
                    setMarWaterTemp(Math.floor((weatherForecast[0].waterTemperature.sg) * (9/5) + 32))
                    setMarTideType(capTide[0].toUpperCase() + capTide.substring(1))

                    setMarLoaded(true)

                    console.log(res[2].data.meta.requestCount + 1, "stormglass requests made")
                } else if (loc.name === "HB Pier") {
                    setHbAirTemp(Math.floor((weatherForecast[0].airTemperature.sg) * (9/5) + 32))
                    setHbCloud(weatherForecast[0].cloudCover.sg)
                    setHbPrecip(weatherForecast[0].precipitation.sg)
                    setHbVis(weatherForecast[0].visibility.sg)
                    setHbWaveHeight(Math.floor(weatherForecast[0].waveHeight.sg * 3.281))
                    setHbTideHeight(calcTideHeight(nextTideHour, tideForecast, loc))
                    setHbFirstLight(correctAst(astronomyForecast, loc).civilDawn)
                    setHbLastLight(correctAst(astronomyForecast, loc).civilDusk)
                    setHbWaterTemp(Math.floor((weatherForecast[0].waterTemperature.sg) * (9/5) + 32))
                    setHbTideType(capTide[0].toUpperCase() + capTide.substring(1))

                    setHbLoaded(true)

                    console.log(res[2].data.meta.requestCount + 1, "stormglass requests made")
                } else if (loc.name === "Waikiki Beach") {
                    setWaikikiAirTemp(Math.floor((weatherForecast[0].airTemperature.sg) * (9/5) + 32))
                    setWaikikiCloud(weatherForecast[0].cloudCover.sg)
                    setWaikikiPrecip(weatherForecast[0].precipitation.sg)
                    setWaikikiVis(weatherForecast[0].visibility.sg)
                    setWaikikiWaveHeight(Math.floor(weatherForecast[0].waveHeight.sg * 3.281))
                    setWaikikiTideHeight(calcTideHeight(nextTideHour, tideForecast, loc))
                    setWaikikiFirstLight(correctAst(astronomyForecast, loc).civilDawn)
                    setWaikikiLastLight(correctAst(astronomyForecast, loc).civilDusk)
                    setWaikikiWaterTemp(Math.floor((weatherForecast[0].waterTemperature.sg) * (9/5) + 32))
                    setWaikikiTideType(capTide[0].toUpperCase() + capTide.substring(1))

                    setWaikikiLoaded(true)

                    console.log(res[2].data.meta.requestCount + 1, "stormglass requests made")
                }
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Context.Provider value={{
            loaded, 
            airTemp, 
            cloudCover, 
            gust, 
            precipitation, 
            swellDirection, 
            swellLetters, 
            swellHeight, 
            swellPeriod, 
            secondarySwellPeriod, 
            secondarySwellLetters, 
            secondarySwellDirection, 
            secondarySwellHeight, 
            waterTemperature, 
            waveHeight, 
            windLetters, 
            windDirection, 
            windSpeed, 
            visibility, 
            firstLight, 
            sunrise, 
            sunset, 
            lastLight, 
            calcTide, 
            nextTideTime, 
            tideHeight, 
            tideType, 
            setLoaded,
            setPointLoaded,
            setMarLoaded, 
            setHbLoaded, 
            setWaikikiLoaded,
            getData,
            getMPData, 
            findSky,
            pleasurePoint, 
            jacks, 
            cowells, 
            steamer, 
            theHook, 
            capitola, 
            davenport, 
            pacifica, 
            hbPier, 
            waikiki,
            pointLoaded, 
            pointAirTemp, 
            pointCloud, 
            pointPrecip, 
            pointVis, 
            pointWaveHeight, 
            pointTideHeight, 
            pointFirstLight, 
            pointLastLight, 
            pointWaterTemp,
            pointTideType, 
            marLoaded, 
            marAirTemp, 
            marCloud, 
            marPrecip, 
            marVis, 
            marWaveHeight, 
            marTideHeight, 
            marFirstLight, 
            marLastLight, 
            marWaterTemp, 
            marTideType,
            hbLoaded, 
            hbAirTemp, 
            hbCloud, 
            hbPrecip, 
            hbVis, 
            hbWaveHeight, 
            hbTideHeight, 
            hbFirstLight, 
            hbLastLight, 
            hbWaterTemp, 
            hbTideType,
            waikikiLoaded, 
            waikikiAirTemp, 
            waikikiCloud, 
            waikikiPrecip, 
            waikikiVis, 
            waikikiWaveHeight, 
            waikikiTideHeight, 
            waikikiFirstLight, 
            waikikiLastLight, 
            waikikiWaterTemp,
            waikikiTideType
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}