import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // <--- MANDATORY CSS

import { CATEGORIES_LIST } from "../../constants/CATAEGORY_COLOR";

const localizer = momentLocalizer(moment)

const events = [
    {
        start : moment('2026-01-13T08:00:00').toDate(),
        end : moment('2026-01-13T09:00:00').toDate(),
        title : "test w safi"
    }
]


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
    return (
        <div>
            <Calendar localizer={localizer} events={events} eventPropGetter={eventStyleGetter}/>
        </div>

    )
}

export default PlannerPage
