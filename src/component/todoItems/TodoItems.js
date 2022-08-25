import React, { useContext } from 'react';
import TodoCtx from '../../store/context-Todo';
import classes from './TodoItems.module.css';
function TodoItems(props) {
  const todosCtx = useContext(TodoCtx);
  function deleteHandler(e) {
    todosCtx.removeTodo(props.id);
  }
  return (
    <li className={classes.todo}>
      <div className={classes.content}>
        <p className={classes.space}>Name: {props.name}</p>
        <p className={classes.space}>age: {props.age} years</p>
      </div>
      <div className={classes.icon} onClick={deleteHandler}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </li>
  );
}

export default TodoItems;
