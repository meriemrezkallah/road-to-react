import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';


const useSemiPersistentState = () => {
   /*const [todoList, setTodoList] = React.useState(() => {
    const saved=localStorage.getItem('savedTodoList');
    const initialValue = JSON.parse(saved);
    return initialValue || [];*/
    const [todoList, setTodoList] = React.useState(() => {
      return JSON.parse(localStorage.getItem('savedTodoList')) || [];
  });
   
/* React.useEffect(() => { 
    const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));
    if (savedTodoList){  setTodoList(savedTodoList);
    } }, []);
    const [todoList, setTodoList] = React.useState([]);  */
  
  //new react hook is Effect !! to save the state
  React.useEffect(() => {
    localStorage.setItem('savedTodoList' , JSON.stringify(todoList));},
    [todoList]);

    return [todoList,setTodoList];

  }


function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
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
