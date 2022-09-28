import React from "react" 

import background from "../images/whatWeDoBack.jpeg"
import why from "../images/why.jpeg"
import whowe from "../images/whoWe.jpeg"

function WhatDo() {
    return (
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
                        <p>Why do we do what we do?</p>
                        <p>We share our love for surfing because it changed our lives.</p>
                        <p>From our experience, surfing becomes more fun the more you progress. We know there is a path to accelerate the process of learning to surf. We want to share it with you because we believe nothing is more satisfying, fun and rewarding than the feeling of learning to surf better on some of the best waves on earth.</p>
                    </div>
                    <img className="right-img" src={why} alt=""/>
                </div>

                <div className="whatDo-holder">
                    <img className="left-img" src={whowe} alt="" />
                    <div>
                        <p>Who we are</p>
                        <p>We are a family of passionate surf coaches dedicated to helping you learn to surf faster than you could ever imagine.</p>
                        <p>Our intention has never been to “start a surf school”. Our goal was to create the ultimate surf coaching retreats for beginner and intermediate surfers. We do this by bringing you to some of the most consistent and fun waves in the world while sharing our knowledge in the clearest, most efficient way possible.</p>
                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </section>
        </div>
    )
}

export default WhatDo