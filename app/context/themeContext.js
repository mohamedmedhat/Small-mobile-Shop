'use client'
import {createContext, useState} from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children} )=>{
    const [mode, setMode] = useState("dark")

    const SWITCH = ()=>{
        setMode(prev =>(prev ==="dark"? "light":"dark"));
    }

    return(
        <ThemeContext.Provider value={{SWITCH, mode}}>
        <div className={`theme ${mode}`}>
        {children}
        </div>
        </ThemeContext.Provider>
    )
}
