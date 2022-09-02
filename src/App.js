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
  const [enteredTasks, setEnteredTasks] = useState([
    { id: 1, task: 'Task 1', done: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [update, setUpdate] = useState('');

  const addNewTaskHandler = () => {
    if (newTask) {
      const newEntry = {
        id: enteredTasks.length + 1,
        task: newTask,
        done: false,
      };
      setNewTask('');
      setEnteredTasks([...enteredTasks, newEntry]);
    }
  };

  const updateTaskHandler = e => {
    const entry = {
      id: update.id,
      task: e.target.value,
      done: update.done ? true : false,
    };
    setUpdate(entry);
  };

  const cancelBtnHandler = () => {
    setUpdate('');
  };

  const completeToggleHandler = id => {
    const filtered = enteredTasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setEnteredTasks(filtered);
  };

  const updateBtnHandler = () => {
    const newEnrty = [...enteredTasks.filter(task => task.id !== update.id)];
    setEnteredTasks([...newEnrty, update]);
  };

  const deleteTaskHandler = id => {
    setEnteredTasks([...enteredTasks.filter(task => task.id !== id)]);
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
          <span
            title="Edit"
            onClick={() =>
              setUpdate({
                id: task.id,
                task: task.task,
                done: task.done ? true : false,
              })
            }
          >
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span title="Delete" onClick={() => deleteTaskHandler(task.id)}>
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
      {update ? (
        <>
          <div className="row">
            <div className="col">
              <input
                className="form-control form-control-lg"
                value={update && update.task}
                onChange={e => updateTaskHandler(e)}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-lg btn-success"
                onClick={updateBtnHandler}
              >
                Update
              </button>
              <button
                className="btn btn-lg btn-warning"
                onClick={cancelBtnHandler}
              >
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
      ) : (
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
              <button
                className="btn btn-lg btn-success"
                onClick={addNewTaskHandler}
              >
                Add Task
              </button>
            </div>
          </div>
          <br />
        </>
      )}

      <>{tasks}</>
    </div>
  );
}

export default App;
