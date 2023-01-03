import React from "react" 

import useWindowWidth from "../hooks/useWindowWidth"

import background from "../images/whatWeDoBack.jpeg"
import why from "../images/why.jpeg"
import whowe from "../images/whoWe.jpeg"
import unique from "../images/unique.jpeg"
import best from "../images/bestSurf.jpeg"
import authentic from "../images/authentic.jpeg"
import stress from "../images/stress.jpeg"
import atmosphere from "../images/atmosphere.jpeg"
import breathtake from "../images/breathtake.jpeg"

function WhatDo() {
    return (
        <div>
            {
                (useWindowWidth()) &&
                <div>
                    <div className="whatDo-background">
                        <img className="retreat-backscene" src={background} alt=""/>
                        <p className="whatDo-title">What We Do</p>
                    </div>
                    <section className="team-width">
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">Why do we do what we do?</p>
                                <p className="retreat-text-mobile">We share our love for surfing because it changed our lives.</p>
                                <p className="retreat-text-mobile">From our experience, surfing becomes more fun the more you progress. We know there is a path to accelerate the process of learning to surf. We want to share it with you because we believe nothing is more satisfying, fun and rewarding than the feeling of learning to surf better on some of the best waves on earth.</p>
                            </div>
                            <img className="retreat-mobile-image" src={why} alt=""/>
                        </div>

                        <div className="whatDo-holder">
                            <img className="whatDo-second-img" src={whowe} alt="" />
                            <div>
                                <p className="retreat-header">Who we are</p>
                                <p className="retreat-text-mobile">We are a family of passionate surf coaches dedicated to helping you learn to surf faster than you could ever imagine.</p>
                                <p className="retreat-text-mobile">Our intention has never been to “start a surf school”. Our goal was to create the ultimate surf coaching retreats for beginner and intermediate surfers. We do this by bringing you to some of the most consistent and fun waves in the world while sharing our knowledge in the clearest, most efficient way possible.</p>
                            </div>
                        </div>
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">What makes our trips so unique?</p>
                                <p className="retreat-text-mobile">The people. Our #1 focus is to have the most passionate and professional surf coaching team at each destination. Our team members consider it a personal mission to provide the absolute best surf coaching retreats for beginners and intermediates.</p>
                                <p className="retreat-text-mobile">The surf classes don’t end after 2 hours. You will develop a connection with surf coaches who genuinely care about your progression and share their knowledge throughout the trip.</p>
                            </div>
                            <img className="retreat-mobile-image" src={unique} alt=""/>
                        </div>
                        <div className="whatDo-holder">
                            <img className="whatDo-second-img" src={best} alt=""/>
                            <div>
                                <p className="retreat-header">Only the best surf spots at the optimal time of the year</p>
                                <p className="retreat-text-mobile">A key element to enjoy surfing and to progress is to maximize your chances of surfing waves suitable for your skill level. We take you to the best and safest surf spots for your level and only operate at the optimal time of the year in some of the most consistent surfing locations on earth.</p>
                            </div>
                        </div>
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">Authentic experience</p>
                                <p className="retreat-text-mobile">The relationship we have built with local communities and with the local surf coaches is one of the most unique perks of our trips. Our travelers feel the genuine friendship with the local surf coaches and the pride they have in collaborating with Barefoot Surf Travel. Our vision has always been to collaborate with the local communities in order to have a mutual, positive impact.</p>
                            </div>
                            <img className="retreat-mobile-image" src={authentic} alt=""/>
                        </div>
                        <div className="whatDo-holder">
                            <img className="whatDo-second-img" src={stress} alt=""/>
                            <div>
                                <p className="retreat-header">Stress-free vacations</p>
                                <p className="retreat-text-mobile">Live a stress-free vacation while experiencing the very best that the destination has to offer.</p>
                                <p className="retreat-text-mobile">Because our model differs from the typical surf camp, we’re able to continuously adapt our itinerary to ensure a genuine and up to date adventure. From the moment you step out of the plane, we take care of all the logistics so that you relax and enjoy your free time in whatever way you choose.</p>
                            </div>
                        </div>
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">The atmosphere</p>
                                <p className="retreat-text-mobile">There is a special energy on our trips. Is it because of the exclusive beach houses or the private beach bungalows? Is it because we only run during specific times of the year, when the weather and the waves are ideal for learning? Is it because we gather the most inspiring and friendly team of local surfers for our surf lessons?</p>
                                <p className="retreat-text-mobile">It’s a mix of it all. Since our mission is to take  people on the surf trip of a lifetime, every single decision we make aims to create an unforgettable experience.</p>
                            </div>
                            <img className="retreat-mobile-image" src={atmosphere} alt=""/>
                        </div>
                        <div className="whatDo-holder">
                            <img className="whatDo-second-img" src={breathtake} alt="" />
                            <div>
                                <p className="retreat-header">Breathtaking accommodations at the best locations</p>
                                <p className="retreat-text-mobile">We love to treat our guests to what we believe are the most amazing villas and bungalows available at each destination.</p>
                                <p className="retreat-text-mobile">Everywhere we go, our surfers enjoy chic, stylish accommodations, always just a short walk from the waves, restaurants and cafes.</p>
                            </div>
                        </div>
                    </section>
                </div>
            }
            {
                (!useWindowWidth()) &&
                <div>
                    <div className="filler"></div>
                    <div className="whatDo-background">
                        <img className="whatDoBack" src={background} alt=""/>
                        <p className="whatDo-title">What We Do</p>
                        <p className="whatDo-sub">Our Mission</p>
                    </div>
                    <section className="team-width">
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">Why do we do what we do?</p>
                                <p>We share our love for surfing because it changed our lives.</p>
                                <p>From our experience, surfing becomes more fun the more you progress. We know there is a path to accelerate the process of learning to surf. We want to share it with you because we believe nothing is more satisfying, fun and rewarding than the feeling of learning to surf better on some of the best waves on earth.</p>
                            </div>
                            <img className="retreat-mobile-image on-right" src={why} alt=""/>
                        </div>

                        <div className="whatDo-holder">
                            <img className="retreat-mobile-image on-left" src={whowe} alt="" />
                            <div>
                                <p className="retreat-header">Who we are</p>
                                <p>We are a family of passionate surf coaches dedicated to helping you learn to surf faster than you could ever imagine.</p>
                                <p>Our intention has never been to “start a surf school”. Our goal was to create the ultimate surf coaching retreats for beginner and intermediate surfers. We do this by bringing you to some of the most consistent and fun waves in the world while sharing our knowledge in the clearest, most efficient way possible.</p>
                            </div>
                        </div>
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">What makes our trips so unique?</p>
                                <p>The people. Our #1 focus is to have the most passionate and professional surf coaching team at each destination. Our team members consider it a personal mission to provide the absolute best surf coaching retreats for beginners and intermediates.</p>
                                <p>The surf classes don’t end after 2 hours. You will develop a connection with surf coaches who genuinely care about your progression and share their knowledge throughout the trip.</p>
                            </div>
                            <img className="retreat-mobile-image on-right" src={unique} alt=""/>
                        </div>
                        <div className="whatDo-holder">
                            <img className="retreat-mobile-image on-left" src={best} alt=""/>
                            <div>
                                <p className="retreat-header">Only the best surf spots at the optimal time of the year</p>
                                <p>A key element to enjoy surfing and to progress is to maximize your chances of surfing waves suitable for your skill level. We take you to the best and safest surf spots for your level and only operate at the optimal time of the year in some of the most consistent surfing locations on earth.</p>
                            </div>
                        </div>
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">Authentic experience</p>
                                <p>The relationship we have built with local communities and with the local surf coaches is one of the most unique perks of our trips. Our travelers feel the genuine friendship with the local surf coaches and the pride they have in collaborating with Barefoot Surf Travel. Our vision has always been to collaborate with the local communities in order to have a mutual, positive impact.</p>
                            </div>
                            <img className="retreat-mobile-image on-right" src={authentic} alt=""/>
                        </div>
                        <div className="whatDo-holder">
                            <img className="retreat-mobile-image on-left" src={stress} alt=""/>
                            <div>
                                <p className="retreat-header">Stress-free vacations</p>
                                <p>Live a stress-free vacation while experiencing the very best that the destination has to offer.</p>
                                <p>Because our model differs from the typical surf camp, we’re able to continuously adapt our itinerary to ensure a genuine and up to date adventure. From the moment you step out of the plane, we take care of all the logistics so that you relax and enjoy your free time in whatever way you choose.</p>
                            </div>
                        </div>
                        <div className="whatDo-holder">
                            <div>
                                <p className="retreat-header">The atmosphere</p>
                                <p>There is a special energy on our trips. Is it because of the exclusive beach houses or the private beach bungalows? Is it because we only run during specific times of the year, when the weather and the waves are ideal for learning? Is it because we gather the most inspiring and friendly team of local surfers for our surf lessons?</p>
                                <p>It’s a mix of it all. Since our mission is to take  people on the surf trip of a lifetime, every single decision we make aims to create an unforgettable experience.</p>
                            </div>
                            <img className="retreat-mobile-image on-right" src={atmosphere} alt=""/>
                        </div>
                        <div className="whatDo-holder">
                            <img className="retreat-mobile-image on-left" src={breathtake} alt="" />
                            <div>
                                <p className="retreat-header">Breathtaking accommodations at the best locations</p>
                                <p>We love to treat our guests to what we believe are the most amazing villas and bungalows available at each destination.</p>
                                <p>Everywhere we go, our surfers enjoy chic, stylish accommodations, always just a short walk from the waves, restaurants and cafes.</p>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </div>
        
    )
}

export default WhatDo