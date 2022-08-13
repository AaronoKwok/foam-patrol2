import React, {useState, useContext} from "react"

import {Context} from "../Context"
import backScene from "../images/forecast-backscene.png"

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
                <p className="fc-backscene-title">Know When and Where to Surf</p>
                <form onSubmit={findLoc} className="fc-backscene-form">
                    <label>
                        <input className="loc-input" required type="text" value={lookUpLoc} onChange={lookChange} placeholder=" 'North Shore, Oahu'"></input>
                    </label>
                    <input className="find-break" type="submit" value="Go" />
                </form>
                
            </section>
            
                <p>forecast</p>
        </div>
    )
}
 
export default SurfForecasts

//add api