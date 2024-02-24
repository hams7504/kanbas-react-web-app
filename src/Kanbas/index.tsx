import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Account from "./Account";

function Kanbas() {
   return (
     <div className="d-flex" style={{ height: '100vh' }}>
      <div 
      className="d-none d-md-block"
           >
      <KanbasNavigation />
      </div>
      
       <div style={{ flexGrow: 1 }}>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

       </div>
     </div>
 );}
 export default Kanbas;