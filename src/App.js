import './App.css';
import AddItem from './component/addItem/AddItems';
import TodoItems from './component/todoItems/TodoItems';

function App() {
  let state = {
    state: [
      { id: 1, name: 'hamza', age: 22 },
      { id: 1, name: 'mohamed', age: 23 },
      { id: 1, name: 'abdo', age: 24 },
    ],
  };

  return (
    <>
      <h1>TodoList App</h1>
      <TodoItems />
      <AddItem />
    </>
  );
}

export default App;
