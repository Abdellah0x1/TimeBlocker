import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // <--- MANDATORY CSS


const localizer = momentLocalizer(moment)

const events = [
    {
        start : moment('2026-01-13T08:00:00').toDate(),
        end : moment('2026-01-13T09:00:00').toDate(),
        title : "test w safi"
    }
]

function PlannerPage() {
    return (
        <div>
            <Calendar localizer={localizer} events={events}/>
        </div>

    )
}

export default PlannerPage
