//import logo from './logo.svg'
import React from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
   
    <div>
        <h1> ToDo List </h1>
        <hr />
        {/*  render the list */}
       <TodoList />
    </div>
  );
}

export default App;
