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

    //stormglass api
    const lat = ""; 
    const lng = ""; 
    const start = '2022-8-17 00:00'
    const end = '2022-8-28 00:00'; //5 days ahead -- needed for astronomy

    const weatherParams = 'airTemperature,cloudCover,gust,precipitation,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,waterTemperature,wavePeriod,waveHeight,windDirection,windSpeed'; 
    
    const weatherUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${weatherParams}`
    const astronomyUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&end=${end}`
    const tideUrl = `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}`
    
    const headers = {
        headers: {
            'Authorization': '62822fc8-1452-11ed-8cb3-0242ac130002-62823040-1452-11ed-8cb3-0242ac130002'
        }
    }

   /*  const requestOne = axios.get(weatherUrl, headers);
    const requestTwo = axios.get(astronomyUrl, headers);
    const requestThree = axios.get(tideUrl, headers);  */
    
    /* useEffect(() => {
        axios.all([requestOne, requestTwo, requestThree])
            .then(axios.spread((...res) => { 
                console.log(res[0].data)
                console.log(res[1].data)
                console.log(res[2].data)
            }))
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

            <section className="forecast"> 
                <p>forecast</p>
            </section>
            
        </div>
    )
}
 
export default SurfForecasts

// can unfamiliar terms link to glossary

