import React, {useState} from "react" 
import {Link} from "react-router-dom"

import Logo from "./Logo"
import githubSVG from "../images/github.svg"
import linkedinSVG from "../images/linkedin.svg" 

 
function Header() {

    return (
        <header>

            <nav>
                <Logo />

                <section className="white-in-nav">
                    <div className="retreat-dropdown">
                        <p className="nav-button">SURF RETREATS &nbsp;<i className="arrow down"></i></p>
                        <span className="retreat-section">
                            testing
                        </span>
                    </div>

                    <p className="nav-button about-dropdown">ABOUT &nbsp;<i className="arrow down"></i></p>
                    <section className="about-section"> 

                    </section>

                    <Link className="nav-link color-change" to="/surfForecasts">
                        <p className="nav-button">SURF FORECAST</p>
                    </Link>
                    <Link className="nav-link color-change" to="/onlineCourses">
                        <p className="nav-button">ONLINE COURSES</p>
                    </Link>
                    <Link className="nav-link color-change" to="/shop">
                        <p className="nav-button">SHOP</p>
                    </Link>
                </section>

                    {/* <button onClick={changeAesthetic}></button>  */}

                <div>add tripad</div>

                <div className="socials">
                    <a className="gh" target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                    <a className="lkn" target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
                </div> 

                    {/* <button>Login</button> */}
            </nav>

           
        </header>
    )
}

export default Header