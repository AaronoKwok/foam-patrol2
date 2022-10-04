import React, {useContext, useEffect, useState} from "react" 
import {Link, useLocation} from "react-router-dom"

import Logo from "./Logo"
import githubSVG from "../images/github.svg"
import linkedinSVG from "../images/linkedin.svg" 

import {Context} from "../Context"
 
function Header() {

    const {
        pleasurePoint, 
        jacks, 
        cowells, 
        steamer, 
        theHook, 
        capitola, 
        davenport, 
        pacifica, 
        hbPier, 
        waikiki
    } = useContext(Context)

    function nameUppercase(obj) {
        return obj.name.toUpperCase()
    }

    const [retreatDown, setRetreatDown] = useState(false)
    const [reportDown, setReportDown] = useState(false)
    const [aboutDown, setAboutDown] = useState(false)

    function retreatDrop() {
        setRetreatDown(true)
        console.log(retreatDown)
    }

    function retreatRise() {
        setRetreatDown(false)
        console.log(retreatDown)
    }

    function reportDrop() {
        setReportDown(true)
        console.log(reportDown)
    }

    function reportRise() {
        setReportDown(false)
        console.log(reportDown)
    }

    function aboutDrop() {
        setAboutDown(true)
        console.log(aboutDown)
    }

    function aboutRise() {
        setAboutDown(false) 
        console.log(aboutDown)
    }



    const location = useLocation()

    useEffect(() => {
        setRetreatDown(false)
    }, [location])

    return (
        <header>

            <nav>
                <Logo />

                <section className="white-in-nav">

                    {/* Retreats */}
                    <div className="nav-dropdown">
                        <p className="nav-button" onClick={retreatDrop}>SURF RETREATS &nbsp;<i className="arrow down"></i></p>

                        {
                            retreatDown &&
                            <span className="dropdown-section" onMouseLeave={retreatRise}>

                                <div className="retreat-dropdown-content">
                                    <p className="dropdown-title">MAIN COACHING RETREATS</p>
                                    <hr className="hr-dropdown"/> 

                                    <Link className="dropdown-link" to="/surfRetreats/costarica-retreat">
                                        <p className="dropdown-info">COSTA RICA | 7 DAYS</p>
                                    </Link>
                                    <Link className="dropdown-link" to="/surfRetreats/nicaragua-retreat">
                                        <p className="dropdown-info">NICARAGUA | 7 DAYS</p>
                                    </Link>
                                    <Link className="dropdown-link" to="/surfRetreats/bali-retreat">
                                        <p className="dropdown-info">BALI | 10 DAYS</p>
                                    </Link> 
                                </div>

                                <div className="retreat-dropdown-content">
                                    <p className="dropdown-title">INTERMEDIATE ONLY TRIPS</p>
                                    <hr className="hr-dropdown"/>
                                    
                                    <Link className="dropdown-link" to="/surfRetreats/intermediate/maldives-retreat">
                                        <p className="dropdown-info">MALDIVES | OCTOBER</p>
                                    </Link>
                                    <Link className="dropdown-link" to="/surfRetreats/intermediate/mentawais-retreat">
                                        <p className="dropdown-info">MENTAWAIS | NOVEMBER</p>
                                    </Link> 
                                </div>

                                <div className="retreat-dropdown-content">
                                    <p className="dropdown-title">MORE TRIP INFO</p>
                                    <hr className="hr-dropdown"/>

                                    <Link className="dropdown-link" to="/surfRetreats/surf-trip-calendar">
                                        <p className="dropdown-info">SURF TRIP CALENDAR</p>
                                    </Link>
                                </div>

                            </span>
                        }

                    </div> 

                    {/* Reports */}
                    <div className="nav-dropdown">

                        <p className="nav-button" onClick={reportDrop}>SURF REPORTS &nbsp;<i className="arrow down"></i></p>

                        {
                            reportDown &&
                            <section className="dropdown-section locs" onMouseLeave={reportRise}> 
                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">CALIFORNIA</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/surfForecasts/pleasurePoint">
                                    <p className="dropdown-info">{nameUppercase(pleasurePoint)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/jacks">
                                    <p className="dropdown-info">{nameUppercase(jacks)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/cowells">
                                    <p className="dropdown-info">{nameUppercase(cowells)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/steamer">
                                    <p className="dropdown-info">{nameUppercase(steamer)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/theHook">
                                    <p className="dropdown-info">{nameUppercase(theHook)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/capitola">
                                    <p className="dropdown-info">{nameUppercase(capitola)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/davenport">
                                    <p className="dropdown-info">{nameUppercase(davenport)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/pacifica">
                                    <p className="dropdown-info">{nameUppercase(pacifica)}</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfForecasts/hbPier">
                                    <p className="dropdown-info">{nameUppercase(hbPier)}</p>
                                </Link>
                            </div>
                            <div className="retreat-dropdown-content">
                                <p>HAWAII</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/surfForecasts/waikiki">
                                    <p className="dropdown-info">{nameUppercase(waikiki)}</p>            
                                </Link>
                            </div>
                        </section>
                        }

                        

                    </div>

                    {/* Products */}
                    {/* <div className="nav-dropdown">
            
                        <p className="nav-button">PRODUCTS &nbsp;<i className="arrow down"></i></p>

                        <span className="dropdown-section"> 

                            
                        </span>

                    </div> */}

                    {/* About */}
                    <div className="nav-dropdown">
                        <p className="nav-button" onClick={aboutDrop}>ABOUT &nbsp;<i className="arrow down"></i></p>

                        {
                            aboutDown &&
                            <span className="dropdown-section" onMouseLeave={aboutRise}> 

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">OUR COMPANY</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/about/team">
                                    <p className="dropdown-info">TEAM</p>
                                </Link>
                                <Link className="dropdown-link" to="/about/what-we-do">
                                    <p className="dropdown-info">WHAT WE DO</p>
                                </Link>
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">SURFING</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/about/is-this-trip-for-me">
                                    <p className="dropdown-info">IS THIS TRIP FOR ME?</p>
                                </Link>
                                <Link className="dropdown-link" to="/about/surfing-level">
                                    <p className="dropdown-info">WHAT IS MY SURF LEVEL?</p>
                                </Link>
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">RESOURCES</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/about/contact-us">
                                    <p className="dropdown-info">CONTACT US</p>
                                </Link>
                                <Link className="dropdown-link" to="/about/faq">
                                    <p className="dropdown-info">FAQ</p>
                                </Link>
                            </div>

                        </span>
                        }
                        
                        

                    </div>

                    <Link className="nav-link color-change" to="/online-courses">
                        <p className="nav-button">ONLINE COURSES</p>
                    </Link>
                    
                </section>

                    {/* <button onClick={changeAesthetic}></button>  */}

                {/* <div>add tripad</div> */}

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