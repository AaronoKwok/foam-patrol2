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
        console.log(loc, "mp retrieving data...")
        getData(loc)
    }, [])


    return (
        <Link className="link-hover" to={loc.link}>
            
            { loaded && 
                <div className="main-condition">
                    <div className="condition-div">
                        <p className="main-condition-fetch">fetching data...</p>
                        <img src={findSky(cloudCover, precipitation, visibility, firstLight, lastLight)} alt="" />
                        <p>{airTemp}</p>
                        <p>{determineHeight(waveHeight)}</p>
                        <p>{zeroTide(tideHeight)}</p>
                        <p>{waterTemperature}</p>
                    </div>
                </div>
            }

            { !loaded && 
                <div className="main-condition">
                    <p>loaded</p>
                </div>
            }

        </Link>
        
    )
}

export default CurrentCondition