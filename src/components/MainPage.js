import React from "react"
import {Routes, Route} from "react-router-dom" 
//import {Context} from "../Context"

import ContactUs from "../pages/ContactUs"
import BookNow from "../pages/BookNow"
import OnlineCourses from "../pages/OnlineCourses"

import Header from "./Header"


function MainPage() {
    //const {changeAesthetic} = useContext(Context)
    //maybe put border color change in state

    return (
        <main>
            <Header />

            <Routes>
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/bookNow" element={<BookNow />} />
                <Route path="onlineCourses" element={<OnlineCourses />} />
            </Routes>
        </main>
    )
}

export default MainPage