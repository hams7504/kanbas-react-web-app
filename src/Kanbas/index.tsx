import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Account from "./Account";
import {courses} from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [coursesList, setCourses] = useState<any[]>(courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...coursesList, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(coursesList.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      coursesList.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

   return (
    <Provider store={store}>
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
          <Route path="Dashboard" element={<Dashboard
              courses={coursesList}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          }/>
          <Route path="Courses/:courseId/*" element={<Courses courses={coursesList} />} />
        </Routes>

       </div>
     </div>
     </Provider>
 );}
 export default Kanbas;