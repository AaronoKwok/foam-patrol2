import React from "react" 
import {Link} from "react-router-dom"

import onePercent from "../assets/images/one-percent.png"
import githubSVG from "../assets/images/github.svg"
import linkedinSVG from "../assets/images/linkedin.svg" 

import useWindowWidth from "../hooks/useWindowWidth"

function Footer() {

    return (
        <div>
            {
                (useWindowWidth() === true) && 
                <div>
                    <section className="one-percent">
                        <p className="one-percent-desc">1% of every sale goes to nonprofit organizations that work to clean and protect our oceans.</p>
                        <a target="_blank" rel="noreferrer" href="https://onepercentfortheplanet.org/"><img className="one-percent-img" src={onePercent} alt="" /></a>
                    </section>
                    <section className="footer-mid">
                        <div className="footer-internal-links">
                            <p className="footer-surf">Surfing</p>
                            <Link className="footer-surf-questions" to="/about/surfing-level"><p>What's my surfing level?</p></Link> 
                            <Link className="footer-surf-questions" to="/about/is-this-trip-for-me"><p className="footer-second">Is this surf trip for me?</p></Link>
                        </div>
                        {/* <div>
                            <p>Trip Advisor</p>
                        </div> */}
                        <div>
                            <p className="footer-socials">Socials</p>
                            <div className="footer-socials-background">
                                <a className="gh" target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                                <a className="lkn" target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
                            </div>
                        </div>
                    </section>
                    <section className="footer-base">
                        <p className="footer-base-left">United States | English (US) | $ (USD)</p>
                        <p className="footer-base-right">&#169; 2022 Foam Patrol. Travel | Images and design inspiration from <a className="barefoot" href="https://barefootsurftravel.com/" target="_blank" rel="noreferrer">Barefoot Surf</a></p>
                    </section>
                </div>
            }
            {
                (useWindowWidth() === false) && 
                <div>
                    <section className="one-percent">
                        <p className="one-percent-desc">1% of every sale goes to nonprofit organizations that work to clean and protect our oceans.</p>
                        <a target="_blank" rel="noreferrer" href="https://onepercentfortheplanet.org/"><img className="one-percent-img" src={onePercent} alt="" /></a>
                    </section>
                    <section className="footer-mid">
                        <div className="footer-internal-links">
                            <p className="footer-surf">Surfing</p>
                            <Link className="footer-surf-questions" to="/about/surfing-level"><p>What's my surfing level?</p></Link> 
                            <Link className="footer-surf-questions" to="/about/is-this-trip-for-me"><p className="footer-second">Is this surf trip for me?</p></Link>
                        </div>
                        {/* <div>
                            <p>Trip Advisor</p>
                        </div> */}
                        <div>
                            <p className="footer-socials">Socials</p>
                            <div className="footer-socials-background">
                                <a className="gh" target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                                <a className="lkn" target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
                            </div>
                        </div>
                    </section>
                    <section className="footer-base">
                        <p className="footer-base-left">United States | English (US) | $ (USD)</p>
                        <p className="footer-base-right">&#169; 2022 Foam Patrol. Travel | Images and design inspiration from <a className="barefoot" href="https://barefootsurftravel.com/" target="_blank" rel="noreferrer">Barefoot Surf</a></p>
                    </section>
                </div>
            }
            
        </div>
    )
}

export default Footer