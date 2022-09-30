import React, {useState} from "react"
import axios from "axios"

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

    const loading = "..."

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

    function getData(loc) {
        console.log("retrieving data...")

        const lat = loc.location[0]; 
        const tideLat = loc.tideLocation[0];
        const lng = loc.location[1];
        const tideLng = loc.tideLocation[1];

        const weatherParams = 'seaLevel,airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,waveHeight,windDirection,windSpeed,visibility'; 
        const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}` //`https://api.stormglass.io/v2/point?lat=${lat}&lng=${lng}&params=${weatherParams}&start=${tideStart(localStartString())}`
        const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&start=${tideStart(localStartString(loc))}`
        const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${tideLat}&lng=${tideLng}&start=${tideStart(localStartString(loc))}`  //tide data relative to local mean sea level (msl) which is included in locationData.json
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
            getData
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}