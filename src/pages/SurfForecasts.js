import React from "react"

import backScene from "../images/forecast-backscene.png"

function surfForecasts() {
    return (
        <div>
            <section>
                <img className="forecast-backscene" src={backScene} alt=""></img>  
            </section>

        </div>
    )
}
 
export default surfForecasts

//add api