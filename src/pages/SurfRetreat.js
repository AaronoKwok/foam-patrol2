import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function SurfRetreat({retreat}) {
    return (
        <div className="retreat-page">
            <div className="retreat-bg-img-position">
                <img className="retreat-backscene" src={retreat.backgroundImg} alt=""/>
                <div className="retreat-backscene-text">
                    <div className="retreat-backscene-title">
                        <p className="retreat-title">{retreat.backgroundTitle}</p>
                        <p className="retreat-backscene-subtitle">{retreat.backgroundDes}</p>
                    </div>
                </div>
            </div>
            <section>
                <p>Where:</p>
                <p>Surf trip in {retreat.loc.title}</p>
                <p>{retreat.loc.description}</p>
                <div className="main-info-bullets">
                    {retreat.loc.bullets.map((bullet, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {bullet}</p>
                    })}
                </div>
            </section>
            <section>
                <p>Typical Day: </p>
                <p>{retreat.typicalDayDes}</p>
            </section>
            <section>
                <p>Destination(s):</p>
                <img className="retreat-map" src={retreat.map} alt=""/>
                <p>{retreat.liveAt[0].destination}</p>
                <p>{retreat.liveAt[0].description}</p>
                {
                    retreat.liveAt.length > 1 && 
                        <div>
                            <p>{retreat.liveAt[1].destination}</p>
                            <p>{retreat.liveAt[1].description}</p>
                        </div> 
                }
                <p>Other nearby places to explore:</p>
                <div className="main-info-bullets">
                    {retreat.discoverDestination.map((destination, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {destination}</p>
                    })}
                </div>
            </section>
            <section>
                <p>Accommodations:</p>
                <p>{retreat.accommodations.des}</p>
                <div className="main-info-bullets">
                    {retreat.accommodations.points.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
            </section>
            <section>
                <p>Surf Information:</p>
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
                        {retreat.surfInfo.surfSpots.map((spot, index) => {
                            return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {spot}</p>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SurfRetreat 