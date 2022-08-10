import React from "react"

/* import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons' NOTE: not working atm*/
import gridIcon from "../images/gridIcon.png"
import listIcon from "../images/listView.png"

import courseBackscene from "../images/courses.png"
import shackIcon from "../images/shackIcon.png"

function OnlineCourses() {



    return (
        <section className="oc-bg-img">
            <img className="oc-backscene" src={courseBackscene} alt=""></img>  {/* need to change sizing of image when screen size changes */}
            <div className="oc-backscene-text">
                <img className="shack-icon" src={shackIcon} alt=""></img> {/* need to fix positioning of text when screen size changes */}
                <div>
                    <h1 className="image-h1 image-h1-margin">Here to Help You Surf</h1>
                    <h1 className="image-h1">Better, Faster.</h1>
                </div>
                <p className="description-on-backscene-oc">Learn online, anytime.</p>
                <div className="backscene-types">
                    <p className="choose-type">All Courses</p>
                    <p className="choose-type">Free Courses</p>
                </div>
            </div>

            <div className="courses-pg-layout">
                <p className="all-surf-header">All Surfing Courses</p>
                <hr className="hr-surf-header"/>

                <div className="choose-view"> {/* grid/list view chooser - add color background color change */}
                    <div className="grid-tip">
                        <img className="grid-icon" src={gridIcon} alt="" />
                        <span className="grid-tip-text">Grid View</span>
                    </div>

                    <div className="vert"></div>

                    <div className="list-tip">
                        <img className="list-icon" src={listIcon} alt=""/> 
                        <span className="list-tip-text">List View</span>
                    </div>
                </div>

                <p>
                    <label className="course-levels" for="levels">Course Levels:</label>
                    <select className="level-select" name="levels" id="levels">
                        <option selected="selected" value="all">All</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="more">More</option>
                    </select>
                </p>
            </div>

        </section>
    )
}

export default OnlineCourses