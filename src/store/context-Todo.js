import { createContext } from 'react';

const TodoCtx = createContext({
  item: [{}],
  addTodo: todoID => {},
  removeTodo: todoID => {},
  isTodoImportant: todos => {},
});

export function TodoContextProvider(props) {
  function addTodo() {}
  function removeTodo() {}
  function isTodoImportant() {}

  const todos = {
    item: [
      { id: 1, name: 'mahmoud', age: 31 },
      { id: 2, name: 'rovy', age: 6 },
      { id: 3, name: 'joo', age: 4 },
    ],
    addTodo: addTodo,
    removeTodo: removeTodo,
    isTodoImportant: isTodoImportant,
  };
  console.log(todos);
  return <TodoCtx.Provider value={todos}>{props.children}</TodoCtx.Provider>;
}

export default TodoCtx;
