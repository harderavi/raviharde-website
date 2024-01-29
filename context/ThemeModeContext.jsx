"use client" 
const { useContext, createContext, useState, useEffect } = require("react");

// Create context with default value
const ThemeModeContext = createContext({
    themeMode : false,
        toggleThemeMode : ()=>{}
})

// Custom hook to use the ThemeModeContext
export const useThemeMode =()=> {
    console.log('Use')
    return useContext(ThemeModeContext)
}

// ThemeModeProvider component to wrap the app with
export const ThemeModeProvider = ({children}) =>{
    const [themeMode, setThemeMode] = useState(true)
    const toggleThemeMode =()=>{
        console.log('themeMode')
        setThemeMode((prev)=>!prev)
    }

    // useEffect to update the body class when the themeMode change
    useEffect(()=>{
        document.querySelector('html').classList.toggle('dark', themeMode)
    },[themeMode])

    return (
        <ThemeModeContext.Provider value={{themeMode, toggleThemeMode}}>
            {children}
        </ThemeModeContext.Provider>
    )
}