import React from "react" 
import {useNavigate, useLocation} from "react-router-dom"

import useWindowWidth from "../hooks/useWindowWidth"

function Logo() {

    const navigate = useNavigate()
    const location = useLocation()

    function handleClick() {
        if (location.pathname !== "/") {
            navigate("/")
        }
    }

    return (
        <div>
            {
                (useWindowWidth() === false) &&
                <div className="logo" onClick={handleClick}>
                    <p className="logo-spacing">FOAM</p>
                    <p className="logo-spacing">PATROL.</p>
                    <p className="travel logo-spacing">TRAVEL</p>
                </div>
            } 
            {
                (useWindowWidth() === true) && 
                <div className="mobile-logo" onClick={handleClick}>
                    <p className="logo-spacing">FOAM</p>
                    <p className="logo-spacing">PATROL.</p>
                </div>
            }
        </div>
        
        
    )
}

export default Logo