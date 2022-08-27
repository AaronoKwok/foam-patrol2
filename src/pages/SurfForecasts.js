import React, {useState, useEffect} from "react"
import axios from "axios"

import weatherData from "../Data/weatherData.json" 
import tideData from "../Data/tideData.json"
import astData from "../Data/astData.json"

import surfHeightIcon from "../images/surfHeight.jpeg"
import swellDirectionIcon from "../images/swellDirection.jpeg"
import tideIcon from "../images/tide.jpeg"
import windIcon from "../images/wind.jpeg"

//import {Context} from "../Context" //imports context object exported from Context.js

function SurfForecasts({loc}) {
    console.log(loc.name)
    const airTempCel = weatherData.hours[0].airTemperature.noaa
    const airTempFah = Math.floor(airTempCel * (9/5) + 32)
    const cloudCover = Math.floor(weatherData.hours[0].cloudCover.noaa)
    const waterTempCel = weatherData.hours[0].waterTemperature.meto
    const waterTempFah = Math.floor(waterTempCel * (9/5) + 32)
    const locMsl = loc.msl
    console.log(locMsl, "msl")
    const nextLow = tideData.data[0].height
    console.log(nextLow, "next low tide")
    const tideM = tideData.data[0].height + loc.msl
    console.log(tideM, "calc tide")

    //note sea Level is not same as a current tide level, may need algo or other api or not include


    const localVibe = loc.guide.localVibe.level
    const crowdFactor = loc.guide.crowdFactor.level
    const spotRating = loc.guide.spotRating.level
    const shoulderBurn = loc.guide.shoulderBurn.level
    const waterQuality = loc.guide.waterQuality.level

    const surfHeightDes = loc.guide.idealConditions.surfHeight
    const swellDirectionDes = loc.guide.idealConditions.swellDirection
    const tideDes = loc.guide.idealConditions.tide
    const windDes = loc.guide.idealConditions.wind

    
    //const {testVar} = useContext(Context)//useContext hook takes the context object from Context.js and provides its data
    const [lookUpLoc, setLookUpLoc] = useState("")
    const [forecastID, setForecastID] = useState("")
    
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

    /* find UTC based on user timezone */ 

    /* function utcStartTime() {
        const start = new Date();
        const hour = start.getHours();
        const year = start.
    }

    function utcEndTime() {

    } */

    /* end find UTC */



    function lookChange(event) {
        const text = event.target.value
        setLookUpLoc(text)
    }

    function findLoc(event) {
        event.preventDefault();   
        console.log("Searching")
        setLookUpLoc("")
    }
 
   //stormglass api
   //convert local time to UTC, then call with start and end in UTC
   //
    const lat = loc.location[0]; 
    const tideLat = loc.tideLocation[0];
    const lng = loc.location[1];
    const tideLng = loc.tideLocation[1];

    const utcYear = (new Date()).getUTCFullYear()
    const utcMonth = (new Date()).getUTCMonth() + 1
    const utcDay = (new Date()).getUTCDate()
    const utcHour = (new Date()).getUTCHours()
    console.log(utcHour, 'hour')
    console.log(utcMonth, 'month')

    const utcDate = `${utcYear}-${utcMonth}-${utcDay} 0${utcHour}:00` // format is 0digit:00 if utc hour is less than 10
    console.log(utcDate, "utcDate")

    const start = utcDate






    const date = new Date();
    console.log(date)
    const hour = date.getHours();  
    const day = date.getDate();
    const month = date.getMonth() + 1; //added 1 bc months is 0-based, so 0 in the array would be january
    const year = date.getFullYear()
    const currentDate = `${year}-${month}-${day}`
    //const start = `${currentDate} ${hour}:00`
    //const start = currentDate
    console.log(hour)
    //const histEnd = `2022-8-28 ${hour}:00`;
    const histEnd = `2022-8-28 0${utcHour}:00` //time format is 00:00, need 0 if hour is less than 10

    console.log(histEnd, "end")

    const weatherParams = 'airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,wavePeriod,waveHeight,windDirection,windSpeed,seaLevel'; 
    
    const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}&start=${start}&end=${histEnd}`
    const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&start=${start}&end=${histEnd}`
    const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${tideLat}&lng=${tideLng}&start=${start}&end=${histEnd}`  //tide data relative to local mean sea level (msl) which is included in locationData.json

    const headers = {
        headers: {
            'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
        }
    }  
 /* 
    const requestOne = axios.get(weatherUrl, headers);
    const requestTwo = axios.get(astronomyUrl, headers);
    const requestThree = axios.get(tideUrl, headers);  
    
    useEffect(() => {
        console.log("effect ran")
        axios.all([requestOne, requestTwo, requestThree])
            .then(axios.spread((...res) => { 
                console.log(res[0].data)
                console.log(res[1].data)
                console.log(res[2].data)
            }))
    }, [])  */

    return ( 
        <div className="forecast-background">
            <div className="filler"></div>
            <section className="locSet">
                <div className="top-forecast">
                    <p className="fcDir">{loc.country} / {loc.state} / {loc.county} / {loc.name}</p>
                    <p className="fcTitle">{loc.name} Surf Report & Forecast</p>
                    <p className="fcRating">FAIR</p>

                    <section className="fcData">
                        <div>Tide: feet</div>
                        <div>Wind: knots</div>
                        <div>
                            Swells
                            <p>Primary: </p>
                            <p>Secondary: </p>
                        </div>
                        <div>Water Temp: {waterTempFah}&#8457;</div>
                        <div>
                            Weather
                            <p>Cloud Cover: {cloudCover}%</p>
                            <p>Air Temp: {airTempFah}&#8457;</p>
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

