import React, {useState, useContext, useEffect} from "react"
import axios from "axios"

//import {Context} from "../Context"


function SurfForecasts({loc}) {
    console.log(loc.location)

    //const {test} = useContext(Context) //test to be replaced by a forecast
    const [lookUpLoc, setLookUpLoc] = useState("")
    const [forecastID, setForecastID] = useState("")

    const [change, setChange] = useState(true)

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
    const hour = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1; //added 1 bc months is 0-based, so 0 in the array would be january
    const year = date.getFullYear()
    const currentDate = `${year}-${month}-${day}`
    const start = `${currentDate} ${hour}:00`
    const end = '2022-8-24 00:00'; //5 days ahead -- needed for astronomy

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
            <p className="test" onClick={changeState}>test</p>
        </div>
    )
}
 
export default SurfForecasts

// can unfamiliar terms link to glossary


           /*  <section className="fc-backscene-img">
                
                <form onSubmit={findLoc} className="fc-backscene-form">
                    <label>
                        <input className="loc-input" required type="text" value={lookUpLoc} onChange={lookChange} placeholder="Search for a surf break - ex:  'North Shore Oahu, HI'"></input>
                    </label>
                    <br />
                    <input className="find-break" type="submit" value="Find a Break" />
                </form>
            </section> */

