import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

import courseData from '../courseData.json'
//import {Context} from "../Context"

import BackScene from "../components/BackScene"
import Course from "../components/Course"

function MainPage() { //to change once have a courses scroll functionality
    console.log(courseData)
    const courses = courseData.map((course) => {
        if (course.id < 4) {
            return <Course key={course.id} courseName={course} />
        } else {
            return null
        }
    })


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
            <hr className="line-break"/>

            <section className="browse-courses">
                <p className="courses-p">Discover our Online Surf Courses</p>
                <div className="courses-layout">
                    {courses}
                </div>
            </section>

            <section> 

            </section>

        </main>
    )
}

export default MainPage