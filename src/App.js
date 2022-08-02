import React from "react"
import {Routes, Route} from "react-router-dom" 

import SurfForecasts from "./pages/SurfForecasts"
import Shop from "./pages/Shop"
import OnlineCourses from "./pages/OnlineCourses"
import Header from "./components/Header"
import MainPage from "./pages/MainPage"
import Footer from "./components/Footer"


function App() {
    return (
        <div>
            <Header /> 
           
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/SurfForecasts" element={<SurfForecasts />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="onlineCourses" element={<OnlineCourses />} />
            </Routes>

            <Footer />
            
        </div>
    )
}

export default App