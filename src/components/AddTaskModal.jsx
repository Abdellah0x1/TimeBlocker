import { motion } from "motion/react"
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTasks } from "../contexts/TasksContext";



function AddTaskModal({setIsAddModalOpen}) {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Work");

    const {addTask} = useTasks();

    function handelSubmit (e,title,category){
            e.preventDefault();
            addTask({title,category})
            setIsAddModalOpen(false)
    }
    
    
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed inset-0 flex items-center justify-center z-999 bg-black/30 ">
            
            <div className="relative py-8 px-4 bg-white z-1000 rounded-md dark:bg-slate-900" >
            <button onClick={()=>setIsAddModalOpen(false)} className="absolute right-2 top-2 cursor-pointer text-xl hover:text-red-600 transition-all delay-150 dark:text-white" ><LiaTimesSolid /></button>
            <FormControl  className=" flex flex-col gap-2 w-80 ">
            <Select value={category } onChange={e => setCategory(e.target.value)} className="dark:text-white dark:bg-gray-600 dark:border-gray-600 dark:text-gray-50">
                <MenuItem  value="Work">Work</MenuItem>
                <MenuItem value="Pesonal">Persenal</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Learning">Learning</MenuItem>
            </Select>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 p-1 rounded-sm dark:bg-gray-600 dark:border-gray-600 dark:text-gray-50" placeholder="Task title"></input>
            <button onClick={e=> handelSubmit(e,title,category)} className="bg-black text-white rounded-sm p-1 transition-all delay-150 cursor-pointer dark:bg-violet-950 dark:hover:bg-violet-900">Save</button>
            </FormControl>
        </div>
        </motion.div>
    )
}

export default AddTaskModal
