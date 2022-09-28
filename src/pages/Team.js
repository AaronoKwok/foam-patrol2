import React from "react"

import team from "../images/Team.jpeg"
import elmo from "../images/elmo.jpeg"
import bert from "../images/bert.jpeg"
import bigBird from "../images/bigBird.jpeg" 
import cookieMon from "../images/cookieMonster.jpeg"
import countVon from "../images/countVon.jpeg"  
import dorothy from "../images/dorothy.jpeg" 
import ernie from "../images/ernie.jpeg" 
import oscar from "../images/oscar.jpeg" 

function Team() {
    return (
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
                    <p className="person-name">Elmo</p>
                    <p className="person-role">Co-Founder</p>
                </div>
                <div className="team-person">
                    <img className="team-portrait" src={cookieMon} alt=""/>
                    <p className="person-name">Cookie Monster</p>
                    <p className="person-role">Co-Founder</p>
                    <p className="person-des"></p>
                </div>
                <div className="team-person">
                    <img className="team-portrait" src={bigBird} alt=""/>
                    <p className="person-name">Big Bird</p>
                    <p className="person-role">General Manager</p>
                    <p className="person-des"></p>
                </div>
                <div className="team-person">
                    <img className="team-portrait" src={ernie} alt=""/>
                    <p className="person-name">Ernie</p>
                    <p className="person-role">Head Surf Coach</p>
                    <p className="person-des"></p>
                </div>
                <div className="team-person">
                    <img className="team-portrait" src={oscar} alt=""/>
                    <p className="person-name">Oscar</p>
                    <p className="person-role">Head Surf Coach</p>
                    <p className="person-des"></p>
                </div>
                <div className="team-person">
                    <img className="team-portrait" src={countVon} alt=""/>
                    <p className="person-name">Count Von Count</p>
                    <p className="person-role">Surf Travel Director</p>
                    <p className="person-des"></p>
                </div>
                <div className="team-person">
                    <img className="team-portrait" src={dorothy} alt=""/>
                    <p className="person-name">Dorothy</p>
                    <p className="person-role">Surf Coach - Costa Rica</p>
                    <p className="person-des"></p>
                </div>
                <div className="team-person">
                    <img className="team-portrait" src={bert} alt=""/>
                    <p className="person-name">Bert</p>
                    <p className="person-role">Surf Coach - Bali</p>
                    <p className="person-des"></p>
                </div>
            </section>            
        </div>
    )
}

export default Team