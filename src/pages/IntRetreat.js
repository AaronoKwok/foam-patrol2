import React from "react"

function IntRetreat({retreat}) {
    return (
        <div className="retreat-page">
            <div className="filler"></div>
            <p className="retreat-page-test">{retreat.location}</p>
        </div>
    )
}

export default IntRetreat