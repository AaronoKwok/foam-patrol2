import React, {useState, useContext, useEffect} from "react"
import axios from "axios"

import {Context} from "../Context"
import backScene from "../images/forecast-backscene.png"
import shack from "../images/shackIcon.png"

function SurfForecasts() {
    const {test} = useContext(Context) //test to be replaced by a forecast
    const [lookUpLoc, setLookUpLoc] = useState("")
    const [forecastID, setForecastID] = useState("")

    function lookChange(event) {
        const text = event.target.value
        setLookUpLoc(text)
    }

    function findLoc(event) {
        event.preventDefault();   
        console.log("Searching")
        setLookUpLoc("")
    }


    //test stormglass

    const lat = 36.9562; 
    const lng = -121.9711; 
    const end = '2022-8-22 12:00'; //5 days ahead -- needed for astronomy

    const weatherParams = 'airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,waveDirection,waveHeight'; 
    const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}`

    //const astronomyParams = ''; not needed
    const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&end=${end}`

    /* const solarParams = 'uvIndex' //NOTE: UV index not accurate
    const solarUrl = `https://api.stormglass.io/v2/solar/point?lat=${lat}&lng=${lng}&params=${solarParams}`
 */
    
    const headers = {
        headers: {
            'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
        }
    }

    const requestOne = axios.get(weatherUrl, headers);
    const requestTwo = axios.get(astronomyUrl, headers); 
    
    useEffect(() => {
        axios.all([requestOne, requestTwo])
            .then(axios.spread((...res) => { 
                console.log(res[0].data)
                console.log(res[1].data)
            }))
    }, [])
    


    /* useEffect(() => {
        axios.get(astronomyUrl, {
            headers: {
                'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
            }
        })
            .then(res => { //axios library auto changes response from string to object
                console.log(res.data)
            })
    }, []) */


    /* useEffect(() => {
        fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
            headers: {
                'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
            }
        }).then((res) => res.json()).then((data) => console.log(data))
    }, []) */

   


    return (
        <div>
            <section className="fc-backscene-img">
                <img className="forecast-backscene" src={backScene} alt=""></img>  
                {test}
                <img className="fc-shack" src={shack} alt="" />
                <p className="fc-backscene-title">Know When and Where</p>
                <p className="fc-backscene-p">Check conditions anytime.</p>
                <form onSubmit={findLoc} className="fc-backscene-form">
                    <label>
                        <input className="loc-input" required type="text" value={lookUpLoc} onChange={lookChange} placeholder="Search for a surf break - ex:  'North Shore Oahu, HI'"></input>
                    </label>
                    <br />
                    <input className="find-break" type="submit" value="Find a Break" />
                </form>
            </section>
            <div className="forecastNote">
                <p><span style={{'fontWeight': 'bold', 'textDecoration': 'underline'}}>NOTICE</span>: Currently, surf forecast API providers are not providing API keys, so some surf report data (wave height, wave rating, wind rating, water temperature, status, and swell data) is not real. Other data points (air temperature, local time, sunrise, and sunset data) are taken from weather APIs.</p>
            </div>

            <section className="forecast"> 
                {/* 
                    fill in blank search bar for 50 surfing spots local and far. 
                    - execute onchange function
                    json for surfing location data with initial states change every 30 min.
                    - useeffect timeout
                    hoverable buttons in a div with drop downs to choose from locations 
                    - search locations on weather api, then make up surf spot data
                */}
                <p>forecast</p>
            </section>
            
        </div>
    )
}
 
export default SurfForecasts

// can unfamiliar terms link to glossary


//template report data
/* {
        "id": "", 
        "name": "", 
        "mapImage": "",
        "about": "", 
        "localPhotos": []
        "guide": {
            "abilityLevel": 0, 
            "localVibe": "", 
            "crowdFactor": "", 
            "spotRating": "", 
            "shoulderBurn": "", 
            "waterQuality": "", 
            "hazards": "", 
            "access": "", 
            "bestSeason": "", 
            "bringYour": "", 
            "bottom": "",
            "idealConditions": {
                "swellDirection": "", 
                "wind": "", 
                "surfHeight": "", 
                "tide": ""
            }
        }
    } */

    /* fake data */
    /*  
        - wave height
        - wave rating
        - water temp
        - status
        - swell data: 
            - primary (format: ft at seconds)
            - secondary
            - wind swell
    */

    /* api data */
    /* 
        - air temp
        - sunrise/set
        - first/last light
        - tide
        - local time ??
        - swell ??
        - wave height ??
    */

    /* possible layout: 
        - 
    
    */

