import React from "react" 
import {useNavigate} from "react-router-dom"

function Logo() {
    const navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }

    return (
        <div className="logo" onClick={handleClick}>
            <p>FOAM</p>
            <p>PATROL.</p>
            <p className="travel">TRAVEL</p>
        </div>
    )
}

export default Logo