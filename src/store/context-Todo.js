import { createContext } from 'react';

const TodoCtx = createContext({
  item: [],
});

export function TodoContextProvider(props) {
  const todos = {
    item: [
      { id: 1, name: 'mahmoud', age: 31 },
      { id: 1, name: 'rovy', age: 6 },
      { id: 1, name: 'joo', age: 4 },
    ],
  };
  return <TodoCtx.Provider value={todos}>{props.children}</TodoCtx.Provider>;
}

export default TodoCtx;
