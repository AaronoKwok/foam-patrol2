import React from "react"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function IntRetreat({retreat}) {
    return (
        <div className="retreat-page">
            <div className="retreat-bg-img-position">
                <img className="retreat-backscene" src={retreat.imgs.background} alt=""/>
                <div className="retreat-backscene-text">
                    <div className="retreat-backscene-title">
                        <p className="retreat-title">{retreat.location}</p>
                        <p className="retreat-backscene-subtitle">{retreat.where.imgTitle}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntRetreat