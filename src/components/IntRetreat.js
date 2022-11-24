import React from "react"

import useWindowWidth from "../hooks/useWindowWidth"

import {iconList} from "../utils"

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

    return (
        <div>
            {
                (useWindowWidth()) &&
                <div className="retreat-page">
                    <div className="retreat-bg-img-position">
                        <img className="retreat-backscene" src={retreat.imgs.background} alt=""/>
                        <div className="retreat-backscene-text">
                            <div className="retreat-backscene-title">
                                <p className="retreat-title">{retreat.location}</p>
                                <p className="retreat-backscene-subtitle">{retreat.where.imgTitle} | Cost: {retreat.cost}</p>
                            </div>
                        </div>
                    </div>

                    <div className="retreat-width">

                        <section className="holder">
                            <div>
                                <p className="retreat-header">{retreat.where.title}</p>
                                <p>{retreat.where.des}</p>
                            </div>
                            <img className="retreat-mobile-image" src={retreat.imgs.where} alt=""/>
                        </section>

                        <section className="holder">
                            <img className="retreat-mobile-image" src={retreat.imgs.typical} alt=""/>
                            <div>
                                <p className="retreat-header">A Typical Day</p>
                                <p>{retreat.typical.des}</p>
                            </div>
                        </section>

                        <section>
                            <div className="holder">
                                <div>
                                    <p className="retreat-header">Intermediate to Advanced Spots</p>
                                    <p>{retreat.waves.des}</p> 
                                </div>
                                <img className="retreat-mobile-image" src={retreat.imgs.advanced} alt="" />
                            </div>

                            <div className="holder">
                                <img className="retreat-mobile-image" src={retreat.imgs.intermediate} alt="" />
                                <div>
                                    <p className="retreat-header">Intermediate Spots</p>
                                    <p>{retreat.waves.intNote}</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="holder">
                                <div>
                                    <p className="retreat-header">{retreat.stay.method}</p>
                                    <p>{retreat.stay.des}</p>
                                </div>
                                <img className="retreat-mobile-image" src={retreat.imgs.accommodation} alt=""/>
                            </div>
                            
                            <div className="holder">
                                <img className="retreat-mobile-image" src={retreat.imgs.room} alt="" />
                                <div>
                                    <p className="retreat-header">Rooms</p>
                                    <p>{retreat.stay.rooms.des}</p> 
                                </div>
                            </div>

                            <div className="holder">
                                <div>
                                    <p className="retreat-header">Meals</p> 
                                    <p>{retreat.stay.meals.des}</p>
                                    <p className="int-meals-note">{retreat.stay.meals.note}</p>
                                </div>
                                <img className="retreat-mobile-image" src={retreat.imgs.meals} alt="" />
                            </div>

                        </section>

                        <section>
                            <p className="retreat-header included">Included</p>
                            <div className="included-holder">
                                <div className="included-con">
                                    <p className="included included-header">Surf</p>
                                    <hr className="included-hr"/>
                                    <div className="main-info-bullets bullet-info">
                                        {iconList(included)}
                                    </div>
                                </div>

                                <div className="included-con">
                                    <p className="included included-header">Accommodation</p>
                                    <hr className="included-hr"/>
                                    <div className="main-info-bullets bullet-info">
                                        {iconList(accommodation)}
                                    </div>
                                </div>

                                <div className="included-con">
                                    <p className="included included-header">Lifestyle</p>
                                    <hr className="included-hr"/>
                                    <div className="main-info-bullets bullet-info">
                                        {iconList(lifestyle)}
                                    </div>
                                </div>
                            </div>
                            
                        </section>

                    </div>
                    
                </div>
            }
            {
                (!useWindowWidth()) &&
                <div className="retreat-page">
                    <div className="retreat-bg-img-position">
                        <img className="retreat-backscene" src={retreat.imgs.background} alt=""/>
                        <div className="retreat-backscene-text">
                            <div className="retreat-backscene-title">
                                <p className="retreat-title">{retreat.location}</p>
                                <p className="retreat-backscene-subtitle">{retreat.where.imgTitle} | Cost: {retreat.cost}</p>
                            </div>
                        </div>
                    </div>

                    <div className="retreat-width">

                        <section className="holder">
                            <div>
                                <p className="retreat-header">{retreat.where.title}</p>
                                <p>{retreat.where.des}</p>
                                <div className="main-info-bullets">
                                    {iconList(wherePoints)}
                                </div> 
                            </div>
                            <img className="right-img" src={retreat.imgs.where} alt=""/>
                        </section>

                        <section className="holder">
                            <img className="left-img" src={retreat.imgs.typical} alt=""/>
                            <div>
                                <p className="retreat-header">A Typical Day</p>
                                <p>{retreat.typical.des}</p>
                            </div>
                        </section>

                        <section>
                            <div className="holder">
                                <div>
                                    <p className="retreat-header">Intermediate to Advanced Spots</p>
                                    <p>{retreat.waves.des}</p>
                                    <div className="main-info-bullets">
                                        {iconList(spots)}
                                    </div> 
                                </div>
                                <img className="right-img" src={retreat.imgs.advanced} alt="" />
                            </div>

                            <div className="holder">
                                <img className="left-img" src={retreat.imgs.intermediate} alt="" />
                                <div>
                                    <p className="retreat-header">Intermediate Spots</p>
                                    <p>{retreat.waves.intNote}</p>
                                    <div className="main-info-bullets">
                                        {iconList(intermediate)}
                                    </div> 
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="holder">
                                <div>
                                    <p className="retreat-header">{retreat.stay.method}</p>
                                    <p>{retreat.stay.des}</p>
                                    <div className="main-info-bullets">
                                        {iconList(stay)}
                                    </div>
                                </div>
                                <img className="right-img" src={retreat.imgs.accommodation} alt=""/>
                            </div>
                            
                            <div className="holder">
                                <img className="left-img" src={retreat.imgs.room} alt="" />
                                <div>
                                    <p className="retreat-header">Rooms</p>
                                    <p>{retreat.stay.rooms.des}</p>
                                    <div className="main-info-bullets">
                                        {iconList(rooms)}
                                    </div> 
                                </div>
                            </div>

                            <div className="holder">
                                <div>
                                    <p className="retreat-header">Meals</p> 
                                    <p>{retreat.stay.meals.des}</p>
                                    <div className="main-info-bullets">
                                        {iconList(meals)}
                                    </div>
                                    <p className="int-meals-note">{retreat.stay.meals.note}</p>
                                </div>
                                <img className="right-img" src={retreat.imgs.meals} alt="" />
                            </div>

                        </section>

                        <section>
                            <p className="retreat-header included">Included</p>
                            <div className="included-holder">
                                <div className="included-con">
                                    <p className="included included-header">Surf</p>
                                    <hr className="included-hr"/>
                                    <div className="main-info-bullets bullet-info">
                                        {iconList(included)}
                                    </div>
                                </div>

                                <div className="included-con">
                                    <p className="included included-header">Accommodation</p>
                                    <hr className="included-hr"/>
                                    <div className="main-info-bullets bullet-info">
                                        {iconList(accommodation)}
                                    </div>
                                </div>

                                <div className="included-con">
                                    <p className="included included-header">Lifestyle</p>
                                    <hr className="included-hr"/>
                                    <div className="main-info-bullets bullet-info">
                                        {iconList(lifestyle)}
                                    </div>
                                </div>
                            </div>
                            
                        </section>

                    </div>
                    
                </div>
            }
        </div>
    )
}

export default IntRetreat