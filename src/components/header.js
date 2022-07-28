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

    const displayTrips = trips === true ? <SurfTrips /> : null
    const displayAbout = abouts === true ? <About /> : null

    function surfTrips() {
  
            setTrips(() => {
                if (trips === false) {
                    return true
                } else {
                    return false
                }
            })
     
  
    }

    function about() {
        setAbouts(!abouts)
    }

    return (
        <header>

            <nav>
                <Logo />

                <section className="white-in-nav">
                    <p className="nav-button" onMouseEnter={surfTrips} onMouseLeave={surfTrips}>SURF TRIPS &nbsp;<i className="arrow down"></i></p>
                    <p className="nav-button" onMouseEnter={about} onMouseLeave={about}>ABOUT &nbsp;<i className="arrow down"></i></p>

                    <Link className="nav-link color-change" to="/bookNow">
                        <p className="nav-button">BOOK NOW</p>
                    </Link>
                    <Link className="nav-link color-change" to="/contactUs">
                        <p className="nav-button">CONTACT US</p>
                    </Link>
                    <Link className="nav-link color-change" to="/onlineCourses">
                        <p className="nav-button">ONLINE COURSES</p>
                    </Link>
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