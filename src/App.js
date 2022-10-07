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
    const newUpdateCompletion = enteredTasks.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setEnteredTasks(newUpdateCompletion);
  };
  /////////////////////////////////////////
  // DONE
  const editTaskHandler = e => {
    const newEntry = {
      id: updateTask.id,
      todo: e.target.value,
      done: updateTask.done ? true : false,
    };
    setUpdateTask(newEntry);
  };
  /////////////////////////////////////////
  // DONE
  const deleteTaskHandler = id => {
    const freshTodos = enteredTasks.filter(todo => todo.id !== id);
    setEnteredTasks([...freshTodos]);
  };
  /////////////////////////////////////////
  // DONE
  const updateTaskHandler = () => {
    const filteredTodos = enteredTasks.filter(
      todo => todo.id !== updateTask.id
    );
    setEnteredTasks([...filteredTodos, updateTask]);
    setUpdateTask('');
  };
  /////////////////////////////////////////
  // DONE
  const cancelUpdateHandler = id => {
    setUpdateTask('');
  };

  const updateElement = (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={updateTask && updateTask.todo}
            onChange={e => editTaskHandler(e)}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg btn-success"
            onClick={updateTaskHandler}
          >
            Update
          </button>
          <button
            className="btn btn-lg btn-warning"
            onClick={cancelUpdateHandler}
          >
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
          <span
            title="Completed / Not Completed"
            onClick={() => completeTaskSingeHandler(task.id)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          <span
            title="Edit"
            onClick={() =>
              setUpdateTask({
                id: task.id,
                todo: task.todo,
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

  /////////////////////////////////////////
  //
  return (
    <div className="App container">
      <br></br>
      <h1>Todo List App</h1>
      <br></br>
      {updateElement}
      {newTaskElement}
      {tasks}
    </div>
  );
}

export default App;
