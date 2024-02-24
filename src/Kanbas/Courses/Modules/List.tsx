import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <button type="button" className="btn btn-outline-secondary" style={{ width: '125px', margin: '5px'}}>Collapse All</button>
      <button type="button" className="btn btn-outline-secondary" style={{ width: '150px', margin: '5px'}}>View Progress</button>
      <select className="btn btn-secondary" id="select-one" style={{width: '200px', margin: '5px'}}>
        <option selected value="publish-all">Publish All</option>
        <option>Publish All Modules and Items</option>
        <option>Publish Modules Only</option>
        <option>Unpublish All</option>
      </select>
      <button type="button" className="btn btn-danger" style={{ width: '125px', margin: '5px'}}>Module</button>
      <ul className="list-group wd-modules" style={{ width: '100vh' }}>
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;