import { useContext } from 'react';
import TodoCtx from '../../store/context-Todo';
import TodoItems from '../todoItems/TodoItems';
function ListItems() {
  const todoCtx = useContext(TodoCtx);
  console.log(todoCtx);
  return (
    <>
      <h1>List Item:</h1>
      <ul>
        <TodoItems />
      </ul>
      ;
    </>
  );
}

export default ListItems;
