import React from "react"
import {Routes, Route} from "react-router-dom" 

import SurfForecasts from "./pages/SurfForecasts"
//import Shop from "./pages/Shop"
import SurfRetreat from "./pages/SurfRetreat"
import SurfCalendar from "./pages/SurfCalendar"
import OnlineCourses from "./pages/OnlineCourses"
import Header from "./components/header"
import MainPage from "./pages/MainPage"
import Footer from "./components/Footer"

import retreatData from "./Data/retreatData.json"
import locationData from "./Data/locationData.json"


function App() {

    //retreats 
    const costaRica = retreatData[0]
    const nicaragua = retreatData[1]
    const bali = retreatData[2]
    const maldives = retreatData[3]
    const mentawais = retreatData[4]

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

    return (
        <div>
            <Header /> 
           
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/surfRetreats">
                    <Route path="/surfRetreats/costarica-retreat" element={<SurfRetreat retreat={costaRica} />} />
                    <Route path="/surfRetreats/nicaragua-retreat" element={<SurfRetreat retreat={nicaragua} />} />
                    <Route path="/surfRetreats/bali-retreat" element={<SurfRetreat retreat={bali} /> }/>
                    <Route path="/surfRetreats/maldives-retreat" element={<SurfRetreat retreat={maldives} />} />
                    <Route path="/surfRetreats/mentawais-retreat" element={<SurfRetreat retreat={mentawais} />} />
                    <Route path="/surfRetreats/surf-trip-calendar" element={<SurfCalendar />} />
                </Route>
                
                <Route path="/surfForecasts">
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
                <Route path="onlineCourses" element={<OnlineCourses />} />
            </Routes>

            <Footer />
            
        </div>
    )
}

export default App