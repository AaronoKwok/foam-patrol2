import React from "react" 

import useWindowWidth from "../hooks/useWindowWidth"
import marWave from "../assets/images/margarita-salyek-wave.png"

import BacksceneText from "./BacksceneText" 

function BackScene() {
    return (
        <div>
            {
               (useWindowWidth()) && 
               <div className="background">
                    <img className="background-image-mobile" src={marWave} alt="" />
                    <BacksceneText />                
                </div>
            }
            {
                (!useWindowWidth()) &&
                <div className="background">
                    <img className="background-image" src={marWave} alt="" />
                    <BacksceneText />                
                </div>
            }
        </div>
        
    )
}

export default BackScene;
