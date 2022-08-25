import { useContext } from 'react';
import TodoCtx from '../../store/context-Todo';
import AddItem from '../addItem/AddItems';
import TodoItems from '../todoItems/TodoItems';
function ListItems() {
  const todoCtx = useContext(TodoCtx);
  console.log(todoCtx);
  return (
    <>
      <h1>List Item:</h1>
      <ul>
        {todoCtx.item.map(todo => (
          <TodoItems
            key={todo.id}
            id={todo.id}
            name={todo.name}
            age={todo.age}
          />
        ))}
      </ul>
      <AddItem />
    </>
  );
}

export default ListItems;
