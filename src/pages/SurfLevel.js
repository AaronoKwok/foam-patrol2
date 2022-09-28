import React from "react" 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

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

    function makePoints(arr) {
        return arr.map((bullet, index) => {
            return  <p className="info-space"><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {bullet}</p>
        })
    }

    return (
        <div>
            <div className="filler"></div>

        </div>
    )
}

export default SurfLevel