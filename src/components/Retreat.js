import React from "react"
import {Link} from "react-router-dom"

function Retreat({retreat}) {
    return (
        <Link className="main-page-retreat" to={retreat.link}>
            <section className="retreat">
                <img className="retreat-img" src={retreat.img} alt="" />
                <p className="retreat-location">{retreat.location}</p>
                <p className="retreat-description">{retreat.description}</p>
            </section>
        </Link>   
    )
}

export default Retreat