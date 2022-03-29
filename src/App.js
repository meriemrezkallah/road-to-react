//import logo from './logo.svg'
import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';

function App() {
  return (
   
    <div>
        <h1> ToDo List </h1>
        <hr />
        {/*  render the list */}
       <TodoList />
       <hr />
       <AddTodoForm />
       <hr />
    </div>
  );
}

export default App;
