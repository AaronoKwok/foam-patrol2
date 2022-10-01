import React, {useContext, useEffect} from "react" 
import {Link} from "react-router-dom" 

import {Context} from "../Context"

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
        //getData(loc)
    }, [])


    return (
        <Link className="link-hover" to={loc.link}>
            <div>

            { !loaded && 
                <div className="main-condition">
                    <p>fetching data...</p>
                </div>
            }

            { loaded && 
                <div className="main-condition">
                    <p>loaded</p>
                </div>
            }

        </div>
        </Link>
        
    )
}

export default CurrentCondition