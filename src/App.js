import React, { useState } from 'react';
import './App.css';
import AddItem from './component/addItem/AddItems';
import TodoItems from './component/todoItems/TodoItems';
import classes from './component/todoItems/TodoItems.module.css';
function App() {
  const [items, setItems] = useState({
    item: [
      { id: 1, name: 'mahmoud', age: 31 },
      { id: 2, name: 'ahmed', age: 39 },
      { id: 3, name: 'khalid', age: 21 },
    ],
  });
  console.log(items);
  function deleteHandler(id) {
    const filtered = items.item.filter(item => item.id !== id);
    return setItems(filtered);
  }
  return (
    <>
      <h1>Todo List App</h1>
      {items.item.map(todo => {
        return (
          <TodoItems
            key={todo.id}
            id={todo.id}
            name={todo.name}
            age={todo.age}
            deleteHandler={deleteHandler}
          />
        );
      })}
      <AddItem />
      <></>
    </>
  );
}

export default App;
