import React, {useContext} from "react"

import {Context} from "../Context"
import backScene from "../images/forecast-backscene.png"

function SurfForecasts() {
    const {test} = useContext(Context) //test to be replaced by a forecast

    return (
        <div>
            <section>
                <img className="forecast-backscene" src={backScene} alt=""></img>  
                {test}
            </section>

        </div>
    )
}
 
export default SurfForecasts

//add api