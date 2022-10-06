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
import seaIcon from "../images/seaIcon.svg"

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
                            <div className="condition-img-cont">
                                <img className="place-img" src={point} alt="" />
                                <div className="level-fade-condition">
                                    <p className="condition-img-title">The Point</p>
                                </div>
                            </div>
                            <div className="condition-div">
                                <p>Waves: {determineHeight(pointWaveHeight)}<span className="condition-feet">ft</span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={seaIcon} alt="" />
                                    <p className="condition-temp">{pointWaterTemp}<span className="condition-deg">&#176;f</span></p> 
                                </div>
                                <p>Tide: {zeroTide(pointTideHeight)}<span className="condition-feet">ft</span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(pointCloud, pointPrecip, pointVis, pointFirstLight, pointLastLight)} alt="" />
                                    <p>{pointAirTemp}<span className="condition-deg">&#176;f</span></p> 
                                </div>
                                
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
                            <div className="condition-img-cont">
                                <img className="place-img" src={mar} alt="" />
                                <div className="level-fade-condition">
                                   <p className="condition-img-title">Pacifica</p> 
                                </div>
                            </div>
                            <div className="condition-div">
                                <p>Waves: {determineHeight(marWaveHeight)}<span className="condition-feet">ft</span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={seaIcon} alt="" />
                                    <p className="condition-temp">{marWaterTemp}<span className="condition-deg">&#176;f</span></p> 
                                </div>
                                <p>Tide: {zeroTide(marTideHeight)}<span className="condition-feet">ft</span></p>  
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(marCloud, marPrecip, marVis, marFirstLight, marLastLight)} alt="" />
                                    <p>{marAirTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
                                
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
                            <div className="condition-img-cont">
                                <img className="place-img" src={hb} alt="" />
                                <div className="level-fade-condition">
                                    <p className="condition-img-title">Huntington</p>
                                </div>
                            </div>
                            <div className="condition-div">
                                <p>Waves: {determineHeight(hbWaveHeight)}<span className="condition-feet">ft</span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={seaIcon} alt="" />
                                    <p className="condition-temp">{hbWaterTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
                                <p>Tide: {zeroTide(hbTideHeight)}<span className="condition-feet">ft</span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(hbCloud, hbPrecip, hbVis, hbFirstLight, hbLastLight)} alt="" />
                                    <p>{hbAirTemp}<span className="condition-deg">&#176;f</span></p>  
                                </div>
                                
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
                            <div className="condition-img-cont">
                                <img className="place-img" src={waikiki} alt=""/>
                                <div className="level-fade-condition">
                                    <p className="condition-img-title">Waikiki</p>
                                </div>
                            </div>
                            <div className="condition-div">
                                <p>Waves: {determineHeight(waikikiWaveHeight)}<span className="condition-feet">ft</span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={seaIcon} alt="" />
                                    <p className="condition-temp">{waikikiWaterTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
                                <p>Tide: {zeroTide(waikikiTideHeight)}<span className="condition-feet">ft</span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(waikikiCloud, waikikiPrecip, waikikiVis, waikikiFirstLight, waikikiLastLight)} alt="" />
                                    <p>{waikikiAirTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
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