import './App.css';

import ListItem from './component/listItem/ListItem';

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
      <ListItem />
    </>
  );
}

export default App;
