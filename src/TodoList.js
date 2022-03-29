import React from "react";


/* the randered list */
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



  /*the function/component*/
function TodoList() {
    return(
    <div>
        {/*  render the list */}
        <ul>
          {todoList.map((item)=>{
            return <li key={item.id}> {item.title}</li>
          })}
        </ul>
    </div>
    );
}

export default TodoList;