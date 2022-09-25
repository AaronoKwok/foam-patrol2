import React from "react"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function SurfRetreat({retreat}) {

    const wherePoints = retreat.loc.bullets
    const discoverPoints = retreat.discoverDestination
    const accommodationPoints = retreat.accommodations.points
    const surfPoints = retreat.surfInfo.surfSpots

    function makePoints(array) {
        return array.map((bullet, index) => {
            return  <p className="info-space"><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {bullet}</p>
        })
    }

    function tempRange() {
        const tempArr = retreat.surfInfo.temp.airTemp
        function getF(cel) {
            return Math.floor(((cel * (9/5)) + 32))
        }
        return `${getF(tempArr[0])}-${getF(tempArr[1])}`
    }

    return (
        <div>
            <div className="retreat-bg-img-position">
                <img className="retreat-backscene" src={retreat.backgroundImg} alt=""/>
                <div className="retreat-backscene-text">
                    <div className="retreat-backscene-title">
                        <p className="retreat-title">{retreat.backgroundTitle}</p>
                        <p className="retreat-backscene-subtitle">{retreat.backgroundDes}</p>
                    </div>
                </div>
            </div>
            <div className="retreat-width">

                <section className="holder">
                    <div>
                        <p className="retreat-header">Surf trip in {retreat.loc.title}</p>
                        <p>{retreat.loc.description}</p>
                        <div className="main-info-bullets">
                            {makePoints(wherePoints)}
                        </div>
                    </div>
                    <img className="img-left" src={retreat.whereImg} alt=""/>
                </section>

                <section className="holder">
                    <img className="right-img" src={retreat.typicalImg} alt=""/>
                    <div>
                        <p className="retreat-header">A Typical Day </p>
                        <p>{retreat.typicalDayDes}</p> 
                    </div> 
                </section>

                <section className="holder">
                    <div>
                        <p className="retreat-header">Destination(s)</p>
                        <p className="destination">{retreat.liveAt[0].destination}:</p>
                        <p className="des-des">{retreat.liveAt[0].description}</p>
                        {
                            retreat.liveAt.length > 1 && 
                                <div>
                                    <p className="destination">{retreat.liveAt[1].destination}:</p>
                                    <p className="des-des">{retreat.liveAt[1].description}</p>
                                </div> 
                        }
                        <p>Other nearby places to explore:</p>
                        <div className="main-info-bullets">
                            {makePoints(discoverPoints)}
                        </div>
                    </div>
                    
                    <img className="img-left" src={retreat.map} alt=""/>
                </section>

                <section className="holder">
                    <img className="right-img" src={retreat.accImg} alt=""></img>
                    <div>
                        <p className="retreat-header">Accommodations</p>
                        <p>{retreat.accommodations.des}</p>
                        <div className="main-info-bullets">
                            {makePoints(accommodationPoints)}
                        </div>
                    </div>
                    
                </section>

                <section className="holder">
                    <div className="info-left">
                            <p className="retreat-header">Surf Information</p>
                            <p className="destination">Surf Overview</p>
                            <p className="des-des">{retreat.surfInfo.overview}</p>
                            <p className="destination">Surf Conditions</p>
                            <p className="des-des">{retreat.surfInfo.typical}</p>
                    </div>
                    
                    <section className="info-diagram">
                        <div className="info-swell info-spec">
                            <p className="info-title">SEASON</p>
                            <div className="info-info">
                                <p className="info-pair"><span className="info-span">Swell Season: </span>{retreat.surfInfo.season.swell}</p>
                                <p className="info-pair"><span className="info-span">Larger Waves: </span>{retreat.surfInfo.season.bigger}</p> 
                            </div>
                        </div>
                        <div className="info-waves info-spec">
                            <p className="info-title">TYPICAL DAY</p>
                            <div className="info-info">
                                <p className="info-pair"><span className="info-span">Waves: </span>{retreat.surfInfo.day.waves} ft</p>
                                <p className="info-pair"><span className="info-span">Winds: </span>{retreat.surfInfo.day.winds}</p>
                            </div>
                        </div>
                        <div className="info-temp info-spec">
                            <p className="info-title">TEMPERATURE</p>
                            <div className="info-info">
                                <p className="info-pair"><span className="info-span">Air Temp: </span>{tempRange()}&#176;f</p>
                                <p className="info-pair"><span className="info-span">Rainy Season: </span>{retreat.surfInfo.temp.rain}</p>
                            </div>  
                        </div>
                        <div className="info-skill info-spec">
                            <p className="info-title">SKILL LEVEL</p>
                            <p className="info-lvl">{retreat.surfInfo.skillLvl}</p>
                        </div>
                        <div className="info-spots info-spec">
                            <p className="info-title">SURF SPOTS</p>
                            <div className="info-info">
                                {makePoints(surfPoints)}
                            </div>
                        </div>
                    </section>
                    
                </section>
                
            </div>
            
        </div>
    )
}

export default SurfRetreat 