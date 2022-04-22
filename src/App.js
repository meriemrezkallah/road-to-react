//import logo from './logo.svg'
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';

function App() {
const [todoList, setTodoList] = React.useState([]);
//const [newTodo, setNewTodo] = React.useState('..........');
const addTodo = (newTodo) => {
  setTodoList([...todoList,newTodo]);
}
  return (
   
    <div>
        <h1> ToDo List </h1>
        <hr />
        {/*  render the list */}
       <TodoList todoList={todoList}/>
       <hr />
       <AddTodoForm onAddTodo={addTodo}/>
       <hr />
       {/*<p> {newTodo}</p>*/}
    </div>
  );
}

export default App;
