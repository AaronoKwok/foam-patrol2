import {useEffect, useState} from 'react'

function getWidth() {
    const {innerWidth: width} = window
    return width
}

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(getWidth())

    useEffect(() => {
        function assignWidth() {
            setWindowWidth(getWidth())
        }

        window.addEventListener('resize', assignWidth)
        return () => window.removeEventListener('resize', assignWidth)
    }, [])

    return windowWidth
}