import React from "react"

import useWindowWidth from "../hooks/useWindowWidth"

import team from "../assets/images/Team.jpeg"
import elmo from "../assets/images/elmo.jpeg"
import bert from "../assets/images/bert.jpeg"
import bigBird from "../assets/images/bigBird.jpeg" 
import cookieMon from "../assets/images/cookieMonster.jpeg"
import countVon from "../assets/images/countVon.jpeg"  
import dorothy from "../assets/images/dorothy.jpeg" 
import ernie from "../assets/images/ernie.jpeg" 
import oscar from "../assets/images/oscar.jpeg" 

function Team() {
    return (
        <div>
            {
                (useWindowWidth()) &&
                <div className="team-width">
                    <div>
                        <div className="team-bar-mobile">
                            <p className="team-title">Our Team</p>
                            <p className="team-subtitle">Meet the Family</p>
                            <p className="team-mobile-des">We believe only dedicated, passionate human beings can create amazing surf travel experiences. This is why our focus is on building a family of highly professional team members from across the world. Each member of our team is carefully hand-picked, trained and committed to offer the best surf travel experiences for beginners & intermediates.</p>
                        </div>
                    </div>

                    <section className="team-members">
                        <div className="team-person">
                            <img className="team-portrait" src={elmo} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Elmo</p>
                                <p className="person-role">Co-Founder</p> 
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={cookieMon} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Cookie Monster</p>
                                <p className="person-role">Co-Founder</p>
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={bigBird} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Big Bird</p>
                                <p className="person-role">General Manager</p>
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={ernie} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Ernie</p>
                                <p className="person-role">Head Surf Coach</p>  
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={oscar} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Oscar</p>
                                <p className="person-role">Head Surf Coach</p>  
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={countVon} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Count Von Count</p>
                                <p className="person-role">Surf Travel Director</p> 
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={dorothy} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Dorothy</p>
                                <p className="person-role">Surf Coach - Costa Rica</p>  
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={bert} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Bert</p>
                                <p className="person-role">Surf Coach - Bali</p>  
                            </div>
                        </div>
                    </section>            
                </div>
            }
            {
                (!useWindowWidth()) &&
                <div className="team-width">
                    <div className="filler"></div>

                    <div className="team-bar">
                        <div className="team-bar-description">
                            <p className="team-title">Team</p>
                            <p className="team-subtitle">Meet the Family</p>
                            <p>We believe only dedicated, passionate human beings can create amazing surf travel experiences. This is why our focus is on building a family of highly professional team members from across the world. Each member of our team is carefully hand-picked, trained and committed to offer the best surf travel experiences for beginners & intermediates.</p>
                        </div>
                        <img className="team-img" src={team} alt=""/>
                    </div>

                    <section className="team-members">
                        <div className="team-person">
                            <img className="team-portrait" src={elmo} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Elmo</p>
                                <p className="person-role">Co-Founder</p> 
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={cookieMon} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Cookie Monster</p>
                                <p className="person-role">Co-Founder</p>
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={bigBird} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Big Bird</p>
                                <p className="person-role">General Manager</p>
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={ernie} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Ernie</p>
                                <p className="person-role">Head Surf Coach</p>  
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={oscar} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Oscar</p>
                                <p className="person-role">Head Surf Coach</p>  
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={countVon} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Count Von Count</p>
                                <p className="person-role">Surf Travel Director</p> 
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={dorothy} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Dorothy</p>
                                <p className="person-role">Surf Coach - Costa Rica</p>  
                            </div>
                        </div>
                        <div className="team-person">
                            <img className="team-portrait" src={bert} alt=""/>
                            <div className="person-tab">
                                <p className="person-name">Bert</p>
                                <p className="person-role">Surf Coach - Bali</p>  
                            </div>
                        </div>
                    </section>            
                </div>
            }
        </div>
    )
}

export default Team