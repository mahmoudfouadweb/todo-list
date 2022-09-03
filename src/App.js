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
  const [enteredTasks, setEnteredTasks] = useState([]);
  /////////////////////////////////////////
  // DONE
  const [newTask, setNewTask] = useState('');
  /////////////////////////////////////////
  //
  const [updateTask, setUpdateTask] = useState('');
  /////////////////////////////////////////
  // DONE
  const completeToggleHandler = id => {
    const toggleTask = enteredTasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setEnteredTasks(toggleTask);
  };
  /////////////////////////////////////////
  // DONE
  const editHandler = e => {
    const updateEnrty = {
      id: updateTask.id,
      task: e.target.value,
      done: updateTask.done ? true : false,
    };
    setUpdateTask(updateEnrty);
  };
  /////////////////////////////////////////
  // DONE
  const deleteHandler = id => {
    const filtered = enteredTasks.filter(task => task.id !== id);
    setEnteredTasks([...filtered]);
  };
  /////////////////////////////////////////
  // DONE
  const addNewTaskHandler = () => {
    const newEntry = {
      id: enteredTasks.length + 1,
      task: newTask,
      done: false,
    };
    setEnteredTasks([...enteredTasks, newEntry]);
    setNewTask('');
  };
  /////////////////////////////////////////
  // DONE
  const updateBtnHandler = () => {
    const filtred = enteredTasks.filter(task => task.id !== updateTask.id);
    setEnteredTasks([...filtred, updateTask]);
  };
  /////////////////////////////////////////
  // DONE
  const cancelBtnHandler = () => {
    setUpdateTask('');
  };

  /////////////////////////////////////////
  const updateElement = (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={updateTask && updateTask.task}
            onChange={e => editHandler(e)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success" onClick={updateBtnHandler}>
            Update
          </button>
          <button className="btn btn-lg btn-warning" onClick={cancelBtnHandler}>
            Cancel
          </button>
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
  );

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
            onClick={id => completeToggleHandler(task.id)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          <span
            title="Edit"
            onClick={() =>
              setUpdateTask({
                id: task.id,
                task: task.task,
                done: task.done ? true : false,
              })
            }
          >
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span title="Delete" onClick={() => deleteHandler(task.id)}>
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
      {updateTask ? updateElement : newTaskElement}
      {tasks}
    </div>
  );
}

export default App;
