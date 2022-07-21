import React from "react"
import {Routes, Route} from "react-router-dom" 

import Header from "./components/Header"
import ContactUs from "./components/ContactUs"
import BookNow from "./components/BookNow"

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/bookNow" element={<BookNow />} />
            </Routes>
        </div>
    )
}

export default App