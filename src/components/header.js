import React from "react" 
import {Link} from "react-router-dom"

import Logo from "./Logo"
import githubSVG from "../images/github.svg"
import linkedinSVG from "../images/linkedin.svg" 


function Header() {
    return (
        <header className="navbar">

            <Logo />

            <section className="whiteInNav">
                <p className="navbuttons">SURF TRIPS &nbsp;<i className="arrow down"></i></p>
                <p className="navbuttons">ABOUT &nbsp;<i className="arrow down"></i></p>
                <p className="navbuttons "><Link to="/bookNow">BOOK NOW</Link></p>
                <p className="navbuttons "><Link to="/contactUs">CONTACT US</Link></p>
                <p className="navbuttons"><Link to="/onlineCourses">ONLINE COURSES</Link></p>
            </section>

                {/* <button onClick={changeAesthetic}></button>  */}
                
            <div className="socials">
                <a className="gh" target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                <a className="lkn" target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
            </div> 

            {/* <button>Login</button> */}

        </header>
    )
}

export default Header