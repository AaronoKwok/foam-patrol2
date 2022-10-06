import React, {useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

import courseData from '../Data/courseData.json'
import retreatData from '../Data/retreatData.json'

import BackScene from "../components/BackScene"
import Course from "../components/Course"
import Retreat from "../components/Retreat"
import CurrentCondition from "../components/CurrentCondition"

import useWindowWidth from "../hooks/useWindowWidth"



function MainPage() { //to change once have a courses scroll functionality

    console.log(useWindowWidth())

    const {
        pleasurePoint, 
        pacifica, 
        hbPier, 
        waikiki
    } = useContext(Context)

    const pointArr = [
        "Tailored surf coaching", 
        "6 coaches for 12 students", 
        "Authentic travel experience", 
        "Only the best surf spots for your level"
    ]

    function makePoints(arr) {
        return arr.map((txt, i) => {
            return (
                <div className="info-space-mp" key={i}>
                    <FontAwesomeIcon className="arrow-icon" icon={faAnglesRight}/>
                    <p className="bullet-point-main">{txt}</p>                    
                </div> 
            )
        })
    }

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
        <main>
            <div className="mp-img-position">
                <BackScene />
                <section className="main-info">
                    <p className="main-info-paragraph">Beginner? Intermediate? <span className="main-info-span">Surfing is more fun the better you get.</span> We help you surf better, faster.</p>
                    <div className="main-info-bullets">
                        {makePoints(pointArr)}
                    </div>
                </section>
            </div>

            <div className="mainpage-width">

                <section className="browse-retreats">
                    <p className="retreats-p">Surf Trips</p>
                    <hr className="main-hr"/>
                    <div className="retreats-layout">
                        {retreats}
                    </div>
                </section> 

                <section className="browse-forecasts"> 
                    <p className="retreats-p">California & Hawaii Current Conditions</p>
                    <hr className="main-hr"/>
                    <div className="courses-layout">
                        <CurrentCondition loc={pleasurePoint}/>
                        <CurrentCondition loc={pacifica}/>
                        <CurrentCondition loc={hbPier}/>
                        <CurrentCondition loc={waikiki}/>
                    </div>
                </section>
                
                <section className="browse-courses">
                    <p className="courses-p">Discover our Online Surf Courses</p>
                    <hr className="main-hr" />
                    <div className="courses-layout">
                        {courses}
                    </div>
                    <Link className="courses-link" to="/online-courses">Go to more courses...</Link>
                </section>
            </div>
            

        </main>
    )
}

export default MainPage