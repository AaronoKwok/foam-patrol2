import React from "react"
import {Link} from "react-router-dom"

function Retreat({retreat}) {
    return (
        <Link className="link-hover retreat" to={retreat.link}>
            <section> {/* move className="retreat" above so space between links is not clickable */}
                <img className="retreat-img" src={retreat.img} alt="" />
                <p className="retreat-location">{retreat.location}</p>
                <p className="retreat-description">{retreat.description}</p>
            </section>
        </Link>   
    )
}

export default Retreat