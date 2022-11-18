import {useEffect, useState} from 'react'

function getWidth() {
    const {innerWidth: width} = window // assigns a variable called 'width' to value of window.innerWidth via destructured assignment
    //const Window.innerWidth = width // not the same as above. also bc Window.innerWidth is 'read-only', it cannot be over written or assigned to
    //const widthh = window.innerWidth // is the same as 'const {innerWidth:value} = window
    return width
}

export default function useWindowWidth() {

    const mobileWidth = 950; //max mobile width
    const [windowWidth, setWindowWidth] = useState(getWidth()) //function declared globally to get actual width, instead of a random starting point

    useEffect(() => {
        function assignWidth() {
            setWindowWidth(getWidth()) //calls globally declared function
        }

        window.addEventListener('resize', assignWidth) //here, assignWidth is seen as a variable holding a function and is the callback that is executed
        return () => window.removeEventListener('resize', assignWidth) // clean up function follow return in useEffect
    }, [])

    return windowWidth <= mobileWidth //switch to mobile design if window with is less than 950px
}

//false => desktop
//true => mobile