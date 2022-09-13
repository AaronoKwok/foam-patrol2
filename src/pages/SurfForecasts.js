import React, {useState, useEffect} from "react"
import axios from "axios"

/* import weatherData from "../Data/weatherData.json" 
import tideData from "../Data/tideData.json"
import astData from "../Data/astData.json" */

//images
import surfHeightIcon from "../images/surfHeight.jpeg"
import swellDirectionIcon from "../images/swellDirection.jpeg"
import tideIcon from "../images/tide.jpeg"
import windIcon from "../images/wind.jpeg"
import seaIcon from "../images/seaIcon.svg"

//weather svgs
import clearDAY from "../images/weather/clearDAY.svg"


function SurfForecasts({loc}) {
    const refresh = loc.location //used in useEffect so that it gets new data on location change
    console.log(loc.name)
    //airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,wavePeriod,waveHeight,windDirection,windSpeed
    const loading = "..."

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
    console.log(utcDate, "utcDate")
    console.log(Date.parse(utcDate))

    const utcStart = `${utcYear}-${utcMonth}-${addZero(utcDay)}${utcDay} ${addZero(utcHour)}${utcHour}:00`  // format is 0digit:00 if utc hour is less than 10

    const tideStart = `${utcYear}-${utcMonth}-${addZero(utcDay)}${utcDay} 00:00`
    console.log(tideStart, "tide start")

    //const tideEnd = `${utcYear}-${utcMonth}-${addZero(utcDay)}${utcDay + 1} 00:00`//utcDate + 1 may cause error at end of month
    //console.log(tideEnd, "tide end")

    const start = utcStart //utcDate and utcStart need to be different as they are used for different processes
    console.log(start, "start")

    //const histEnd = `2022-9-10 ${utcHour}:00` //time format is 00:00, need 0 if hour is less than 10
    //console.log(histEnd, "end")

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

    /* ampm start */
    function ampm(nextTideTime) {
        if (nextTideTime === loading) {
            return loading
        } else {
            console.log("ampm ran")
            const toUTC = new Date(nextTideTime)
            const localTimeStr = toUTC.toString()
            const timeArr = localTimeStr.split(" ")
            const snipArr = timeArr.slice(1, 5)
            const joinTimeArr = snipArr.join(" ")
            const newTimeStr = new Date(joinTimeArr)
            let hrs = newTimeStr.getHours()
            const mins = newTimeStr.getMinutes()
            if (hrs === 0) {
                hrs = 12
            } //note, else is optional in js
            if (hrs > 12) {
                if (mins < 10) {
                    return `${hrs - 12}:0${mins}pm`
                } else {
                    return `${hrs - 12}:${mins}pm`
                }
            } else {
                if (mins < 10) {
                    return `${hrs}:0${mins}am`
                } else {
                    return `${hrs}:${mins}am`
                }
            }
        }
    }

    /* find time in tide */
    /* 
        next high tide: use correctTideTime() to find next tide in tideForecast using times 
        converted to ms using Date.parse() for ISO 8601 times in returned forecast and 
        for utcDate which is local time in utc
    */
    const parsedUTCDate = Date.parse(utcDate);
    function correctTideTime(forecast) {
        const localTimeToUTC = parsedUTCDate;
        for (let i = 0; i < forecast.length; i++) {
            if (Date.parse(forecast[i].time) - localTimeToUTC >= 0) {
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
        const interval = 30
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
            console.log(timeHeightArr.length)
            for (let i = 0; i < timeHeightArr.length; i++) {
                if (timeHeightArr[i].time - currentTime >= 0) {
                    return timeHeightArr[i].tide.toFixed(1)
                }
            }
            return "N/A"
        }
        console.log(timeHeight())
        return currentTideHeight(timeHeight())

         // currently returns an object which can't be displayed as screen
    }

    

    /* clear/rainy function */

    function findSky(cloudCover, precipitation, visibility) { //rain in mm/h, clouds in decimal
        if (cloudCover === loading) {
            return undefined
        }
        const sunny = 0.30;
        const partlyCloudy = 0.70
        const cloudy = 0.95
        const overcast = 1



        return clearDAY
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
            return "Knee to thigh"
        } else if (height === 5) {
            return "Thigh to chest"
        } else if (height === 6) {
            return "Chest to head"
        } else if (height > 6 && height < 8) {
            return `Chest to ${(height) - 6}ft overhead`
        } else if (height >= 8) {
            return `+${(height) - 6}ft overhead`
        }
    }

    /* end determine waveheight words */


    /* find UTC based on user timezone */ 

    /* end find UTC */


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

        const weatherParams = 'airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,waveHeight,windDirection,windSpeed,visibility'; 
        const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}&start=${start}`
        const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&start=${start}`
        const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${tideLat}&lng=${tideLng}&start=${tideStart}`  //tide data relative to local mean sea level (msl) which is included in locationData.json
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
                console.log(res[0])
                console.log(res[1])
                console.log(res[2])

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
                console.log(astronomyForecast)
                console.log(tideForecast)

                setAirTemp(Math.floor((weatherForecast[0].airTemperature.sg) * (9/5) + 32))

                setCalcTide(calcTideHeight(nextTideHour, tideForecast))
                setCloudCover(weatherForecast[0].cloudCover.sg)
                setFirstLight(astronomyForecast[0].civilDawn)
                setGust(Math.floor((weatherForecast[0].gust.sg) * 1.944))
                setLastLight(astronomyForecast[0].civilDusk)
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
                setSunrise(astronomyForecast[0].sunrise)
                setSunset(astronomyForecast[0].sunset)
                setTideHeight(((loc.msl + nextTideHour.height) * 3.281).toFixed(1)) 
                setTideType(capTide[0].toUpperCase() + capTide.substring(1))
                setVisibility(weatherForecast[0].visibility.sg)
                setWaterTemperature(Math.floor((weatherForecast[0].waterTemperature.sg) * (9/5) + 32))
                setWaveHeight(Math.floor(weatherForecast[0].waveHeight.sg * 3.281))
                setWindLetters(findDegreeLetters(weatherForecast[0].windDirection.sg))
                setWindDirection(Math.floor(weatherForecast[0].windDirection.sg))
                setWindSpeed(Math.floor((weatherForecast[0].windSpeed.sg) * 1.944))

                console.log(res[2].data.meta.requestCount + 1, "stormglass requests made")
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        console.log("effect ran")
        getData() //turn off when editing

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

    return ( 
        <div className="forecast-background">
            <div className="filler"></div>
            <section className="locSet">
                <div className="top-forecast">
                    <p className="fcDir">{loc.country} / {loc.state} / {loc.county} / {loc.name}</p>
                    <p className="fcTitle">{loc.name} Surf Report & Forecast</p>
                    <p className="fcRating">FAIR</p>

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
                                <p className="current-data-point">{calcTide}<span className="data-span">ft</span></p>
                                <p className="data-description">{tideType} tide {tideHeight}ft at {ampm(nextTideTime)}</p>
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
                                    <img className="weather-icon" src={seaIcon} alt="" />
                                    <p className="current-data-point">{waterTemperature}<span className="data-span">&#176;f</span></p>
                                </div>
                            </div>
                            <div className="data-box">
                                <p className="type-name">Weather</p>
                                <hr className="data-hr"/>
                                <div className="icon-data-box">
                                    <img className="weather-icon" src={findSky(cloudCover, precipitation, visibility)} alt=""/>
                                    <p className="current-data-point">{airTemp}<span className="data-span">&#176;f</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="forecast-row">
                            <div className="forecast-data-box">
                                <p className="data-description">First Light: {ampm(firstLight)}</p>
                                <p className="data-description">Sunrise: {ampm(sunrise)}</p>
                                <p className="data-description">Sunset: {ampm(sunset)}</p>
                                <p className="data-description">Last Light: {ampm(lastLight)}</p>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="surfConditions">
                    <p className="sc-Title">Ideal {loc.name} Surf Conditions</p>
                    <div className="icon-container">
                        <img className="sc-icon" src={swellDirectionIcon} alt=""></img>
                        <div className="condition-container">
                            <p className="condition-title">Swell Direction</p>
                            <hr className="guideHr"/>
                            <p className="condition-des">{swellDirectionDes}</p>
                        </div>
                    </div>
                    <div className="icon-container">
                        <img className="sc-icon" src={windIcon} alt=""></img>
                        <div className="condition-container">
                            <p className="condition-title">Wind</p>
                            <hr className="guideHr"/>
                            <p className="condition-des">{windDes}</p>
                        </div>
                    </div>
                    <div className="icon-container">
                        <img className="sc-icon" src={surfHeightIcon} alt=""></img>
                        <div className="condition-container">
                            <p className="condition-title">Surf Height</p>
                            <hr className="guideHr"/>
                            <p className="condition-des">{surfHeightDes}</p>
                        </div>
                    </div>
                    <div className="icon-container">
                        <img className="sc-icon" src={tideIcon} alt=""></img>
                        <div className="condition-container">
                            <p className="condition-title">Tide</p>
                            <hr className="conditionHr"/>
                            <p className="condition-des">{tideDes}</p>
                        </div>
                    </div>
                </section>

                <section className="fcGuide">
                    <p className="fcGuideName">{loc.name} Surf Guide</p>
                    <p className="fcGuideAbout">{loc.about}</p>
                    <div className="guide">
                        <section className="abilitySpot">
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
                        </section>

                        <section className="localShoulder">
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
                        </section>

                        <section className="crowdWater"> 
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
                    </div>

                    <hr className="guideHr"/>

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

