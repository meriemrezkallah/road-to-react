import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';




function App() {

 
//const [todoList, setTodoList] = React.useState([]); const [todoList, setTodoList] = useSemiPersistentState();const [newTodo, setNewTodo] = React.useState('..........');

const [todoList, setTodoList] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);

const addTodo = (newTodo) => {
  setTodoList([...todoList,newTodo]);
}



 //new useeffect react hook
 React.useEffect(() => {
  setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {setIsLoading(false)}, 2000);
      resolve();
  }).then(() => {
  
    setTodoList(JSON.parse(localStorage.getItem('savedTodoList')))
})
.catch(() => {
    console.error('Do that');
})

},
 []);

 //new react hook is Effect !! to save the state
 React.useEffect(() => {
   console.log('useeffect2 out of promise')
  if (isLoading === false){ 
  localStorage.setItem('savedTodoList' , JSON.stringify(todoList));
}
},
  [todoList]);

 

        // remove function
        const removeTodo = (id) => {
          const removedTodo = todoList.filter(
          todo => id !== todo.id
        );

          setTodoList(removedTodo);

        };
  return (
   
    <div>
        <h1> ToDo List </h1>
        <hr />
        {/*  render the list */}

        { isLoading ? (<p>  Loading ....</p>):(
           <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
           )}
        
      
       <hr />
       <AddTodoForm onAddTodo={addTodo}/>
       <hr />
       {/*<p> {newTodo}</p>*/}
    </div>
  );
}

export default App;
