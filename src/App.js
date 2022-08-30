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
  const [todo, setTodo] = useState([
    { id: 1, title: 'Task 1', done: false },
    { id: 2, title: 'Task 2', done: false },
    { id: 3, title: 'Task 3', done: false },
  ]);
  const [] = useState('');
  const [] = useState('');
  /////////////////////////////////////////
  //
  const addTaskHandler = () => {
    //
  };
  /////////////////////////////////////////
  //
  const updateTaskHandler = () => {
    //
  };
  /////////////////////////////////////////
  //
  const cancelUpdateHandler = () => {
    //
  };
  /////////////////////////////////////////
  //
  const completeTaskHandler = () => {
    //
  };
  /////////////////////////////////////////
  //
  const editTaskHandler = () => {
    //
  };
  /////////////////////////////////////////
  //
  const deleteTaskHandler = () => {
    //
  };

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
            <button>Update</button>
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

      {/* // new Entry Field */}

      {/* Add Task */}
      {/* {Display TODOS} */}
      {/* {toDo && toDo.length ? '' : 'No todo to show...'} */}

      {todo.map((task, i) => {
        return (
          <React.Fragment key={task.id}>
            <div className="taskBg col">
              <div className={task.status ? 'done' : ''}>
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
        );
      })}
    </div>
  );
}

export default App;
