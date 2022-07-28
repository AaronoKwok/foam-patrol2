import React from "react"  

import wave from "../images/wave.png"  

function BacksceneText() {
    return (
        <div className="backscene-text">
            <img className="wave" src={wave} alt=""/>
            <h1 className="image-h1">The most consistent surf <br /> spots on earth.</h1>
            <p className="description-on-backscene">Retreats only occur during optimal surf seasons for your level.</p>
            <div className="backscene-links">
                <a className="link-loc" href="#">Costa Rica</a>
                <a className="link-loc" href="#">Nica</a>
                <a className="link-loc" href="#">Bali</a>
                <a className="link-loc" href="#">Mentawai</a>
                <a className="link-loc" href="#">Maldives</a>
            </div>
        </div>
    )
}

export default BacksceneText