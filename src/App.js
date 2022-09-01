import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faCircleCheck,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import React, { useState } from 'react';

function App() {
  /////////////////////////////////////////
  //
  const [enteredTasks, setEnteredTasks] = useState([
    { id: 1, task: 'Task 1', done: false },
  ]);
  const [updateTask, setUpdateTask] = useState('');
  const [toggleTask, setToggleTask] = useState('');
  /////////////////////////////////////////
  //
  // const onChangeHandler = e => setToggleTask(e.target.value);
  /////////////////////////////////////////
  //
  const completeToggleHandler = id => {
    setEnteredTasks([
      ...enteredTasks.map(task => {
        if (id === task.id) {
          return { id: id, task: task.task, done: !task.done };
        }
        return task;
      }),
    ]);
  };
  /////////////////////////////////////////
  //
  const editBtnHandler = () => {
    //
  };
  /////////////////////////////////////////
  //
  const deleteBtnHandler = id => {
    setEnteredTasks([...enteredTasks.filter(task => task.id !== id)]);
  };
  /////////////////////////////////////////
  //
  const addTaskHandler = e => {
    const newEntry = {
      id: enteredTasks.length + 1,
      task: toggleTask,
      done: false,
    };
    setEnteredTasks([...enteredTasks, newEntry]);
    setToggleTask('');
  };
  /////////////////////////////////////////
  //
  const UpdateTaskHandler = () => {
    //
  };
  /////////////////////////////////////////
  //
  const cancelBtnHandler = () => {
    //
  };

  const tasks = enteredTasks.map((task, i) => (
    <React.Fragment key={task.id}>
      <div className="taskBg col">
        <div className={task.done ? 'done' : ''}>
          <span className="taskNumber">{i + 1}</span>
          <span className="taskText">{task.task}</span>
        </div>
        <div className="iconsWrap">
          <span
            title="Completed / Not Completed"
            onClick={() => completeToggleHandler(task.id)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          <span title="Edit">
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span title="Delete" onClick={() => deleteBtnHandler(task.id)}>
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
            <input
              className="form-control form-control-lg"
              value={toggleTask}
              onChange={e => setToggleTask(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success" onClick={addTaskHandler}>
              Add Task
            </button>
          </div>
        </div>
        <br />
      </>
      <>{tasks}</>
    </div>
  );
}

export default App;
