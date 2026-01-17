import { motion } from "motion/react"
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";


import {TimePicker} from '@mui/x-date-pickers/TimePicker'
import { DatePicker } from "@mui/x-date-pickers";
import { useTasks } from "../contexts/TasksContext";

import toast, {Toaster} from "react-hot-toast";

function ScheduleTaskModal({setIsScheduleModalOpen, taskToSchedule}) {
    const [date,setDate] = useState(null);
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null);
    
    const  {scheduleTask} = useTasks();


    function handeleSubmit(e){

        const start = date.clone() // Clone so we don't mutate the original state
        .hour(startTime.hour())         // Set hour from time picker
        .minute(startTime.minute())     // Set minute from time picker
        .second(0)
        .toDate();                      // <--- CRITICAL: Convert Moment back to JS Date

    const end = date.clone()
        .hour(endTime.hour())
        .minute(endTime.minute())
        .second(0)
        .toDate(); 
        e.preventDefault();

        scheduleTask(taskToSchedule.id,start,end)
        setIsScheduleModalOpen(false)
        toast('task scheduled');
    }

    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed inset-0 flex items-center justify-center z-999 bg-black/30 ">
        <Toaster/>
        <div className="relative py-8 px-4 bg-white z-1000 rounded-md dark:bg-slate-800" >
            <button onClick={()=>setIsScheduleModalOpen(false)} className="absolute right-2 top-2 cursor-pointer text-xl hover:text-red-600 transition-all delay-150 dark:text-white" ><LiaTimesSolid /></button>
            <form className=" flex flex-col gap-3 w-80  ">
            <h2 className="text-xl text-center dark:text-white">Schdule Your Task</h2>
            <DatePicker className="dark:bg-gray-600 dark:border-gray-600 dark:text-gray-50" label="Set Task Date" value={date} onChange={(date)=> setDate(date)}/>
            <TimePicker className="dark:bg-gray-600 dark:border-gray-600 dark:text-gray-50" label="Set Task Start Time" value={startTime} onChange={(time)=> setStartTime(time)}/>
            <TimePicker className="dark:bg-gray-600 dark:border-gray-600 dark:text-gray-50" label="Set Task End Time" value={endTime} onChange={(time)=> setEndTime(time)}/>
            <button onClick={ handeleSubmit} className="bg-black text-white rounded-sm p-1 transition-all delay-150 cursor-pointer dark:bg-violet-950 dark:hover:bg-violet-900">Save</button>
            </form>
        </div>
        </motion.div>
    )
}

export default ScheduleTaskModal
