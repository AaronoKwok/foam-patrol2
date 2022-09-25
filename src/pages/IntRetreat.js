import React from "react"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function IntRetreat({retreat}) {

    const wherePoints = retreat.where.points
    const spots = retreat.waves.spots
    const intermediate = retreat.waves.int
    const stay = retreat.stay.points
    const rooms = retreat.stay.rooms.points
    const meals = retreat.stay.meals.points
    const included = retreat.stay.included.surf
    const accommodation = retreat.stay.included.accommodation
    const lifestyle = retreat.stay.included.lifestyle

    function makePoints(array) {
        return array.map((bullet, index) => {
            return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {bullet}</p>
        })
    }



    return (
        <div className="retreat-page">
            <div className="retreat-bg-img-position">
                <img className="retreat-backscene" src={retreat.imgs.background} alt=""/>
                <div className="retreat-backscene-text">
                    <div className="retreat-backscene-title">
                        <p className="retreat-title">{retreat.location}</p>
                        <p className="retreat-backscene-subtitle">{retreat.where.imgTitle}</p>

                    </div>
                </div>
            </div>
            <section>
                <p>Where:</p>
                <p>{retreat.where.title}</p>
                <p>{retreat.where.subtitle}</p>
                <p>{retreat.where.des}</p>
                <div className="main-info-bullets">
                    {makePoints(wherePoints)}
                </div>
            </section>
            <section>
                <p>{retreat.typical.des}</p>
            </section>
            <section>
                <p>Intermediate to Advanced Spots</p>
                <p>{retreat.waves.des}</p>
                <div className="main-info-bullets">
                    {makePoints(spots)}
                </div>
                <p>{retreat.waves.note}</p>
                <p>Intermediate Spots</p>
                <p>{retreat.waves.intNote}</p>
                <div className="main-info-bullets">
                    {makePoints(intermediate)}
                </div>
            </section>
            <section>
                <p>{retreat.stay.method}</p>
                <p>{retreat.stay.des}</p>
                <div className="main-info-bullets">
                    {makePoints(stay)}
                </div>
                <p>Rooms:</p>
                <p>{retreat.stay.rooms.des}</p>
                <div className="main-info-bullets">
                    {makePoints(rooms)}
                </div>
                <p>Meals:</p>
                <p>{retreat.stay.meals.des}</p>
                <div className="main-info-bullets">
                    {makePoints(meals)}
                </div>
                <p>{retreat.stay.meals.note}</p>
            </section>
            <p>Included:</p>
            <section>
                <p>Surf</p>
                <div className="main-info-bullets">
                    {makePoints(included)}
                </div>
                <p>Accommodation</p>
                <div className="main-info-bullets">
                    {makePoints(accommodation)}
                </div>
                <p>Lifestyle</p>
                <div className="main-info-bullets">
                    {makePoints(lifestyle)}
                </div>
            </section>
        </div>
    )
}

export default IntRetreat