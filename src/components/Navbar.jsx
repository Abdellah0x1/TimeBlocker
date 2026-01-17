import { NavLink } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"

import { CiLight,CiDark  } from "react-icons/ci";


function Navbar() {
    const {theme,setTheme} = useTheme();
    function Active(isActive) {
        return isActive ? "bg-black transition-all delay-75 text-gray-100 px-2 py-1 rounded-sm dark:bg-violet-800 dark:text-violet-100":"transition-all delay-75  dark:hover:text-black hover:bg-violet-300 px-2 py-1 rounded-sm"
    }

    return (
        <div className="flex items-center px-1 gap-2 dark:text-gray-300 dark:bg-slate-950 bg-white rounded-md border border-gray-200 shadow-md dark:border-gray-400">
            <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} className="cursor-pointer border-r border-r-gray-500 hover:bg-gray-100 p-1 rounded-sm dark:hover:bg-violet-300 dark:hover:text-black">{theme === 'light' ? <CiLight />: <CiDark/> }</button>
            <NavLink to="/" className={({isActive})=>Active(isActive)}>Home</NavLink>
            <NavLink to="/planner" className={({isActive})=>Active(isActive)}>Planner</NavLink>
            <NavLink to="/stats" className={({isActive})=>Active(isActive)}>Stats</NavLink>
            <NavLink to="/settings" className={({isActive})=>Active(isActive)}>Settings</NavLink>
        </div>
    )
}

export default Navbar
