import React from "react"  

import wave from "../images/wave.png"  

function BacksceneText() {
    return (
        <div className="backscene-text">
            <img className="wave" src={wave} alt=""/>
            <div>
                <h1 className="image-h1 image-h1-margin">The most consistent surf</h1>
                <h1 className="image-h1">spots on earth.</h1>
            </div>
            <p className="description-on-backscene">Retreats only occur during optimal surf seasons for your level.</p>
            <div className="backscene-links">
                <a className="link-loc" href="#">Costa Rica</a>
                <a className="link-loc" href="#">Nicaragua</a>
                <a className="link-loc" href="#">Bali</a>
                <a className="link-loc" href="#">Mentawai</a>
                <a className="link-loc" href="#">Maldives</a>
            </div>
        </div>
    )
}

export default BacksceneText