import React from "react"
import {Routes, Route} from "react-router-dom" 

import ContactUs from "./pages/SurfCharts"
import BookNow from "./pages/BookNow"
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
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/bookNow" element={<BookNow />} />
                <Route path="onlineCourses" element={<OnlineCourses />} />
            </Routes>

            <Footer />
            
        </div>
    )
}

export default App