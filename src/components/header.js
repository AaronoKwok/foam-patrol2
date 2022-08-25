import React, {useState, useContext} from "react" 
import {Link} from "react-router-dom"

import Logo from "./Logo"
import githubSVG from "../images/github.svg"
import linkedinSVG from "../images/linkedin.svg" 

import locationData from "../Data/locationData.json"

 
function Header() {

    const usaState = locationData[0].globe.northAmerica.country.unitedStates.state

    const pleasurePoint = usaState.california.county.santaCruz[0].name.toUpperCase();
    const jacks = usaState.california.county.santaCruz[1].name.toUpperCase();
    const cowells = usaState.california.county.santaCruz[2].name.toUpperCase();
    const steamer = usaState.california.county.santaCruz[3].name.toUpperCase();
    const theHook = usaState.california.county.santaCruz[4].name.toUpperCase();
    const capitola = usaState.california.county.santaCruz[5].name.toUpperCase();
    const davenport = usaState.california.county.santaCruz[6].name.toUpperCase();
    const pacifica = usaState.california.county.sanMateo[0].name.toUpperCase();
    const hbPier = usaState.california.county.orange[0].name.toUpperCase();
    const waikiki = usaState.hawaii.county.oahu[0].name.toUpperCase();


    return (
        <header>

            <nav>
                <Logo />

                <section className="white-in-nav">

                    {/* Four Dropdowns */}
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

                        <p className="nav-button">SURF FORECASTS &nbsp;<i className="arrow down"></i></p>

                        <section className="dropdown-section locs"> 
                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">CALIFORNIA</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/surfForecasts/pleasurePoint">
                                    <p className="dropdown-info">{pleasurePoint}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/jacks">
                                    <p className="dropdown-info">{jacks}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/cowells">
                                    <p className="dropdown-info">{cowells}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/steamer">
                                    <p className="dropdown-info">{steamer}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/theHook">
                                    <p className="dropdown-info">{theHook}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/capitola">
                                    <p className="dropdown-info">{capitola}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/davenport">
                                    <p className="dropdown-info">{davenport}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/pacifica">
                                    <p className="dropdown-info">{pacifica}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/hbPier">
                                    <p className="dropdown-info">{hbPier}</p>
                                </Link>
                            </div>
                            <div className="retreat-dropdown-content">
                                <p>HAWAII</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/surfForecasts/waikiki">
                                    <p className="dropdown-info">{waikiki}</p>            
                                </Link>
                            </div>
                        </section>

                    </div>

                    <div className="nav-dropdown">
            
                        <p className="nav-button">PRODUCTS &nbsp;<i className="arrow down"></i></p>

                        <span className="dropdown-section"> 

                            
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

                    <Link className="nav-link color-change" to="/onlineCourses">
                        <p className="nav-button">ONLINE COURSES</p>
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