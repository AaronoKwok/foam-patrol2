import React from "react"

import useWindowWidth from "../hooks/useWindowWidth"

function ChosenCourse({course}) {
    return (
        <div>
            {
                (useWindowWidth()) &&
                <div className="retreat-width">
                    <div className="background">
                        <img className="course-background-image" src={course.img} alt="" />
                        <div className="course-backscene-text">
                            <div className="course-backscene-title">
                                <a className="chosen-course-title" target="_blank" rel="noreferrer" href={course.youtube}><p>{course.title}</p></a>
                                <p className="youtube">Click the title above to see a related video on YouTube.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                (!useWindowWidth()) &&
                <div className="retreat-width">
                    <div className="filler"></div>
                    <div className="background">
                        <img className="background-image" src={course.img} alt="" />
                        <div className="course-backscene-text">
                            <div className="course-backscene-title">
                                <a className="course-title" target="_blank" rel="noreferrer" href={course.youtube}><p>{course.title}</p></a>
                                <p className="youtube">Click the title above to see a related video on YouTube.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        
    )
}

export default ChosenCourse