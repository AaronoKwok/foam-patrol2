import React, {useState} from "react" 
import {Link} from "react-router-dom"

import Logo from "./Logo"
import githubSVG from "../images/github.svg"
import linkedinSVG from "../images/linkedin.svg" 
import SurfTrips from "./HeaderComps/SurfTrips"
import About from "./HeaderComps/About"
 
function Header() {
    const [trips, setTrips] = useState(false)
    const [abouts, setAbouts] = useState(false)

    const displayTrips = trips ? <SurfTrips /> : null
    const displayAbout = abouts ? <About /> : null

    function surfTrips() {
        setTrips(!trips)
    }

    function about() {
        setAbouts(!abouts)
    }

    return (
        <header >

            <nav>
                <Logo />

                <section className="whiteInNav">
                    <p className="navbuttons" onMouseEnter={surfTrips} onMouseLeave={surfTrips}>SURF TRIPS &nbsp;<i className="arrow down"></i></p>
                    <p className="navbuttons" onMouseEnter={about} onMouseLeave={about}>ABOUT &nbsp;<i className="arrow down"></i></p>

                    <Link to="/bookNow"><p className="navbuttons coChange">BOOK NOW</p></Link>
                    <Link to="/contactUs"><p className="navbuttons coChange">CONTACT US</p></Link>
                    <Link to="/onlineCourses"><p className="navbuttons coChange">ONLINE COURSES</p></Link>
                </section>

                    {/* <button onClick={changeAesthetic}></button>  */}
    
                <div className="socials">
                    <a className="gh" target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                    <a className="lkn" target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
                </div> 

                    {/* <button>Login</button> */}
            </nav>

            {displayTrips}
            {displayAbout}
            
        </header>
    )
}

export default Header