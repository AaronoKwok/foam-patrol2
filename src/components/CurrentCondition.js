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
        findSky, 
        pointLoaded, 
        pointAirTemp, 
        pointCloud, 
        pointPrecip, 
        pointVis, 
        pointWaveHeight, 
        pointTideHeight, 
        pointFirstLight, 
        pointLastLight, 
        pointWaterTemp, 
        marLoaded, 
        marAirTemp, 
        marCloud, 
        marPrecip, 
        marVis, 
        marWaveHeight, 
        marTideHeight, 
        marFirstLight, 
        marLastLight, 
        marWaterTemp, 
        hbLoaded, 
        hbAirTemp, 
        hbCloud, 
        hbPrecip, 
        hbVis, 
        hbWaveHeight, 
        hbTideHeight, 
        hbFirstLight, 
        hbLastLight, 
        hbWaterTemp, 
        waikikiLoaded, 
        waikikiAirTemp, 
        waikikiCloud, 
        waikikiPrecip, 
        waikikiVis, 
        waikikiWaveHeight, 
        waikikiTideHeight, 
        waikikiFirstLight, 
        waikikiLastLight, 
        waikikiWaterTemp,
        getMPData
    } = useContext(Context)
    
    useEffect(() => {
        console.log("mp retrieving data...")
        
        getMPData(loc)
    }, [])

    function findData() {
        if (loc.name === "Pleasure Point") {
            if (pointLoaded === true) {
                return <div className="main-condition">
                            <div className="condition-div">
                                <img className="weather-icon" src={findSky(pointCloud, pointPrecip, pointVis, pointFirstLight, pointLastLight)} alt="" />
                                <p>{pointAirTemp} air</p>
                                <p>{determineHeight(pointWaveHeight)} wave</p>
                                <p>{zeroTide(pointTideHeight)} tide</p>
                                <p>{pointWaterTemp} water</p>
                            </div>
                        </div>
            } else {
                return <div className="main-condition">
                            <p>loading...</p>
                        </div>
            }
        } else if (loc.name === "Pacifica/Linda Mar") {
            if (marLoaded === true) {
                return <div className="main-condition">
                            <div className="condition-div">
                                <img className="weather-icon" src={findSky(marCloud, marPrecip, marVis, marFirstLight, marLastLight)} alt="" />
                                <p>{marAirTemp} air</p>
                                <p>{determineHeight(marWaveHeight)} wave</p>
                                <p>{zeroTide(marTideHeight)} tide</p>
                                <p>{marWaterTemp} water</p>
                            </div>
                        </div> 
            } else {
                return <div className="main-condition">
                            <p>loading...</p>
                        </div>
            }
        } else if (loc.name === "HB Pier") {
            if (hbLoaded === true) {
                return <div className="main-condition">
                            <div className="condition-div">
                                <img className="weather-icon" src={findSky(hbCloud, hbPrecip, hbVis, hbFirstLight, hbLastLight)} alt="" />
                                <p>{hbAirTemp} air</p>
                                <p>{determineHeight(hbWaveHeight)} wave</p>
                                <p>{zeroTide(hbTideHeight)} tide</p>
                                <p>{hbWaterTemp} water</p>
                            </div>
                        </div> 
            } else {
                return <div className="main-condition">
                            <p>loading...</p>
                        </div>
            }
        } else if (loc.name === "Waikiki Beach") {
            if (waikikiLoaded === true) {
                return <div className="main-condition">
                            <div className="condition-div">
                                <img className="weather-icon" src={findSky(waikikiCloud, waikikiPrecip, waikikiVis, waikikiFirstLight, waikikiLastLight)} alt="" />
                                <p>{waikikiAirTemp} air</p>
                                <p>{determineHeight(waikikiWaveHeight)} wave</p>
                                <p>{zeroTide(waikikiTideHeight)} tide</p>
                                <p>{waikikiWaterTemp} water</p>
                            </div>
                        </div> 
            } else {
                return <div className="main-condition">
                            <p>loading...</p>
                        </div>
            }
        }
    }

    return (
        <Link className="link-hover" to={loc.link}>
            {findData()}
        </Link>
        
    )
}

export default CurrentCondition