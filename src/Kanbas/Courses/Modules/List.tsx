import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

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
      <li className="list-group-item">
        <button 
        className="btn" style={{backgroundColor: 'green', color: 'white',border: '1px solid black', borderRadius: '5px', margin: '5px', marginLeft: '10px', padding: '5px'}}
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button 
        className="btn" style={{backgroundColor: 'blue', color: 'white',border: '1px solid black', borderRadius: '5px', margin: '5px', padding: '5px'}}
        onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        <input 
        className="form-control" style={{ width: '90%', border: '1px solid black', borderRadius: '5px', margin: '5px', padding: '5px'}}
        value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea 
        className="form-control" style={{ width: '90%', border: '1px solid black', borderRadius: '5px', margin: '5px', padding: '5px'}}
        value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
            <button
             className="btn" style={{backgroundColor: 'blue', color: 'white',border: '1px solid black', borderRadius: '5px', margin: '5px', padding: '5px'}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              className="btn" style={{backgroundColor: 'red', color: 'white',border: '1px solid black', borderRadius: '5px', margin: '5px', padding: '5px'}}
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
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
                {module.lessons?.map((lesson: any) => (
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