import { useContext, useRef, useState } from 'react';
import TodoCtx from '../../store/context-Todo';
import classes from './AddItems.module.css';

function AddItem() {
  const nameRef = useRef();
  const ageRef = useRef();
  const idRef = useRef();

  const todoCtx = useContext(TodoCtx);
  const [todos, setTodos] = useState(todoCtx.item);

  console.log('CTX List Items', todoCtx);

  function submitBtnHandler(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const id = idRef.current.value;
    console.log(id, name, age);
    setTodos({
      id: id,
      name: name,
      age: age,
    });
  }
  return (
    <form className={classes.additem}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="number" placeholder="1" id="id" ref={idRef} />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="example mohammed salah"
          id="name"
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="age" className={classes.space}>
          Age:
        </label>
        <input type="number" placeholder="22" id="age" ref={ageRef} />
      </div>
      <div className={classes.space}>
        <button onClick={submitBtnHandler}>Submit</button>
      </div>
    </form>
  );
}

export default AddItem;
