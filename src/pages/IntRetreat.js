import React from "react"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function IntRetreat({retreat}) {









    
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
                    {retreat.where.points.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
            </section>
            <section>
                <p>{retreat.typical.des}</p>
            </section>
            <section>
                <p>Intermediate to Advanced Spots</p>
                <p>{retreat.waves.des}</p>
                <div className="main-info-bullets">
                    {retreat.waves.spots.map((spot, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {spot}</p>
                    })}
                </div>
                <p>{retreat.waves.note}</p>
                <p>Intermediate Spots</p>
                <p>{retreat.waves.intNote}</p>
                <div className="main-info-bullets">
                    {retreat.waves.spots.map((spot, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {spot}</p>
                    })}
                </div>
            </section>
            <section>
                <p>{retreat.stay.method}</p>
                <p>{retreat.stay.des}</p>
                <div className="main-info-bullets">
                    {retreat.stay.points.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
                <p>Rooms:</p>
                <p>{retreat.stay.rooms.des}</p>
                <div className="main-info-bullets">
                    {retreat.stay.rooms.points.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
                <p>Meals:</p>
                <p>{retreat.stay.meals.des}</p>
                <div className="main-info-bullets">
                    {retreat.stay.meals.points.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
                <p>{retreat.stay.meals.note}</p>
            </section>
            <p>Included:</p>
            <section>
                <p>Surf</p>
                <div className="main-info-bullets">
                    {retreat.stay.included.surf.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
                <p>Accommodation</p>
                <div className="main-info-bullets">
                    {retreat.stay.included.accommodation.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
                <p>Lifestyle</p>
                <div className="main-info-bullets">
                    {retreat.stay.included.lifestyle.map((point, index) => {
                        return  <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {point}</p>
                    })}
                </div>
            </section>
        </div>
    )
}

export default IntRetreat