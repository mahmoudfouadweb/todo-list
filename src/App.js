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
  const [toDo, setToDo] = useState([
    { id: 1, title: 'Task 1', status: false },
    { id: 2, title: 'Task 2', status: false },
    { id: 3, title: 'Task 3', status: false },
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
  function cancelUpdate() {
    setUpdateData('');
  }
  //////////////////////////////
  // change task for update
  function changeTask(e) {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  }
  // update task
  //////////////////////////////
  function updateTask() {
    const filteredData = [...toDo].filter(item => item.id !== updateData.id);
    const mergData = [...filteredData, updateData];
    setToDo(mergData);
    setUpdateData('');
    console.log('updateData.id', updateData.id);
    console.log('filteredData', filteredData);
  }

  return (
    <div className="App container">
      <br></br>
      <h1>Todo List App</h1>
      <br></br>

      {/* Update task  */}

      {updateData && updateData.title ? (
        // update field
        <>
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData}
                onChange={e => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-lg btn-success mr-20"
                onClick={updateTask}
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
        // new Entry Field
        <>
          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                className="form-control form-control-lg"
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
        </>
      )}
      {/* Add Task */}

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
                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

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
