import React from "react";
import TodoListItem from "./TodoListItem";

/* the randered list */
const todoList = [

   /* {
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
    {
      id: nanoid(),
      title: props,
    },*/
  ];




//const todoList = [];

  /*the function/component*/
function TodoList(props) {
    return(
    <div>
        {/*  render the list */}
        <ul>
          {props.todoList.map((item)=>{
            console.log(item.fields.Title)
            console.log(item.id)
            return <TodoListItem key={item.id} todo={item.fields.Title} id={item.id} onRemoveTodo={props.onRemoveTodo}/>//<li key={item.id}> {item.title}</li>
            //<TodoListItem key={item.id} props={todoList}/>
          })}
        </ul>
    </div>
    );
}

export default TodoList;