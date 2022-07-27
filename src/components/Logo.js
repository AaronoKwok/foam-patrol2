import React from "react" 
import {useNavigate} from "react-router-dom"

function Logo() {
    const navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }

    return (
        <div className="logo" onClick={handleClick}>
            <p className="logo-spacing">FOAM</p>
            <p className="logo-spacing">PATROL.</p>
            <p className="travel logo-spacing">TRAVEL</p>
        </div>
    )
}

export default Logo