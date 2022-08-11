import React, {useState} from "react"

/* import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons' NOTE: not working atm*/

import courseData from "../Data/courseData.json"
import OnlineCourse from "../components/OnlineCourse"

import gridIcon from "../images/gridIcon.png"
import listIcon from "../images/listView.png"

import courseBackscene from "../images/courses.png"
import shackIcon from "../images/shackIcon.png"

function OnlineCourses() {

    const [isGrid, setIsGrid] = useState(false) // change back to true once don

    function viewChange(view) {
        if(view === "grid") {
            setIsGrid(true)
        } else {
            setIsGrid(false)
        }
    }

    const courses = courseData.map((course) => {
        return <OnlineCourse course={course} grid={isGrid} key={course.id}/>
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
                    <p className="choose-type">All Courses</p>
                    <p className="choose-type">Free Courses</p>
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
                    <label className="course-levels" for="levels">Course Levels:</label>
                    <select className="level-select" name="levels" id="levels">
                        <option selected="selected" value="all">All (for now...)</option>
                        {/* <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="more">More</option> */}
                    </select>
                </p>
                {isGrid === true && <div className="courses-in-grid">
                    {courses}
                </div>}

                {isGrid === false && <div className="courses-in-list">
                    {courses}
                </div>}

                
            </div>

            <p className="online-anytime">Learn Online, Anytime.</p>
            <p className="course-page-bottom">With our surf courses tailored for beginner and intermediate surfers.</p>
          

        </section>
    )
}

export default OnlineCourses