import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoCtx, { TodoContextProvider } from './store/context-Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
