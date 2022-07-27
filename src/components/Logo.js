import React from "react" 
import {useNavigate} from "react-router-dom"

function Logo() {
    const navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }

    return (
        <div className="logo" onClick={handleClick}>
            <p className="logoSpacing">FOAM</p>
            <p className="logoSpacing">PATROL.</p>
            <p className="travel logoSpacing">TRAVEL</p>
        </div>
    )
}

export default Logo