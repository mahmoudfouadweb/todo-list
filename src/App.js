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
  // DONE
  const [enteredTasks, setEnteredTasks] = useState([
    { id: 1, todo: 'Study English', done: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  /////////////////////////////////////////

  /////////////////////////////////////////
  // DONE
  const addTaskHandler = () => {
    const newEntry = {
      id: enteredTasks.length + 1,
      todo: newTask,
      done: false,
    };
    setEnteredTasks([...enteredTasks, newEntry]);
    setNewTask('');
  };
  /////////////////////////////////////////
  // DONE
  const completeTaskSingeHandler = id => {
    //
  };
  /////////////////////////////////////////
  // DONE
  const editTaskHandler = id => {
    //
  };
  /////////////////////////////////////////
  // DONE
  const deleteTaskHandler = id => {
    //
  };
  /////////////////////////////////////////
  // DONE
  const updateTaskHandler = id => {
    //
  };
  /////////////////////////////////////////
  // DONE
  const cancelUpdateHandler = id => {
    //
  };

  const updateElement = (
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
  );

  /////////////////////////////////////////
  const newTaskElement = (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
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
  );

  const tasks = enteredTasks.map((task, i) => (
    <React.Fragment key={task.id}>
      <div className="taskBg col">
        <div className={task.done ? 'done' : ''}>
          <span className="taskNumber">{i + 1}</span>
          <span className="taskText">{task.todo}</span>
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

  /////////////////////////////////////////
  //
  return (
    <div className="App container">
      <br></br>
      <h1>Todo List App</h1>
      <br></br>
      {newTaskElement}
      {tasks}
    </div>
  );
}

export default App;
