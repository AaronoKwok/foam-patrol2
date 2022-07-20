import React from "react" 
import {Link} from "react-router-dom"
//import {Context} from "../Context"

import githubSVG from "../images/github.svg"
import linkedinSVG from "../images/linkedin.svg"

function Header() {
    //const {changeAesthetic} = useContext(Context)

    return (
        <header>
            <h1>Logo</h1>
            <section className="barInNav">
                <p>SURF TRIPS  &nbsp;<i className="arrow down"></i></p>
                <p>ABOUT &nbsp;<i className="arrow down"></i></p>
                <p>BOOK NOW</p>
                <p>CONTACT US</p>
                <button className="courses">ONLINE COURSES</button>
            </section>
            {/* <button onClick={changeAesthetic}></button>  */}
            <section className="socials">
                <img src={githubSVG} alt=""></img>
                <img src={linkedinSVG} alt=""></img>
            </section> 
        </header>
    )
}

export default Header