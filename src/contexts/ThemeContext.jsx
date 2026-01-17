import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();


export function ThemeProvier({children}){
    const [theme, setTheme] = useState('light')

    useEffect(()=>{
        if(theme === 'dark') document.querySelector('html').classList.add('dark')
        if(theme === 'light') document.querySelector('html').classList.remove('dark')
    },[theme])


    return <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
}


export function useTheme(){
    return useContext(ThemeContext)
}