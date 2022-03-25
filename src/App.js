//import logo from './logo.svg';
import './App.css';
function getTitle(title){
  return title;
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
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div>
        <h1> ToDo List </h1>
        <hr />
        {/*  render the list */}
        <ul>
          {todoList.map(function(item){
            return <li key={item.id}> {item.title}</li>
          })}
        </ul>
    </div>
  );
}

export default App;
