import React from 'react';
import classes from './TodoItems.module.css';
function TodoItems(props) {
  return (
    <li className={classes.todo}>
      <div className={classes.content}>
        <p className={classes.space}>Name: {props.name}</p>
        <p className={classes.space}>age: {props.age} years</p>
      </div>
      <div className={classes.icon}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </li>
  );
}

export default TodoItems;
