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



  /*the function/component*/
function TodoList(props) {
    return(
    <div>
        {/*  render the list */}
        <ul>
          {props.todoList.map((item)=>{
            console.log(item.title)
            console.log(item.id)
            return <TodoListItem key={item.id} todo={item.title}/>//<li key={item.id}> {item.title}</li>
            //<TodoListItem key={item.id} props={todoList}/>
          })}
        </ul>
    </div>
    );
}

export default TodoList;