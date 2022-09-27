import React, {useEffect} from "react"
import {Routes, Route, useLocation} from "react-router-dom" 

import SurfForecasts from "./pages/SurfForecasts"
//import Shop from "./pages/Shop"
import SurfRetreat from "./pages/SurfRetreat"
import IntRetreat from "./pages/IntRetreat"
import ChosenCourse from "./pages/ChosenCourse"
import SurfCalendar from "./pages/SurfCalendar"
import OnlineCourses from "./pages/OnlineCourses"
import Header from "./components/header"
import MainPage from "./pages/MainPage"
import Footer from "./components/Footer"
import Team from "./pages/Team"
import WhatDo from "./pages/WhatDo" 
import Social from "./pages/Social"  
import IsForMe from "./pages/IsForMe" 
import SurfLevel from "./pages/SurfLevel" 
import Coach from "./pages/Coach"  
import Contact from "./pages/Contact"  
import Reservation from "./pages/Reservation" 
import Faq from "./pages/Faq" 

import retreatData from "./Data/retreatData.json"
import locationData from "./Data/locationData.json"
import intRetreatData from "./Data/intermediateRetreat.json"
import courseData from "./Data/courseData.json"


function App() {

    //need method to have each page start at top when loaded
    //note, below does not work for going back, only foward
    const location = useLocation(); 
    useEffect(() => {
        window.scrollTo(0,0);
    }, [location])

    //retreats 
    const costaRica = retreatData[0]
    const nicaragua = retreatData[1]
    const bali = retreatData[2]
    const maldives = intRetreatData[0]
    const mentawais = intRetreatData[1]

    //forecasts
    const usaState = locationData[0].globe.northAmerica.country.unitedStates.state

    const pleasurePoint = usaState.california.county.santaCruz[0];
    const jacks = usaState.california.county.santaCruz[1]
    const cowells = usaState.california.county.santaCruz[2]
    const steamer = usaState.california.county.santaCruz[3]
    const theHook = usaState.california.county.santaCruz[4]
    const capitola = usaState.california.county.santaCruz[5]
    const davenport = usaState.california.county.santaCruz[6]
    const pacifica = usaState.california.county.sanMateo[0]
    const hbPier = usaState.california.county.orange[0]
    const waikiki = usaState.hawaii.county.oahu[0];

    //courses
    const duckDive = courseData[0]
    const generateSpeed = courseData[1]
    const paddleEfficient = courseData[2]
    const popUp = courseData[3]
    const pushThrough = courseData[4]
    const betterWave = courseData[5]
    const otherCourse = courseData[6]
    const tips = courseData[7]
    const beginners = courseData[8]
    const turtleRoll = courseData[9]
    const turnWhite = courseData[10]
    const footwork = courseData[11]
    const angle = courseData[12]
    const readWave = courseData[13]
    const stance = courseData[14]
    const etiquette = courseData[15]
    const intermediates = courseData[16]
    const position = courseData[17]
    const crossStep = courseData[18]
    const bottomTurn = courseData[19]
    const cutback = courseData[20]
    const topTurn = courseData[21]
    const sally = courseData[22]
    const michelle = courseData[23]

    return (
        <div> 
            <Header /> 
           
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/surfRetreats">
                    <Route path="/surfRetreats/costarica-retreat" element={<SurfRetreat retreat={costaRica} />} />
                    <Route path="/surfRetreats/nicaragua-retreat" element={<SurfRetreat retreat={nicaragua} />} />
                    <Route path="/surfRetreats/bali-retreat" element={<SurfRetreat retreat={bali} /> }/>
                    <Route path="/surfRetreats/intermediate/maldives-retreat" element={<IntRetreat retreat={maldives} />} />
                    <Route path="/surfRetreats/intermediate/mentawais-retreat" element={<IntRetreat retreat={mentawais} />} />
                    <Route path="/surfRetreats/surf-trip-calendar" element={<SurfCalendar />} />
                </Route>
                
                <Route path="/surfForecasts" >
                    <Route path="/surfForecasts/pleasurePoint" element={<SurfForecasts loc={pleasurePoint}/>} />
                    <Route path="/surfForecasts/waikiki" element={<SurfForecasts loc={waikiki}/>} />
                    <Route path="/surfForecasts/jacks" element={<SurfForecasts loc={jacks}/>} />
                    <Route path="/surfForecasts/cowells" element={<SurfForecasts loc={cowells}/>} />
                    <Route path="/surfForecasts/steamer" element={<SurfForecasts loc={steamer}/>} />
                    <Route path="/surfForecasts/theHook" element={<SurfForecasts loc={theHook}/>} />
                    <Route path="/surfForecasts/capitola" element={<SurfForecasts loc={capitola}/>} />
                    <Route path="/surfForecasts/davenport" element={<SurfForecasts loc={davenport}/>} />
                    <Route path="/surfForecasts/pacifica" element={<SurfForecasts loc={pacifica}/>} />
                    <Route path="/surfForecasts/hbPier" element={<SurfForecasts loc={hbPier}/>} />
                </Route> 
                {/* <Route path="/shop" element={<Shop />} /> */}

                <Route path="/onlineCourses" element={<OnlineCourses />} />  

                <Route path="/onlineCourses"> {/* originally had <Route path="/onlineCourses" element={<OnlineCourse />} />, but the "element={<OnlineCourse />}" would override the elements in the nested routes, so I made another route with the OnlineCourses element above */}
                    <Route path="/onlineCourses/duckDive" element={<ChosenCourse course={duckDive}/>} />
                    <Route path="/onlineCourses/generateSpeed" element={<ChosenCourse course={generateSpeed}/>} />
                    <Route path="/onlineCourses/paddleEfficiently" element={<ChosenCourse course={paddleEfficient}/>} />
                    <Route path="/onlineCourses/popUp" element={<ChosenCourse course={popUp}/>} />
                    <Route path="/onlineCourses/pushThrough" element={<ChosenCourse course={pushThrough}/>} />
                    <Route path="/onlineCourses/catchBetterWaves" element={<ChosenCourse course={betterWave}/>} />
                    <Route path="/onlineCourses/allOthers" element={<ChosenCourse course={otherCourse}/>} />
                    <Route path="/onlineCourses/learningTips" element={<ChosenCourse course={tips}/>} />
                    <Route path="/onlineCourses/surfboardsForBeginners" element={<ChosenCourse course={beginners}/>} />
                    <Route path="/onlineCourses/turtleRoll" element={<ChosenCourse course={turtleRoll}/>} />
                    <Route path="/onlineCourses/turningInTheWhiteWater" element={<ChosenCourse course={turnWhite}/>} />
                    <Route path="/onlineCourses/footwork" element={<ChosenCourse course={footwork}/>} />
                    <Route path="/onlineCourses/anglingTheTakeoff" element={<ChosenCourse course={angle}/>} />
                    <Route path="/onlineCourses/readingWaves" element={<ChosenCourse course={readWave}/>} />
                    <Route path="/onlineCourses/stance" element={<ChosenCourse course={stance}/>} />
                    <Route path="/onlineCourses/etiquette" element={<ChosenCourse course={etiquette}/>} />
                    <Route path="/onlineCourses/surfboardsForIntermediates" element={<ChosenCourse course={intermediates}/>} />
                    <Route path="/onlineCourses/positioningForWaves" element={<ChosenCourse course={position}/>} />
                    <Route path="/onlineCourses/crossStep" element={<ChosenCourse course={crossStep}/>} />
                    <Route path="/onlineCourses/bottomTurn" element={<ChosenCourse course={bottomTurn}/>} />
                    <Route path="/onlineCourses/cutback" element={<ChosenCourse course={cutback}/>} />
                    <Route path="/onlineCourses/topTurn" element={<ChosenCourse course={topTurn}/>} />
                    <Route path="/onlineCourses/yogaWithSally" element={<ChosenCourse course={sally}/>} />
                    <Route path="/onlineCourses/fitnessMobilityWithMichelle" element={<ChosenCourse course={michelle}/>} />
                </Route>

                <Route path="/about">
                    <Route path="/about/team" element={<Team />} />
                    <Route path="/about/what-we-do" element={<WhatDo />} />
                    <Route path="/about/social-responsibility" element={<Social />} />
                    <Route path="/about/is-this-trip-for-me" element={<IsForMe />} />
                    <Route path="/about/surfing-level" element={<SurfLevel />} />
                    <Route path="/about/how-we-coach" element={<Coach />} />
                    <Route path="/about/contact-us" element={<Contact />} />
                    <Route path="/about/reservation-policy" element={<Reservation />} />
                    <Route path="/about/faq" element={<Faq />} />
                </Route>

            </Routes>

            <Footer />
            
        </div>
    )
}

export default App