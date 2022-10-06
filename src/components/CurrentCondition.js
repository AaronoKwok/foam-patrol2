import React, {useContext, useEffect} from "react" 
import {Link} from "react-router-dom" 

import {Context} from "../Context"

import {
    determineHeight,
    zeroTide,
} from "../utils"

import point from "../images/conditionPoint.jpeg"
import mar from "../images/conditionMar.jpeg" 
import hb from "../images/conditionHb.jpeg" 
import waikiki from "../images/conditionWaikiki.jpeg"

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
        //getMPData(loc)
    }, [])

    function findData() {
        console.log(pointLoaded)
        if (loc.name === "Pleasure Point") {
            if (pointLoaded === false) {
                return <div className="main-condition-loaded">
                            <div>
                                <img className="place-img" src={point} alt="" />
                                <div className="level-fade">
                                    <p>The Point</p>
                                </div>
                            </div>
                            <div className="condition-div">
                                <p>{determineHeight(pointWaveHeight)}ft</p>
                                <p>{zeroTide(pointTideHeight)}ft</p>
                                <p>{pointWaterTemp}&#176;f</p>
                                <img className="weather-icon-condition" src={findSky(pointCloud, pointPrecip, pointVis, pointFirstLight, pointLastLight)} alt="" />
                                <p>{pointAirTemp}&#176;f</p>
                            </div>
                        </div>
            } else {
                return <div className="main-condition-not-loaded">
                            <p>CONDITIONS LOADING. . .</p>
                        </div>
            }
        } else if (loc.name === "Pacifica/Linda Mar") {
            if (marLoaded === false) {
                return <div className="main-condition-loaded">
                            <div>
                                <img className="place-img" src={mar} alt="" />
                                <div className="level-fade">
                                   <p>Pacifica</p> 
                                </div>
                            </div>
                            <div className="condition-div">
                                <p>{determineHeight(marWaveHeight)}ft</p>
                                <p>{zeroTide(marTideHeight)}ft</p>
                                <p>{marWaterTemp}&#176;f</p>   
                                <img className="weather-icon-condition" src={findSky(marCloud, marPrecip, marVis, marFirstLight, marLastLight)} alt="" />
                                <p>{marAirTemp}&#176;f</p>
                            </div>
                        </div> 
            } else {
                return <div className="main-condition-not-loaded">
                            <p>CONDITIONS LOADING. . .</p>
                        </div>
            }
        } else if (loc.name === "HB Pier") {
            if (hbLoaded === false) {
                return <div className="main-condition-loaded">
                            <div>
                                <img className="place-img" src={hb} alt="" />
                                <div className="level-fade">
                                    <p>Huntington</p>
                                </div>
                                
                            </div>
                            <div className="condition-div">
                                <p>{determineHeight(hbWaveHeight)}ft</p>
                                <p>{zeroTide(hbTideHeight)}ft</p>
                                <p>{hbWaterTemp}&#176;f</p>
                                <img className="weather-icon-condition" src={findSky(hbCloud, hbPrecip, hbVis, hbFirstLight, hbLastLight)} alt="" />
                                <p>{hbAirTemp}&#176;f</p>
                            </div>
                        </div> 
            } else {
                return <div className="main-condition-not-loaded">
                            <p>CONDITIONS LOADING. . .</p>
                        </div>
            }
        } else if (loc.name === "Waikiki Beach") {
            if (waikikiLoaded === false) {
                return <div className="main-condition-loaded">
                            <div>
                                <img className="place-img" src={waikiki} alt=""/>
                                <div className="level-fade">
                                    <p>Waikiki</p>
                                </div>
                            </div>
                            <div className="condition-div">
                                <p>{determineHeight(waikikiWaveHeight)}ft</p>
                                <p>{zeroTide(waikikiTideHeight)}ft</p>
                                <p>{waikikiWaterTemp}&#176;f</p>
                                <img className="weather-icon-condition" src={findSky(waikikiCloud, waikikiPrecip, waikikiVis, waikikiFirstLight, waikikiLastLight)} alt="" />
                                <p>{waikikiAirTemp}&#176;f</p>
                            </div>
                        </div> 
            } else {
                return <div className="main-condition-not-loaded">
                            <p>CONDITIONS LOADING. . .</p>
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