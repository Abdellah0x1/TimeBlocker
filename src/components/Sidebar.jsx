import {createPortal} from "react-dom"


import AddTaskModal from "./AddTaskModal"
import { useState } from "react"
import { useTasks } from "../contexts/TasksContext";

import { CiTrash } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import ScheduleTaskModal from "./ScheduleTaskModal";



function Sidebar() {
    const [IsAddModalOpen, setIsAddModalOpen] = useState(false);
    const [IsScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
    const {state, addTask, removeTask}  = useTasks();

    function handelSubmit (e,title,category){
        e.preventDefault();
        addTask({title,category})
        setIsAddModalOpen(false)
    }

    function handelScheduleSubmit(){

    }

    return <>
     {IsAddModalOpen && createPortal(<AddTaskModal handelSubmit={handelSubmit} setIsAddModalOpen={setIsAddModalOpen}/>, document.body)}
     {IsScheduleModalOpen && createPortal(<ScheduleTaskModal setIsScheduleModalOpen={setIsScheduleModalOpen} handelScheduleSubmit={handelScheduleSubmit}/> , document.body)}
            <div className=" w-full h-full rounded-md shadow-xl px-4 py-4 dark:bg-slate-900 ">
                <button onClick={()=> setIsAddModalOpen(true)} className="w-full bg-black text-white transiiton-all delay-150 p-1 rounded-md cursor-pointer hover:bg-white hover:text-black border hover:border-black dark:bg-violet-950 dark:border-violet-700 dark:hover:bg-violet-800 dark:hover:text-white">Add task</button>

                <h3>Tasks:</h3>
                <div className="flex flex-col gap-2">
                    {state.bucket.map((task,i)=> <div className="p-1 relative text-center rounded-md border border-gray-900 dark:bg-slate-800 dark:text-" key={i}>{task.title} 
                        <button onClick={()=> setIsScheduleModalOpen(true)} className="absolute right-8 top-0.5 translate-y-0.5 cursor-pointer hover:bg-gray-100 rounded-sm p-1 dark:hover:text-gray-900 dark:hover:bg-violet-300"><RiCalendarScheduleLine/></button>
                        <button onClick={()=>removeTask(task.id)} className="absolute right-2 top-0.5 translate-y-0.5 cursor-pointer hover:bg-gray-100 rounded-sm p-1 dark:hover:text-gray-900 dark:hover:bg-violet-300"><CiTrash/></button>
                    </div>)}
                </div>

            </div>
    </>
    
}

export default Sidebar
