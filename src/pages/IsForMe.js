import React from 'react' 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

import age from "../images/travelerAge.jpeg"
import level from "../images/surfLevel.jpeg"
import traveler from "../images/world.jpeg"

function IsForMe() {

    const ageArr = [
        "The average traveler age varies from mid-twenties to mid-forties, but we’ve had many travelers in their fifties or early twenties, and they had a blast! We are strong believers that age is just a number.", 
        "Minimum age is 18 years old. We sometimes accept younger travellers if they are accompanied by an adult." 
    ]

    const levelArr = [
        "You CANNOT be “too bad” at surfing for our trips. Around 30-40% of our travelers have never touched a surfboard before joining our surf trips.", 
        "You need to know how to swim to join a trip.", 
        "You CAN be “too good” for our trips because they are designed for beginners and intermediates. We transport our people to spots that are adapted and safe for beginners and intermediates. If you are looking to throw some airs and to get the barrel of your life, you would have more fun on a charter boat in Indo!"
    ]

    const travelerArr = [
        "Yes, you can come if you are traveling on your own. About 50% of our groups are composed of lone travelers. This is one of the best parts of traveling with us: right from the start you will join a group of like-minded travelers and share amazing experiences.", 
        "Yes, we welcome groups of friends. Groups of 2, 3 or 4 friends often join our surf coaching retreats.", 
        "Yes, we have couples traveling with us. We have limited private rooms on our trips, so we recommend contacting us prior to booking for room availabilities."
    ]

    function makePoints(arr) {
        return arr.map((bullet, index) => {
            return  <p className="info-space"><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} key={index}/> {bullet}</p>
        })
    }

    return (
        <div className="retreat-width">
            <div className="filler"></div>
            <section className="is-me-holder">
                <div className="is-me-section">
                    <img className="is-me-img" src={age} alt="" />
                    <p className="retreat-header is-me-head">Traveler Age</p>
                    <p className="is-me-sub">Am I too young / too old for this trip?</p>
                    <div className="is-me-text">{makePoints(ageArr)}</div>
                </div>
                <div className="is-me-section">
                    <img className="is-me-img" src={level} alt="" />
                    <p className="retreat-header is-me-head">Surf Level</p>
                    <p className="is-me-sub">What surf experience do I need?</p>
                    <div className="is-me-text">{makePoints(levelArr)}</div>
                </div>
                <div className="is-me-section">
                    <img className="is-me-img" src={traveler} alt="" />
                    <p className="retreat-header is-me-head">Type of Traveler</p>
                    <p className="is-me-sub">Lone travelers, groups of friends & couples.</p>
                    <div className="is-me-text">{makePoints(travelerArr)}</div>
                </div>
            </section>
        </div>
    )
}

export default IsForMe