import React from "react"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

import courseData from '../Data/courseData.json'
import retreatData from '../Data/retreatData.json'
//import {Context} from "../Context"

import BackScene from "../components/BackScene"
import Course from "../components/Course"
import Retreat from "../components/Retreat"

function MainPage() { //to change once have a courses scroll functionality

    const courses = courseData.map((course) => {
        if (course.id < 4) {
            return <Course key={course.id} courseName={course} />
        } else {
            return null
        }
    })

    const retreats = retreatData.map((retreat) => {
        return <Retreat key={retreat.id} retreat={retreat} />
    })

    return (
        <main className="mainpage-width">
            <div className="mp-img-position">
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
            </div>

            {/* <hr className="line-break"/> */}

            <section className="browse-retreats">
                <p className="retreats-p">Surf Trips</p>
                <hr className="main-hr"/>
                <div className="retreats-layout">
                    {retreats}
                </div>
            </section> 
            {/* <hr className="line-break"/> */}
            
            <section className="browse-courses">
                <p className="courses-p">Discover our Online Surf Courses</p>
                <hr className="main-hr" />
                <div className="courses-layout">
                    {courses}
                </div>
                <Link className="courses-link" to="/onlineCourses">Go to more courses...</Link>
            </section>

            <section> 

            </section>

        </main>
    )
}

export default MainPage