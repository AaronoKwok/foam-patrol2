import React, {useState, useEffect} from "react"

/* import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons' NOTE: not working atm*/

import courseData from "../Data/courseData.json"
import OnlineCourse from "../components/OnlineCourse"

import gridIcon from "../images/gridIcon.png"
import listIcon from "../images/listView.png"

import courseBackscene from "../images/courses.png"
import shackIcon from "../images/shackIcon.png"

function OnlineCourses() {

    const [isGrid, setIsGrid] = useState(true)
    const [availableCourses, setAvailableCourses] = useState(courseData)
    const [free, setFree] = useState(false)
    const [level, setLevel] = useState("all")

    function viewChange(view) {
        if(view === "grid") {
            setIsGrid(true)
        } else {
            setIsGrid(false)
        }
    }

    function payCourses(pay) {
        if(pay) {
            setFree(true)
            setAvailableCourses(courseData.filter(course => course.free === true)) 
        } else {
            setFree(false)
            setAvailableCourses(courseData)
            setLevel("all")
        }
    }

    function levelCourses(event) { 
        const selected = event.target.value;
        setLevel(selected)

        switch(selected) {
            case "all": 
                setAvailableCourses(availableCourses.filter(course => course)); 
                break;
            case "beginner":
                setAvailableCourses(availableCourses.filter(course => course.level === 1));
                break;
            case "intermediate": 
                setAvailableCourses(availableCourses.filter(course => course.level === 2))
                break; 
            case "more": 
                setAvailableCourses(availableCourses.filter(course => course.level === 0))
                break;
            default: 
                setAvailableCourses(courseData)
        } 
    }

    //variables for css
    const allButton = free ? "free" : "notFree";
    const freeButton = free ? "notFree" : "free";

    const specifiedCourses = availableCourses.map((course) => {
        if (availableCourses.length === 0) {
            return <p>No courses available</p>
        } else {
            return <OnlineCourse course={course} grid={isGrid} key={course.id}/>
        }
    })

    return (
        <section className="oc-bg-img">
            <img className="oc-backscene" src={courseBackscene} alt=""></img>  {/* need to change sizing of image when screen size changes */}
            <div className="oc-backscene-text">
                <img className="shack-icon" src={shackIcon} alt=""></img> {/* need to fix positioning of text when screen size changes */}
                <div>
                    <h1 className="image-h1 image-h1-margin">Here to Help You Surf</h1>
                    <h1 className="image-h1">Better, Faster.</h1>
                </div>
                <p className="description-on-backscene-oc">Over 70 hours of courses.</p>
                <div className="backscene-types">
                    <p className={`button-${allButton}`} onClick={() => payCourses(false)}>All Courses</p>
                    <p className={`button-${freeButton}`} onClick={() => payCourses(true)}>Free Courses</p>
                </div>
            </div>
        
            <div className="courses-pg-layout">
                <p className="all-surf-header">All Surfing Courses</p>
                <hr className="hr-surf-header"/>

                <div className="choose-view"> {/* grid/list view chooser - add color background color change */}
                    <div className="grid-tip" onClick={() => viewChange("grid")}>
                        <img className="grid-icon" src={gridIcon} alt="" />
                        <span className="grid-tip-text">Grid View</span>
                    </div>

                    <div className="vert"></div>

                    <div className="list-tip" onClick={() => viewChange("list")}>
                        <img className="list-icon" src={listIcon} alt=""/> 
                        <span className="list-tip-text">List View</span>
                    </div>
                </div>

                <p>
                    <label className="course-levels">Course Levels:</label>
                    <select className="level-select" name="levels" value={level} onChange={levelCourses}>
                        <option value="all">All</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="more">More</option>
                    </select>
                </p>

                {isGrid === true && <div className="courses-in-grid">
                    {specifiedCourses}
                </div>}
                {isGrid === false && <div className="courses-in-list">
                    {specifiedCourses}
                </div>}

                
            </div>

            <p className="online-anytime">Learn Online, Anytime.</p>
            <p className="course-page-bottom">With our surf courses tailored for beginner and intermediate surfers.</p>
          

        </section>
    )
}

export default OnlineCourses