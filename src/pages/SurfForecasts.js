import React, {useContext, useEffect} from "react"
import {Context} from "../Context"

//from utils
import {
    isBlue, 
    isFilled, 
    ampm, 
    zeroTide, 
    upOrDown, 
    determineHeight, 
    determineHeightWord
} from "../utils"

//images
import surfHeightIcon from "../images/surfHeight.jpeg"
import swellDirectionIcon from "../images/swellDirection.jpeg"
import tideIcon from "../images/tide.jpeg"
import windIcon from "../images/wind.jpeg"
import seaIcon from "../images/seaIcon.svg"
import up from "../images/up.jpeg"
import down from "../images/down.jpeg"

function SurfForecasts({loc}) {
    console.log(loc.name, "surf forecast comp")

    const spot = loc.name 
    console.log(loc.name)

    const {
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
        findSky,
        getData
    } = useContext(Context)

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

    useEffect(() => {
        console.log("surfforecast effect ran for", loc.name)
        setLoaded(false) //sets loaded back to false when navigating to other forecast without manual page reload
        getData(loc)
    }, [spot])
    /* 
        //NOTE: //when using dependency array as an optimization, 
        make sure the array includes all values from the component 
        scope (such as state and prosps) taht change over time and 
        that are used by the effect. Otherwise, your code will 
        reference stale values from previous renders
    */

    return ( 
        <div className="forecast-background">
            <div className="filler"></div> {/* used to makes space between footer and header */}
            
            <section className="loc-set">

                <div className="top-forecast">
                    <p className="fcDir">{loc.country} / {loc.state} / {loc.county} / {loc.name}</p>
                    <p className="fcTitle">{loc.name} Surf Report</p>
                    <p className="fcRating">FAIR</p>

                    {
                        !loaded && 
                            <div className="forecast-load">
                                <p className="loading-text">LOADING. . .</p>
                            </div>
                    }

                    {
                        loaded &&
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
                                    <p className="current-data-point">{calcTide}<span className="data-span">ft</span><span><img className="up-down-arrow" src={upOrDown(tideType) ? up : down} alt =""/></span></p>
                                    <p className="data-description">{tideType} tide {zeroTide(tideHeight)}ft at {ampm(nextTideTime, loc.timezone)}</p>
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
                                    {isBlue(0, loc)}
                                    <p className="levelText">Beg</p>
                                </div>
                                <div className="partLevel">
                                    {isBlue(1, loc)}
                                    <p className="levelText">Int</p>
                                </div>
                                <div className="partLevel">
                                    {isBlue(2, loc)}
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

