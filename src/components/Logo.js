import React from "react" 
import {useNavigate} from "react-router-dom"

import useWindowWidth from "../hooks/useWindowWidth"

function Logo() {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/")
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