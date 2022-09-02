import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faCircleCheck,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  /////////////////////////////////////////
  //
  const [enteredTasks, setEnteredTasks] = useState([]);
  /////////////////////////////////////////
  const [newTask, setNewTask] = useState([]);
  /////////////////////////////////////////
  const [updateTask, setUpdateTask] = useState([]);
  /////////////////////////////////////////
  const completeToggleHandler = id => {
    //
  };
  /////////////////////////////////////////
  //
  const editHandler = id => {
    //
  };
  /////////////////////////////////////////
  //
  const deleteHandler = id => {
    //
  };
  /////////////////////////////////////////
  //
  const addNewTaskHandler = id => {
    //
  };
  /////////////////////////////////////////
  //
  const updateBtnHandler = id => {
    //
  };
  /////////////////////////////////////////
  //
  const cancelBtnHandler = id => {
    //
  };

  const tasks = enteredTasks.map((task, i) => (
    <React.Fragment key={task.id}>
      <div className="taskBg col">
        <div className={task.done ? 'done' : ''}>
          <span className="taskNumber">{i + 1}</span>
          <span className="taskText">{task.title}</span>
        </div>
        <div className="iconsWrap">
          <span title="Completed / Not Completed">
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          <span title="Edit">
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span title="Delete">
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </React.Fragment>
  ));
  return (
    <div className="App container">
      <br></br>
      <h1>Todo List App</h1>
      <br></br>
      {/* Update task  */}
      {/* // update field */}

      <>
        <div className="row">
          <div className="col">
            <input className="form-control form-control-lg" />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success">Update</button>
            <button className="btn btn-lg btn-warning">Cancel</button>
          </div>
        </div>
        <br />
      </>

      <>
        <div className="row">
          <div className="col">
            <input className="form-control form-control-lg" />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success">Add Task</button>
          </div>
        </div>
        <br />
      </>
      <>{tasks}</>
    </div>
  );
}

export default App;
