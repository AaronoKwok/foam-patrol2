import React from "react"

function SurfRetreat({retreat}) {
    return (
        <div className="retreat-page">
            <div className="filler"></div>
            <p className="retreat-page-test">{retreat.location}</p>
        </div>
    )
}

export default SurfRetreat