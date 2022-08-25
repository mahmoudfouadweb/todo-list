import { createContext, useState } from 'react';

const TodoCtx = createContext({
  item: [{}],
  addTodo: todoID => {},
  removeTodo: todoID => {},
  isTodoImportant: todos => {},
});

export function TodoContextProvider(props) {
  const [todos, setTodos] = useState({});

  function addTodo(todos) {
    setTodos(prevTodos => {
      return prevTodos.concat(todos);
    });
  }
  function removeTodo(todoID) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoID));
  }
  function isTodoImportant(todoID) {
    todos.some(todo => todo.id === todoID);
  }

  const todosCtx = {
    item: [
      { id: 1, name: 'mahmoud', age: 31 },
      { id: 2, name: 'rovy', age: 6 },
      { id: 3, name: 'joo', age: 4 },
    ],
    addTodo: addTodo,
    removeTodo: removeTodo,
    isTodoImportant: isTodoImportant,
  };
  console.log('Original todosCtx', todosCtx);
  return <TodoCtx.Provider value={todosCtx}>{props.children}</TodoCtx.Provider>;
}

export default TodoCtx;
