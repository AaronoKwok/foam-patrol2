import React, {useState} from "react"
const Context = React.createContext()

function ContextProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)

    function changeAesthetic() {
        setDarkMode(!darkMode)
    }

    return (
        <Context.Provider value={{
            changeAesthetic
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}