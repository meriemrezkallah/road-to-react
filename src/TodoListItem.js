import React from "react";

function TodoListItem (props) {
    console.log("herereee 1");
    console.log(props.id);
    console.log("herereee 2");
return ( 
    <> 
    
<li> {props.todo} <button type="button" onClick={() => props.onRemoveTodo(props.id)}> Remove </button></li>
  </>
);
}


export default TodoListItem;
