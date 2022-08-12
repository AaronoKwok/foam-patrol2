import React, {useContext} from "react"

import {Context} from "../Context"
import backScene from "../images/forecast-backscene.png"

function SurfForecasts() {
    const {test} = useContext(Context) //test to be replaced by a forecast

    return (
        <div>
            <section className="fc-backscene-img">
                <img className="forecast-backscene" src={backScene} alt=""></img>  
                {test}
                <form className="fc-backscene-form">
                    testing
                    <input></input>
                </form>
                
            </section>
            
                <p>forecast</p>
        </div>
    )
}
 
export default SurfForecasts

//add api