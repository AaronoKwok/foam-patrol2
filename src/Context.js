import React, {useState} from "react"

import locationData from "./Data/locationData.json"

const Context = React.createContext()



function ContextProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)

    const testVar = "context variadble"
    const usaState = locationData[0].globe.northAmerica.country.unitedStates.state

    const pleasurePoint = usaState.california.county.santaCruz[0].name;
    const waikiki = usaState.hawaii.county.oahu[0].name


    function changeAesthetic() {
        setDarkMode(!darkMode)
    }

    return (
        <Context.Provider value={{
            pleasurePoint, 
            waikiki, 
            testVar,
            changeAesthetic
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}