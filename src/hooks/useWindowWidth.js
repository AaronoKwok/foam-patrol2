import {useEffect, useState} from 'react'

function getWidth() {
    const {innerWidth: width} = window // assign variable 'width' to value of window.innerWidth via destructured assignment
    return width
}

export default function useWindowWidth() {

    const mobileWidth = 950; //max mobile width
    const [windowWidth, setWindowWidth] = useState(getWidth()) //function declared globally to get actual width, instead of a random starting point

    useEffect(() => {
        function assignWidth() {
            setWindowWidth(getWidth()) //calls globally declared function
            console.log(getWidth())
        }

        window.addEventListener('resize', assignWidth) //here, assignWidth is seen as a variable holding a function and is the callback that is executed
        return () => window.removeEventListener('resize', assignWidth)
    }, [])

    return windowWidth <= mobileWidth //switch to mobile design if window with is less than 950px
}

//false => desktop
//true => mobile