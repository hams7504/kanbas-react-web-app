import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JavaScript
import KanbasNavigation from "../Navigation";
import Grades from "./Grades";
import Editor from "./Assignments/Editor";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();

  const getBreadcrumbs = (pathname: string) => {
    const pathnames = pathname.split("/").filter((x) => x);
    return pathnames.map((pathname, index) => ({
      path: `#/${pathnames.slice(0, index + 1).join("/")}`,
      label: pathname === courseId ? `${course?.name}` : pathname,
    }));
  };
  
  const breadcrumbs = getBreadcrumbs(location.pathname).slice(2);

  return (
    <div>
      <div className="d-none d-md-block">
      <h4>
        <HiMiniBars3 style={{width: '25px', margin: '20px'}} />
        <span>
    {breadcrumbs.map((breadcrumb, index) => (
      <span style={{color: 'red', textDecoration: 'none'}} key={breadcrumb.path}>
        {index > 0 && " > "}
        <a style={{color: 'red', textDecoration: 'none'}} href={breadcrumb.path}>{breadcrumb.label}</a>
      </span>
    ))}
  </span>
      </h4>
      <hr />
      </div>
      <div className="wd-small-navbar d-md-none d-flex justify-content-between">
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <i className="fa-solid fa-bars"></i>
          </button>
          <p className="justify-content-center">CS1234 Web Dev</p>
          <button type="button" className="float-end btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Kanbas Navigation</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{width: '100%'}}>
                <KanbasNavigation />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Course Navigation</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <CourseNavigation />
              </div>
            </div>
          </div>
        </div>
      <div style={{display: 'flex'}}>
      <div className="d-none d-md-block">
      <CourseNavigation />
      </div>
      <div>
        <div
          // className="overflow-y-scroll position-fixed bottom-0"
          // style={{ top: "75px" }} 
          >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom" element={<h1>Zoom</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<Editor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;