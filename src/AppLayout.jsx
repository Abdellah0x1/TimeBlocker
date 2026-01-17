import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

import { ThemeProvier } from "./contexts/ThemeContext"
import { TasksProvier } from "./contexts/TasksContext"


function AppLayout() {
    return (
        <ThemeProvier>
            <TasksProvier>
                <div className="flex flex-col dark:text-gray-300  bg-gray-50 dark:bg-slate-950 h-screen">
            <header className="h-16 px-6 py-2 flex justify-center "><Navbar/></header>
            <div className="flex">
                <aside className="w-72 h  h-screen">
                    <Sidebar/>
                </aside>
                <main className="flex-1 px-6 py-2" >
                    <Outlet/>
                </main>
            </div>
        </div>
            </TasksProvier>
        </ThemeProvier>
    )
}

export default AppLayout
