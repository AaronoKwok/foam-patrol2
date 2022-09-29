import React from "react" 

import {iconList} from "../utils"

import surfLevel from "../images/mysurfLevel.jpeg"
import begIcon from "../images/beg.jpeg"
import intAdvIcon from "../images/intAdv.jpeg"

function SurfLevel() {

    const beg = [
        "Paddling techniques", 
        "Basic surfing equipment", 
        "Security aspects", 
        "Surf etiquette", 
        "Passing the break", 
        "How to pop up on a surfboard", 
        "Depending on your level, you might work on your stance, catching unbroken waves and maybe even start turning!"
    ]

    const limEx = [
        "Reviewing the basics for beginner surfers (same as level 1.1)", 
        "Improving your take off & paddling techniques", 
        "Working on your surfing stance to gain more balance", 
        "Learning to catch unbroken waves (\"green waves\")", 
        "Improving your positioning to catch more unbroken waves", 
        "Learning the basics of slowing down and accelerating", 
        "Learning to angle your take off to go either left or right"
    ]

    const exp = [
        "Reviewing the basics for beginner surfers (same as level 1.1 and 1.2)", 
        "Learning to catch unbroken waves", 
        "Improving your wave reading ability to catch better quality waves", 
        "Improving your positioning to catch more waves", 
        "Learning to angle your take off to go either left or right", 
        "Improving your stance to gain more mobility", 
        "Understanding how to trim on a wave"
    ]

    const interm = [
        "Generating speed on a wave", 
        "Improving your wave reading ability", 
        "Choosing the right equipment for specific conditions", 
        "Duck dives", 
        "Improving your stance to gain mobility", 
        "Learning the basics of bottom turns and & top turns"
    ]

    const intAdv = [
        "Increasing your capacity to generate speed on different types of waves", 
        "Improving your positioning to catch better waves, at the optimal place to take off", 
        "Duck dives", 
        "Improving how your propel yourself towards the wave's face (technical analysis of your bottom turns", 
        "Improving your top turns (technical analysis of your positioning on the wave, your upper body's rotation, rail-to-rail transition, etc.)", 
        "Learn to improve your cutbacks", 
        "Depending on your level, you could learn to do floaters, re-entries (snaps) or roundhouse cutbacks"
    ]

    return (
        <div>
            <div className="filler"></div>

            <div className="level-background">
                <img className="background-image" src={surfLevel} alt="" />
                <div className="level-fade">
                    <p className="level-back-title">What is my surf level?</p>
                    <p className="level-back-sub">Beginner & intermediate coaching</p>  
                </div>
            </div>

            <div className="retreat-width">

                <div className="level-center">
                    <img className="level-icon" src={begIcon} alt="" />
                    <p className="level-head">Level 1: Beginner Surf Coaching</p>
                </div>
                <section className="beg-lvl">
                    <div className="level-section">
                        <p className="level-title">Level 1.1: Beginner</p>
                        <p className="level-quote">"I never tried surfing before but I know how to swim."</p>
                        <p className="level-focus">What you will focus on: </p>
                        {iconList(beg)}
                    </div>
                    <div className="level-section">
                        <p className="level-title">Level 1.2: Beginner with limited experience</p>
                        <p className="level-quote">"I've tried surfing before, only a few times. I still struggle with the basics: paddling & popping up."</p>
                        <p className="level-focus">What you could focus on:</p>
                        {iconList(limEx)}
                    </div>
                    <div className="level-section">
                        <p className="level-title">Level 1.3: Beginner with experience</p>
                        <p className="level-quote">"With assistance, I'm able to stand up and go straight on a wave, with decent control."</p>
                        <p className="level-focus">What you could focus on:</p>
                        {iconList(exp)}
                    </div>
                </section>

                <div className="level-center">
                    <img className="level-icon" src={intAdvIcon} alt="" />
                    <p className="level-head">Level 2: Intermediate Surf Coaching</p> 
                </div>
                <section className="beg-lvl level-two">
                    <div className="level-section">
                        <p className="level-title">Level 2.1: Intermediate</p>
                        <p className="level-quote">"In waves that are waist to shoulder high, I can paddle past the break, catch green waves by myself and go left & right on the face of the wave. I want to have more control on my surfboard, do basic turns and change direction."</p>
                        <p className="level-focus">What you could focus on:</p>
                        {iconList(interm)}
                    </div>
                    <div className="level-section">
                        <p className="level-title">Level 2.2: Intermediate transitioning into advanced</p>
                        <p className="level-quote">"I have good control on my surfboard and can turn to change direction. I want to practice cutbacks, generating speed, bottom turns, and more."</p>
                        <p className="level-focus">What you could focus on:</p>
                        {iconList(intAdv)}
                    </div>
                </section>

            </div>
        </div>
    )
}

export default SurfLevel