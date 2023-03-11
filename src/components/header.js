import React, {useState, useContext, useEffect} from "react" 
import {Link, useLocation} from "react-router-dom"

import Logo from "./Logo"
import githubSVG from "../assets/images/github.svg"
import linkedinSVG from "../assets/images/linkedin.svg" 

import {Context} from "../Context"
import useWindowWidth from "../hooks/useWindowWidth"
 
function Header() {

    const [hover, setHover] = useState(true)
    const [drop, setDrop] = useState(false)
    const [retreats, setRetreats] = useState(false)
    const [conditions, setConditions] = useState(false)
    const [about, setAbout] = useState(false)
    
    const [ca, setCa] = useState(false)
    const [hi, setHi] = useState(false)

    const [santaCruz, setSantaCruz] = useState(false)
    const [sanMateo, setSanMateo] = useState(false)
    const [orange, setOrange] = useState(false)
    const [oahu, setOahu] = useState(false)

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

    const location = useLocation()
   
    function nameUppercase(obj) {
        return obj.name.toUpperCase()
    }

    function doHover() { //returns css element to either have dropdown/not have dropdown
        if (hover === false) {
            return "nav-dropdown-noHover"
        } else if (hover === true) {
            return "nav-dropdown"
        }
    }

    function mobileDrop() {
        setDrop(!drop)
        setRetreats(false)
        setConditions(false)
        setAbout(false)
    }

    function chooseRetreats() {
        setRetreats(true)
    }

    function chooseConditions() {
        setConditions(true)
    }

    function chooseAbout() {
        setAbout(true)
    }

    function chooseCa() {
        setCa(!ca)
    }

    function chooseHi() {
        setHi(!hi)
    }

    function goBack() {
        if (santaCruz || sanMateo || orange) {
            setSantaCruz(false)
        }

        if (ca) {
            setSantaCruz(false)
            setSanMateo(false)
            setOrange(false)
        }

        if (hi) {
            setOahu(false)
        }

        if (conditions && !ca) {
            setHi(false)
            setCa(true)
        }

        if(conditions) {
            setHi(false)
            setCa(false)
        }

        if (!ca && !hi) {
            setRetreats(false)
            setConditions(false)
            setAbout(false)
        }   
    }

    function chooseSantaCruz() {
        setSantaCruz(!santaCruz)
    }

    function chooseSanMateo() {
        setSanMateo(!sanMateo)
    }

    function chooseOrange() {
        setOrange(!orange)
    }

    function chooseOahu() {
        setOahu(!oahu)
    }

    

    //Returns different css element names on page load - use location.pathname as dependency
    useEffect(() => {
        setDrop(false)
        setHover(false)
        setTimeout(() => {
            setHover(true)
        }, 300) //turns nav button dropdown off for ms
    }, [location.pathname])

    return (
        <header>

            {   
                (useWindowWidth() === true) && 
                <nav className="mobile-nav">
                    <Logo />

                    {
                        !drop &&
                        <div className="lines" onClick={mobileDrop}>
                            <div className="top-line"></div>
                            <div className="bottom-line"></div>
                        </div>
                    }
                    
                    {
                        drop &&
                        <div>
                            <div className="lines" onClick={mobileDrop}>
                                <div className="top-cross"></div>
                                <div className="bottom-cross"></div>
                            </div>
                            <section className="mobile-drop">
                                {
                                    (!retreats && !conditions && !about) &&
                                    <div className="nav-align">
                                        <p className="drop-title" onClick={chooseRetreats}>RETREATS</p>
                                        <p className="drop-title" onClick={chooseConditions}>CURRENT CONDITIONS</p>
                                        <p className="drop-title" onClick={chooseAbout}>ABOUT</p>
                                        <Link className="mobile-link" to="/online-courses"><p className="drop-title">ONLINE COURSES</p></Link>
                                    </div>
                                }
                                {
                                    (retreats) &&
                                    <div className="nav-align">
                                        <div onClick={goBack} className="go-back">BACK</div>
                                        <Link className="drop-nav-link" to="/surfRetreats/costarica-retreat">
                                            <p className="drop-nav-info">COSTA RICA | 7 DAYS</p>
                                        </Link>
                                        <Link className="drop-nav-link" to="/surfRetreats/nicaragua-retreat">
                                            <p className="drop-nav-info">NICARAGUA | 7 DAYS</p>
                                        </Link>
                                        <Link className="drop-nav-link" to="/surfRetreats/bali-retreat">
                                            <p className="drop-nav-info">BALI | 10 DAYS</p>
                                        </Link>
                                        <Link className="drop-nav-link" to="/surfRetreats/intermediate/maldives-retreat">
                                            <p className="drop-nav-info">MALDIVES | OCTOBER</p>
                                        </Link>
                                        <Link className="drop-nav-link" to="/surfRetreats/intermediate/mentawais-retreat">
                                            <p className="drop-nav-info">MENTAWAIS | NOVEMBER</p>
                                        </Link> 
                                    </div>
                                }
                                {
                                    (conditions) &&
                                    <div className="nav-align">
                                        <div onClick={goBack} className="go-back">BACK</div>

                                        { 
                                            (!hi && !sanMateo && !santaCruz && !orange) && <p className="drop-title" onClick={chooseCa}>CALIFORNIA</p>
                                        }

                                        {
                                            ca && 
                                            <div>
                                                { (!sanMateo && !orange) && <p className="nav-county" onClick={chooseSantaCruz}>SANTA CRUZ COUNTY</p>}

                                                {
                                                    santaCruz && 
                                                    <div>
                                                        <Link className="drop-nav-link" to="/surfForecasts/pleasurePoint">
                                                            <p className="drop-nav-info">{nameUppercase(pleasurePoint)}</p>
                                                        </Link>
                                                        <Link className="drop-nav-link" to="/surfForecasts/jacks">
                                                            <p className="drop-nav-info">{nameUppercase(jacks)}</p>
                                                        </Link>
                                                        <Link className="drop-nav-link" to="/surfForecasts/cowells">
                                                            <p className="drop-nav-info">{nameUppercase(cowells)}</p>
                                                        </Link>
                                                        <Link className="drop-nav-link" to="/surfForecasts/steamer">
                                                            <p className="drop-nav-info">{nameUppercase(steamer)}</p>
                                                        </Link>
                                                        <Link className="drop-nav-link" to="/surfForecasts/theHook">
                                                            <p className="drop-nav-info">{nameUppercase(theHook)}</p>
                                                        </Link>
                                                        <Link className="drop-nav-link" to="/surfForecasts/capitola">
                                                            <p className="drop-nav-info">{nameUppercase(capitola)}</p>
                                                        </Link>
                                                    </div>
                                                }

                                                { (!santaCruz && !orange) && <p className="nav-county" onClick={chooseSanMateo}>SAN MATEO COUNTY</p>}

                                                {
                                                    sanMateo &&
                                                    <div>
                                                        <Link className="drop-nav-link" to="/surfForecasts/davenport">
                                                            <p className="drop-nav-info">{nameUppercase(davenport)}</p>
                                                        </Link>
                                                        <Link className="drop-nav-link" to="/surfForecasts/pacifica">
                                                            <p className="drop-nav-info">{nameUppercase(pacifica)}</p>
                                                        </Link>
                                                    </div>
                                                }
                                                
                                                { (!santaCruz && !sanMateo) && <p className="nav-county" onClick={chooseOrange}>ORANGE COUNTY</p>}

                                                {
                                                    orange &&
                                                    <div>
                                                        <Link className="drop-nav-link" to="/surfForecasts/hbPier">
                                                            <p className="drop-nav-info">{nameUppercase(hbPier)}</p>
                                                        </Link>
                                                    </div>
                                                }
                                            </div>
                                        }

                                        { 
                                            !ca && !oahu && <p className="drop-title" onClick={chooseHi}>HAWAII</p>
                                        }

                                        {
                                            hi && 
                                            <div>
                                                <p className="nav-county" onClick={chooseOahu}>HONOLULU COUNTY</p>

                                                {
                                                    oahu &&
                                                    <Link className="drop-nav-link" to="/surfForecasts/waikiki">
                                                        <p className="drop-nav-info">{nameUppercase(waikiki)}</p>            
                                                    </Link> 
                                                }
                                            </div>
                                        }
                                        
                                    </div>
                                }
                                {
                                    (about) && 
                                    <div className="nav-align">
                                        <div onClick={goBack} className="go-back">BACK</div>
                                        <Link className="drop-nav-link" to="/about/team">
                                            <p className="drop-nav-info">TEAM</p>
                                        </Link>
                                        <Link className="drop-nav-link" to="/about/what-we-do">
                                            <p className="drop-nav-info">WHAT WE DO</p>
                                        </Link>

                                        <Link className="drop-nav-link" to="/about/is-this-trip-for-me">
                                            <p className="drop-nav-info">SHOULD I GO?</p>
                                        </Link>
                                        <Link className="drop-nav-link" to="/about/surfing-level">
                                            <p className="drop-nav-info">MY SURF LEVEL</p>
                                        </Link>
                                    </div>
                                }
                            </section>
                        </div>
                    }
                </nav>
            }

            {
                (useWindowWidth() === false) && 
                <nav className="nav-desk">
                    <Logo />

                    <section className="white-in-nav">

                        {/* Retreats */}
                        <div className={doHover()}> {/* when page load, for period of time, have function return nav-dropdown-noHover, then switch back to normal nav-dropdown */}
                            <p className="nav-button">SURF RETREATS &nbsp;<i className="arrow down"></i></p>

                                <div className="dropdown-section" >

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

                                    {/* <div className="retreat-dropdown-content">
                                        <p className="dropdown-title">MORE TRIP INFO</p>
                                        <hr className="hr-dropdown"/>

                                        <Link className="dropdown-link" to="/surfRetreats/surf-trip-calendar">
                                            <p className="dropdown-info">SURF TRIP CALENDAR</p>
                                        </Link>
                                    </div> */}

                                </div>
                        </div> 

                        {/* Reports */}
                        <div className={doHover()}>

                            <p className="nav-button">SURF REPORTS &nbsp;<i className="arrow down"></i></p>

                            <section className="dropdown-section locs"> 

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

                        </div> 

                        {/* Products */}
                        {/* <div className="nav-dropdown">
                
                            <p className="nav-button">PRODUCTS &nbsp;<i className="arrow down"></i></p>

                            <span className="dropdown-section"> 

                                
                            </span>

                        </div> */}

                        {/* About */}
                        <div className={doHover()}>
                            <p className="nav-button">ABOUT &nbsp;<i className="arrow down"></i></p>

                            <span className="dropdown-section about"> 

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

                                {/* <div className="retreat-dropdown-content">
                                    <p className="dropdown-title">RESOURCES</p>
                                    <hr className="hr-dropdown"/>

                                    <Link className="dropdown-link" to="/about/contact-us">
                                        <p className="dropdown-info">CONTACT US</p>
                                    </Link>
                                    <Link className="dropdown-link" to="/about/faq">
                                        <p className="dropdown-info">FAQ</p>
                                    </Link>
                                </div> */}

                            </span>
                        </div> 

                        <Link className="nav-link color-change" to="/online-courses">
                            <p className="nav-button">ONLINE COURSES</p>
                        </Link>
                        
                    </section>

                    {/* <button onClick={changeAesthetic}></button>  */}

                    {/* <div>add tripad</div> */}

                    <div className="socials">
                        <a className="github-link" target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                        <a className="linkedin-link" target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
                    </div> 

                    {/* <button>Login</button> */}
                </nav>
            }

        </header>
    )
}

export default Header