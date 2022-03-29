//import logo from './logo.svg';
import './App.css';
function getTitle(title){
  return title;
}
function List(){
  return (
<ul>
          {todoList.map((item)=>{
            return <li key={item.id}> {item.title}</li>
          })}
        </ul>
  );
}
const todoList = [
  {
    id: 1,
    title: 'Complete assignment',
  },
  {
    id: 2,
    title: 'Do dishes',
  },
  {
    id: 3,
    title: 'Cook for the week',
  },
  {
    id: 4,
    title: 'Clean the house',
  },
];
function App() {
  return (


    <div>
        <h1> ToDo List </h1>
        <hr />
        {/*  render the list */}
        <List />
    </div>
  );
}

export default App;
