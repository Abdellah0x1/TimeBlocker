import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // <--- MANDATORY CSS

import { CATEGORIES_LIST } from "../../constants/CATAEGORY_COLOR";
import { useTasks } from "../contexts/TasksContext";

const localizer = momentLocalizer(moment)



function eventStyleGetter(event){
    const category = CATEGORIES_LIST.find(category => category.label === event.category);
    const backgroundColor = category ? category.color : "#3b82f6"
    return {
        style: {
            backgroundColor,
            borderRadius: '5px',
            opacity: 0.8   
        }
    }
}

function PlannerPage() {
    const {state} = useTasks() 

    const formattedEvents = state.schedule.map((task) => {
        return {
        ...task,
        start: new Date(task.start), 
        end: new Date(task.end)
        };
  });


    return (
        <div>
            <Calendar localizer={localizer} events={formattedEvents} eventPropGetter={eventStyleGetter}/>
        </div>

    )
}

export default PlannerPage
