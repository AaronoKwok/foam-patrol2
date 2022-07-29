import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

import courseData from '../courseData.json'
//import {Context} from "../Context"

import BackScene from "../components/BackScene"

function MainPage() {

console.log(JSON.parse())

    return (
        <main>

            <BackScene />

            <section className="main-info">

                <p className="main-info-paragraph">Beginner? Intermediate? <span className="main-info-span">Surfing is more fun the better you get.</span> We help you surf better, faster.</p>
                <div className="main-info-bullets">
                    <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} /> Tailored surf coaching</p>
                    <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} /> 6 coaches for 12 students</p>
                    <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} /> Authentic travel experience</p>
                    <p><FontAwesomeIcon className="arrow-icon" icon={faAnglesRight} /> Only the best surf spots for your level</p>
                </div>

            </section>

            <section className="browse-courses">

                <h1 className="courses-h1">Discover our Online Surf Courses</h1>

            </section>

        </main>
    )
}

export default MainPage