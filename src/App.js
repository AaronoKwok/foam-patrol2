import React from "react"
import {Routes, Route} from "react-router-dom" 

import SurfForecasts from "./pages/SurfForecasts"
import Shop from "./pages/Shop"
import OnlineCourses from "./pages/OnlineCourses"
import Header from "./components/header"
import MainPage from "./pages/MainPage"
import Footer from "./components/Footer"

import locationData from "./Data/locationData.json"


function App() {

    const usaState = locationData[0].globe.northAmerica.country.unitedStates.state

    const pleasurePoint = usaState.california.county.santaCruz[0];
    const waikiki = usaState.hawaii.county.oahu[0]
    

    return (
        <div>
            <Header /> 
           
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/surfForecasts">
                    <Route path="/surfForecasts/pleasurePoint" element={<SurfForecasts loc={pleasurePoint}/>} />
                    <Route path="/surfForecasts/waikiki" element={<SurfForecasts loc={waikiki}/>} />
                </Route> 
                <Route path="/shop" element={<Shop />} />
                <Route path="onlineCourses" element={<OnlineCourses />} />
            </Routes>

            <Footer />
            
        </div>
    )
}

export default App