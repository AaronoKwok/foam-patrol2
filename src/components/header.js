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
                    {/* Two Dropdowns */}
                    <div className="nav-dropdown">
                        <p className="nav-button">SURF RETREATS &nbsp;<i className="arrow down"></i></p>
                        <span className="dropdown-section">
                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">MAIN COACHING RETREATS</p>
                                <hr className="hr-dropdown"/> {/* add links later */}
                                <p className="dropdown-info">COSTA RICA | 7 DAYS</p>
                                <p className="dropdown-info">NICARAGUA | 7 DAYS</p>
                                <p className="dropdown-info">BALI | 10 DAYS</p>
                            </div>
                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">INTERMEDIATE ONLY TRIPS</p>
                                <hr className="hr-dropdown"/>
                                <p className="dropdown-info">MALDIVES | OCTOBER</p>
                                <p className="dropdown-info">MENTAWAIS | NOVEMBER</p>
                            </div>
                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">MORE INFO</p>
                                <hr className="hr-dropdown"/>
                                <p className="dropdown-info">SURF TRIP CALENDAR</p>
                            </div>
                        </span>
                    </div>

                    {/* <div className="nav-dropdown">
                        <p className="nav-button">ABOUT &nbsp;<i className="arrow down"></i></p>
                        <span className="dropdown-section"> 
                            test text
                        </span>
                    </div> */}

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