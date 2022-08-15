import React, {useState, useContext} from "react"

import {Context} from "../Context"
import backScene from "../images/forecast-backscene.png"
import shack from "../images/shackIcon.png"

function SurfForecasts() {
    const {test} = useContext(Context) //test to be replaced by a forecast
    const [lookUpLoc, setLookUpLoc] = useState("")

    function lookChange(event) {
        const text = event.target.value
        setLookUpLoc(text)
    }

    function findLoc(event) {
        event.preventDefault();
        console.log("Searching")
        setLookUpLoc("")
    }

    return (
        <div>
            <section className="fc-backscene-img">
                <img className="forecast-backscene" src={backScene} alt=""></img>  
                {test}
                <img className="fc-shack" src={shack} alt="" />
                <p className="fc-backscene-title">Know When and Where</p>
                <p className="fc-backscene-p">Check current conditions anytime.</p>
                <form onSubmit={findLoc} className="fc-backscene-form">
                    <label>
                        <input className="loc-input" required type="text" value={lookUpLoc} onChange={lookChange} placeholder="Search for a surf break - ex:  'North Shore Oahu, HI'"></input>
                    </label>
                    <br />
                    <input className="find-break" type="submit" value="Find a Break" />
                </form>
            </section>

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

//add api