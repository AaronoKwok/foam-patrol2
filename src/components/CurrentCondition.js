import React, {useContext, useEffect} from "react" 
import {Link} from "react-router-dom" 
import Loading from "./Loading"
import {Context} from "../Context"

import {
    determineHeight,
    zeroTide,
    upOrDown
} from "../utils"

import point from "../assets/images/conditionPoint.jpeg"
import mar from "../assets/images/conditionMar.jpeg" 
import hb from "../assets/images/conditionHb.jpeg" 
import waikiki from "../assets/images/conditionWaikiki.jpeg"
import seaIcon from "../assets/images/seaIcon.svg"
import up from "../assets/images/up.jpeg"
import down from "../assets/images/down.jpeg"

function CurrentCondition({loc}) {
    //console.log(loc.timezone , "mp")
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
        pointTideType,
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
        marTideType,
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
        hbTideType, 
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
        waikikiTideType,
        getMPData
    } = useContext(Context)
    
    useEffect(() => {
        //console.log("main page retrieving data...")
        //getMPData(loc)
        // eslint-disable-next-line
    }, [])

    function findData() {
        //console.log(pointLoaded)
        if (loc.name === "Pleasure Point") {
            if (pointLoaded === true) {
                return <div className="">
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
                                    <p className="condition-sea">{pointWaterTemp}<span className="condition-deg">&#176;f</span></p> 
                                </div>
                                <p>Tide: {zeroTide(pointTideHeight)}<span className="condition-feet">ft</span><span><img className="up-down-cond" src={upOrDown(pointTideType) ? up : down} alt =""/></span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(pointCloud, pointPrecip, pointVis, pointFirstLight, pointLastLight)} alt="" />
                                    <p className="condition-temp">{pointAirTemp}<span className="condition-deg">&#176;f</span></p> 
                                </div>
                                
                            </div>
                        </div>
            } else {
                return <div className="main-condition-not-loaded">
                            <p style={{margin:"0"}}>checking the waves</p>
                            <Loading />
                        </div>
            }
        } else if (loc.name === "Pacifica/Linda Mar") {
            if (marLoaded === true) {
                return <div className="">
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
                                    <p className="condition-sea">{marWaterTemp}<span className="condition-deg">&#176;f</span></p> 
                                </div>
                                <p>Tide: {zeroTide(marTideHeight)}<span className="condition-feet">ft</span><span><img className="up-down-cond" src={upOrDown(marTideType) ? up : down} alt =""/></span></p>  
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(marCloud, marPrecip, marVis, marFirstLight, marLastLight)} alt="" />
                                    <p className="condition-temp">{marAirTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
                                
                            </div>
                        </div> 
            } else {
                return <div className="main-condition-not-loaded">
                            <p style={{margin:"0"}}>checking the waves</p>
                            <Loading />
                        </div>
            }
        } else if (loc.name === "HB Pier") {
            if (hbLoaded === true) {
                return <div className="">
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
                                    <p className="condition-sea">{hbWaterTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
                                <p>Tide: {zeroTide(hbTideHeight)}<span className="condition-feet">ft</span><span><img className="up-down-cond" src={upOrDown(hbTideType) ? up : down} alt =""/></span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(hbCloud, hbPrecip, hbVis, hbFirstLight, hbLastLight)} alt="" />
                                    <p className="condition-temp">{hbAirTemp}<span className="condition-deg">&#176;f</span></p>  
                                </div>
                                
                            </div>
                        </div> 
            } else {
                return <div className="main-condition-not-loaded">
                            <p style={{margin:"0"}}>checking the waves</p>
                            <Loading />
                        </div>
            }
        } else if (loc.name === "Waikiki Beach") {
            if (waikikiLoaded === true) {
                return <div className="">
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
                                    <p className="condition-sea">{waikikiWaterTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
                                <p>Tide: {zeroTide(waikikiTideHeight)}<span className="condition-feet">ft</span><span><img className="up-down-cond" src={upOrDown(waikikiTideType) ? up : down} alt =""/></span></p>
                                <div className="condition-weather">
                                    <img className="weather-icon-condition" src={findSky(waikikiCloud, waikikiPrecip, waikikiVis, waikikiFirstLight, waikikiLastLight)} alt="" />
                                    <p className="condition-temp">{waikikiAirTemp}<span className="condition-deg">&#176;f</span></p>
                                </div>
                            </div>
                        </div> 
            } else {
                return <div className="main-condition-not-loaded">
                            <p style={{margin:"0"}}>checking the waves</p>
                            <Loading />
                        </div>
            }
        }
    }

    return (
        <Link className="link-hover main-condition-loaded" to={loc.link}>
            {findData()}
        </Link>
    )
}

export default CurrentCondition