//import logo from './logo.svg'
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';

function App() {
<<<<<<< HEAD
const [newTodo, setNewTodo] = React.useState('..........');
const [todoList, setTodoList] = React.useState("first test");
=======
const [todoList, setTodoList] = React.useState([]);
//const [newTodo, setNewTodo] = React.useState('..........');
const addTodo = (newTodo) => {
  setTodoList([...todoList,newTodo]);
}
>>>>>>> assignment
  return (
   
    <div>
        <h1> ToDo List </h1>
        <hr />
        {/*  render the list */}
<<<<<<< HEAD
       <TodoList todoList={setTodoList}/>
=======
       <TodoList todoList={todoList}/>
>>>>>>> assignment
       <hr />
       <AddTodoForm onAddTodo={addTodo}/>
       <hr />
       {/*<p> {newTodo}</p>*/}
    </div>
  );
}

export default App;
