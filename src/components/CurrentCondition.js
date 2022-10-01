import React, {useContext, useEffect} from "react" 
import {Link} from "react-router-dom" 

import {Context} from "../Context"

import {
    determineHeight,
    zeroTide,
} from "../utils"

function CurrentCondition({loc}) {
    console.log(loc.name, "mp")
    const {
        loaded, 
        airTemp, 
        cloudCover, 
        precipitation, 
        visibility,
        waveHeight, 
        tideHeight, 
        findSky,
        firstLight, 
        lastLight, 
        waterTemperature,
        getData
    } = useContext(Context)
    
    useEffect(() => {
        console.log("mp retrieving data...")
        //getData(loc)
    }, [])


    return (
        <Link className="link-hover" to={loc.link}>
            
            { loaded && 
                <div className="main-condition">
                    <div className="condition-div">
                        <p className="main-condition-fetch">fetching data...</p>
                        <img className="weather-icon" src={findSky(cloudCover, precipitation, visibility, firstLight, lastLight)} alt="" />
                        <p>{airTemp} air</p>
                        <p>{determineHeight(waveHeight)} wave</p>
                        <p>{zeroTide(tideHeight)} tide</p>
                        <p>{waterTemperature} water</p>
                    </div>
                </div>
            }

            { !loaded && 
                <div className="main-condition">
                    <p>loading...</p>
                </div>
            }

        </Link>
        
    )
}

export default CurrentCondition