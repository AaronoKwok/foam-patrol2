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
                                <hr className="hr-dropdown"/> 

                                <Link className="dropdown-link" to="/costarica-retreat">
                                    <p className="dropdown-info">COSTA RICA | 7 DAYS</p>
                                </Link>
                                <Link className="dropdown-link" to="/nicaragua-retreat">
                                    <p className="dropdown-info">NICARAGUA | 7 DAYS</p>
                                </Link>
                                <Link className="dropdown-link" to="/bali-retreat">
                                    <p className="dropdown-info">BALI | 10 DAYS</p>
                                </Link> 
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">INTERMEDIATE ONLY TRIPS</p>
                                <hr className="hr-dropdown"/>
                                
                                <Link className="dropdown-link" to="/maldives-retreat">
                                    <p className="dropdown-info">MALDIVES | OCTOBER</p>
                                </Link>
                                <Link className="dropdown-link" to="/mentawais-retreat">
                                    <p className="dropdown-info">MENTAWAIS | NOVEMBER</p>
                                </Link> 
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">MORE INFO</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/surf-trip-calendar">
                                    <p className="dropdown-info">SURF TRIP CALENDAR</p>
                                </Link>
                            </div>

                        </span>

                    </div> 

                    <div className="nav-dropdown">
                        <p className="nav-button">ABOUT &nbsp;<i className="arrow down"></i></p>

                        <span className="dropdown-section"> 

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">OUR COMPANY</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/team">
                                    <p className="dropdown-info">TEAM</p>
                                </Link>
                                <Link className="dropdown-link" to="/what-we-do">
                                    <p className="dropdown-info">WHAT WE DO</p>
                                </Link>
                                <Link className="dropdown-link" to="/social-resonsibility">
                                    <p className="dropdown-info">SOCIAL RESPONSIBILITY</p>
                                </Link>
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">SURFING</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/is-this-trip-for-me">
                                    <p className="dropdown-info">IS THIS TRIP FOR ME?</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfing-level">
                                    <p className="dropdown-info">WHAT IS MY SURF LEVEL?</p>
                                </Link>
                                <Link className="dropdown-link" to="/how-we-coach">
                                    <p className="dropdown-info">HOW DO WE COACH SURFING?</p>
                                </Link>
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">RESOURCES</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/contact-us">
                                    <p className="dropdown-info">CONTACT US</p>
                                </Link>
                                <Link className="dropdown-link" to="/reservation-policy">
                                    <p className="dropdown-info">RESERVATION POLICY</p>
                                </Link>
                                <Link className="dropdown-link" to="/faq">
                                    <p className="dropdown-info">FAQ</p>
                                </Link>
                            </div>

                        </span>

                    </div>

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