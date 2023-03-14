import React from "react"
import BarLoader from "react-spinners/BarLoader"

const customStyle = {
    display: "block", 
    margin: "0 auto", 
    borderRadius: "5px",
}

const Loading = () => {
    return <BarLoader color="rgb(80, 148, 160)" cssOverride={customStyle} aria-label="Loading Bar" />
}

export default Loading