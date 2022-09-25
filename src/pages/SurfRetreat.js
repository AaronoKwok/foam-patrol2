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
            return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {bullet}</p>
        })
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

                <section>
                    <p className="retreat-header">Surf Information</p>
                    <p>Surf Overview</p>
                    <p>{retreat.surfInfo.overview}</p>
                    <p>Surf Conditions</p>
                    <p>{retreat.surfInfo.typical}</p>
                    <div>
                        <p>Swell Season: {retreat.surfInfo.season.swell}</p>
                        <p>Larger Waves: {retreat.surfInfo.season.bigger}</p>
                    </div>
                    <div>
                        <p>Waves: {retreat.surfInfo.day.waves}</p>
                        <p>Winds: {retreat.surfInfo.day.winds}</p>
                    </div>
                    <div>
                        <p>Air Temp: {retreat.surfInfo.temp.airTemp}</p>
                        <p>Rainy Season: {retreat.surfInfo.temp.rain}</p>
                    </div>
                    <div>
                        <p>Skill Level: include func()</p>
                    </div>
                    <div>
                        <p>Surf Spots:</p>
                        <div className="main-info-bullets">
                            {makePoints(surfPoints)}
                        </div>
                    </div>
                </section>
                
            </div>
            
        </div>
    )
}

export default SurfRetreat 