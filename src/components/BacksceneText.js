import React from "react"  

import wave from "../images/wave.png"  

function BacksceneText() {
    return (
        <div className="backscene-text">
            <img className="wave" src={wave} alt=""/>
            <h1 className="image-h1">The most consistent surf <br /> spots on earth.</h1>
            <p>Retreats only occur during optimal surf seasons for your level.</p>
            <div className="backscene-links">
                <a href="#">Costa Rica</a>
                <a href="#">Nica</a>
                <a href="#">Bali</a>
                <a href="#">Mentawai</a>
                <a href="#">Maldives</a>
            </div>
        </div>
    )
}

export default BacksceneText