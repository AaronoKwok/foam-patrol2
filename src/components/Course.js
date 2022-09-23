import React from "react"  

import {Link} from "react-router-dom"

function Course({courseName}) {

    function level() {
        const level = courseName.level;
        if (Array.isArray(level)) {
            return <div>
                       <p className="level">BEGINNER</p> <p className="level intermediate">INTERMEDIATE</p>
                    </div>
        } else {
            return level === 1 ? <p className="level">BEGINNER</p> : <p className="level">INTERMEDIATE</p>
        }
    }

    return (
        <Link className="link-hover" to={courseName.link}>
            <section className="course">
                <img className="course-image" src={courseName.img} alt=""/>
                {courseName.free && <div className="is-free">Free Access</div>}
                {level()}
                <p className="learn">Learn {courseName.preposition}</p>
                <p className="title">{courseName.title}</p>
            </section>
        </Link>
        
    )
}

export default Course