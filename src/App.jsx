import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { BrowserRouter, Routes ,Route } from "react-router-dom"
import AppLayout from "./AppLayout"
import PlannerPage from "./pages/PlannerPage"
import Stats from "./pages/Stats"

function App() {

  return (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="planner" element={<PlannerPage/>}/>
          <Route path="stats" element={<Stats/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </LocalizationProvider>
  )
}

export default App
