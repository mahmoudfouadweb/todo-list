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
  const [toDo, SetToDo] = useState([
    { id: 1, title: 'Task 1', status: false },
    { id: 3, title: 'Task 3', status: false },
    { id: 2, title: 'Task 2', status: false },
  ]);
  // Temp State
  const [newTask, setNewTAsk] = useState('');
  const [updateData, setUpdateData] = useState('');

  // add Task
  //////////////////////////////
  function addTask() {
    //
  }
  //////////////////////////////
  // delete Task
  function removeTask(id) {
    //
  }
  //////////////////////////////
  // Mark task as done or Completed
  function markTask(id) {
    //
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
      <div className="row"></div>

      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success">Add Task</button>
        </div>
      </div>
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
                  <div className="iconWrap">
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
