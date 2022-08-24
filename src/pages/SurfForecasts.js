import React, {useState, useEffect} from "react"
import axios from "axios"

import weatherData from "../Data/weatherData.json" 
import tideData from "../Data/tideData.json"
import astData from "../Data/astData.json"

//import {Context} from "../Context" //imports context object exported from Context.js


function SurfForecasts({loc}) {
    
    //const {testVar} = useContext(Context)//useContext hook takes the context object from Context.js and provides its data
    const [lookUpLoc, setLookUpLoc] = useState("")
    const [forecastID, setForecastID] = useState("")
    
    const [change, setChange] = useState(true)

    /* ability level */

    function isBlue(lvl) {
        const levelArr = loc.guide.abilityLevel.level;
        if(levelArr[lvl]) {
            return <div className="levelYesHighlight"></div>
        } else {
            return <div className="levelNoHighlight"></div>
        }
    }



    /* end ability level */

    function changeState() {
        setChange(!change)
    }

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
    const lat = loc.location[0]; 
    const lng = loc.location[1];
    const date = new Date();
    console.log(date)
    const hour = date.getHours();  
    const day = date.getDate();
    const month = date.getMonth() + 1; //added 1 bc months is 0-based, so 0 in the array would be january
    const year = date.getFullYear()
    const currentDate = `${year}-${month}-${day}`
    const start = `${currentDate} ${hour-3}:00`
    console.log(currentDate)
    const end = '2022-8-28 00:00'; //5 days ahead -- needed for astronomy
    const histEnd = `2022-8-28 ${hour-3}:00`;

    const weatherParams = 'airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,wavePeriod,waveHeight,windDirection,windSpeed,seaLevel'; 
    
    const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}&start=${start}&end=${histEnd}`
    const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&start=${start}&end=${histEnd}`
    const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=${start}&end=${histEnd}`  //tide data relative to local mean sea level (msl) which is included in locationData.json
    //const seaLvlUrl = `https://api.stormglass.io/v2/tide/sea-level/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}`

    const headers = {
        headers: {
            'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
        }
    } 
 
/*  const requestOne = axios.get(weatherUrl, headers);
    const requestTwo = axios.get(astronomyUrl, headers);
    const requestThree = axios.get(tideUrl, headers);  
    //const requestFour = axios.get(seaLvlUrl, headers);
    
    useEffect(() => {
        console.log("effect ran")
        axios.all([requestOne, requestTwo, requestThree])
            .then(axios.spread((...res) => { 
                console.log(res[0].data)
                console.log(res[1].data)
                console.log(res[2].data)
                //console.log(res[3].data)
                // assign data to state 
            }))
    }, []) */ 

   


    return (
        <div>
            {/* <p className="test" onClick={changeState}>test</p> */}
            <div className="filler"></div>
            <section className="locSet">
                <p className="fcDir">{loc.country} / {loc.state} / {loc.county} / {loc.name}</p>
                <p className="fcTitle">{loc.name} Surf Report & Forecast</p>
                <p className="fcRating">FAIR</p>
                <div className="fcData">

                </div>
                <div>
                    <p>Ideal {loc.name} Surf Conditions</p>
                </div>
                <div className="fcGuide">
                    <p>{loc.name} Surf Guide</p>
                    <p>{loc.about}</p>
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
                                <div>
                                    level
                                </div>
                                <p className="guideDes">{loc.guide.spotRating.description}</p>
                            </div>
                        </section>
                        <section className="localShoulder">
                            <div className="guideContainer">
                                <p className="guideName">Local Vibe</p>
                                <p className="guideTitle">{loc.guide.localVibe.title}</p>
                                <div>
                                    level
                                </div>
                                <p className="guideDes">{loc.guide.localVibe.description}</p>
                            </div>
                            <div className="guideContainer">
                                <p className="guideName">Shoulder Burn</p>
                                <p className="guideTitle">{loc.guide.shoulderBurn.title}</p>
                                <div>
                                    level
                                </div>
                                <p className="guideDes">{loc.guide.shoulderBurn.description}</p>
                            </div>
                        </section>
                        <section className="crowdWater">                            
                            <div className="guideContainer">
                                <p className="guideName">Crowd Factor</p>
                                <p className="guideTitle">{loc.guide.crowdFactor.title}</p>
                                <div>
                                    level
                                </div>
                                <p className="guideDes">{loc.guide.crowdFactor.description}</p>
                            </div>
                            <div className="guideContainer">
                                <p className="guideName">Water Quality</p>
                                <p className="guideTitle">{loc.guide.waterQuality.title}</p>
                                <div>
                                    level
                                </div>
                                <p className="guideDes">{loc.guide.waterQuality.description}</p>
                            </div>
                        </section>
                    </div>
                    <div className="addiPoints">
                        <section className="hazAccBest">
                            <p>Hazards</p>
                            <p>{loc.guide.hazards}</p>
                            <p>Access</p>
                            <p>{loc.guide.access}</p>
                            <p>Best Season</p>
                            <p>{loc.guide.bestSeason}</p>
                        </section>
                        <section className="bringBottom">
                            <p>Bring Your</p>
                            <p>{loc.guide.bringYour}</p>
                            <p>Bottom</p>
                            <p>{loc.guide.bottom}</p>
                        </section>
                    </div>

                </div>
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

