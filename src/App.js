import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faCircleCheck,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import AddItem from './component/addItem/AddItems';
import TodoItems from './component/todoItems/TodoItems';
import classes from './component/todoItems/TodoItems.module.css';

function App() {
  // task TodoList state
  const [toDo, setToDo] = useState([
    { id: 1, title: 'Task 1', status: false },
    { id: 2, title: 'Task 2', status: false },
  ]);
  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // add Task (DONE ✔)
  //////////////////////////////
  function addTask(todo) {
    if (newTask) {
      const id = todo.length + 1;
      const newEntry = { id: id, title: newTask, status: false };
      setToDo([...todo, newEntry]);
      setNewTask('');
    }
  }
  //////////////////////////////
  // delete Task
  function removeTask(id) {
    setToDo(toDo.filter(prevToDo => id !== prevToDo.id));
    //
  }
  //////////////////////////////
  // Mark task as done or Completed
  function markTask(id) {
    setToDo(
      toDo.map(item => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  }
  //////////////////////////////
  // Cancel update
  function cancelUpdate(e) {
    //
  }
  //////////////////////////////
  // change task for update
  function changeTask(e) {
    //
  }
  // update task
  //////////////////////////////
  function updateTask(e) {
    //
  }

  return (
    <div className="App container">
      <br></br>
      <h1>Todo List App</h1>
      <br></br>
      {/* Update task  */}
      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20">Update</button>
          <button className="btn btn-lg btn-warning">Cancel</button>
        </div>
      </div>
      <br />

      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            onChange={e => setNewTask(e.target.value)}
            value={newTask}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg btn-success"
            onClick={() => addTask(toDo)}
          >
            Add Task
          </button>
        </div>
      </div>
      <br />
      {/* {Display TODOS} */}
      {toDo && toDo.length ? '' : 'No todo to show...'}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, i) => {
            return (
              <React.Fragment key={task.id}>
                <div className="taskBg col">
                  <div className={task.status ? 'done' : ''}>
                    <span className="taskNumber">{i + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      title="Completed / Not Completed"
                      onClick={() => markTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title="Delete" onClick={() => removeTask(task.id)}>
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
