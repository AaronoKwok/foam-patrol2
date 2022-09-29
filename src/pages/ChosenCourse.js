import React from "react"

function ChosenCourse({course}) {
    return (
        <div className="retreat-width">
            <div className="filler"></div>
            <div className="background">
                <img className="background-image" src={course.img} alt="" />
                <p className="youtube">Click title above to search YouTube ;)</p>
                <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/results?search_query=${course.title} surfing`}><p className="is-forMe-sub">{course.title}</p></a>
            </div>
        </div>
    )
}

export default ChosenCourse