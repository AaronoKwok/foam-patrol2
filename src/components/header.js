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
                <Link to="/bookNow"><p>BOOK NOW</p></Link>
                <Link to="/contactUs"><p>CONTACT US</p></Link>
                <button className="courses">ONLINE COURSES</button>
            </section>
            {/* <button onClick={changeAesthetic}></button>  */}
            <section className="socials">
                <a target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                <a target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
            </section> 
        </header>
    )
}

export default Header