import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';




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
  
    //setTodoList(JSON.parse(localStorage.getItem('savedTodoList')))
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
{ method: 'get',
  headers: { 'Authorization' :` Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`},
  mode: 'cors',
  cache: 'default',
 })
.then(response => { 
  //if (response.ok){
  return response.json()
//}throw response;
})
.then(result =>
  {
   // let response= await response.json();
    //console.log("O=iam herrrre")
    //the old way 
   // setStories(result.data.stories);
    // the new way

 // console.log(result)
    setTodoList(result.records);
   
  

    // setIsLoading(false);
  })
.catch((error) => {
    console.error('Error here');
}).finally(() => {setIsLoading(false);})
})


},
 []);

//  //new react hook is Effect !! to save the state
//  React.useEffect(() => {
//   if (isLoading === false){ 
//   localStorage.setItem('savedTodoList' , JSON.stringify(todoList));
// }
// },
//   [todoList]);

 

        // remove function
        const removeTodo = (id) => {
          const removedTodo = todoList.filter(
          todo => id !== todo.id
        );

          setTodoList(removedTodo);

        };
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact component={App}> </Route>
      <Route path="/new" exact element={<New />}>  </Route>
    </Routes>
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
   
    </BrowserRouter>
  );
}

let New=()=>{
  return <h1> New Todo List ....</h1>
}
export default App;
