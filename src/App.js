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
  // task TodoList state
  const [todo, setTodo] = useState([
    { id: 1, title: 'Task 1', status: false },
    { id: 2, title: 'Task 2', status: false },
    { id: 3, title: 'Task 3', status: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  ///////////////////////////////////////
  // add new task
  function getNewTask() {
    if (newTask) {
      setTodo([
        ...todo,
        {
          id: todo.length + 1,
          title: newTask,
          status: false,
        },
      ]);
      setNewTask('');
    }
  }
  ///////////////////////////////////////
  // done undone
  function taskDoneToggle(id) {
    const tasks = todo.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setTodo(tasks);
    console.log(todo);
  }
  ///////////////////////////////////////
  //delete task
  function deleteItem(id) {
    setTodo(todo.filter(item => item.id !== id));
  }
  ///////////////////////////////////////
  //cancel BTN
  function cancelUpdate() {
    setUpdateTask('');
  }
  function updateTaskBtn() {
    const filtered = [...todo.filter(item => item.id !== updateTask.id)];
    setTodo([
      ...filtered,
      {
        id: updateTask.id,
        title: updateTask.title,
        status: updateTask.status ? true : false,
      },
    ]);
    setUpdateTask('');
  }
  function editTitleOnChange(newTitle) {
    let newEntry = {
      id: updateTask.id,
      title: newTitle,
      status: updateTask.status ? true : false,
    };
    setUpdateTask(newEntry);
  }

  return (
    <div className="App container">
      <br></br>
      <h1>Todo List App</h1>
      <br></br>
      {/* Update task  */}
      {/* // update field */}
      {updateTask.title ? (
        <>
          <div className="row">
            <div className="col">
              <input
                className="form-control form-control-lg"
                value={updateTask && updateTask.title}
                onChange={e => editTitleOnChange(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-lg btn-success mr-20"
                onClick={updateTaskBtn}
              >
                Update
              </button>
              <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
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
                onChange={e => setNewTask(e.currentTarget.value)}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" onClick={getNewTask}>
                Add Task
              </button>
            </div>
          </div>
          <br />
        </>
      )}
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
                <span
                  title="Completed / Not Completed"
                  onClick={() => taskDoneToggle(task.id)}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span
                  title="Edit"
                  onClick={() =>
                    setUpdateTask({
                      id: task.id,
                      title: task.title,
                      status: task.status ? true : false,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span title="Delete" onClick={() => deleteItem(task.id)}>
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
