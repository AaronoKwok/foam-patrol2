import React from "react"
import {Routes, Route} from "react-router-dom" 

import Header from "./components/header"
import ContactUs from "./components/contactUs"
import AboutUs from "./components/aboutUs"

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
        </div>
    )
}

export default App