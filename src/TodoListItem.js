import React from "react";

function TodoListItem (props) {
 
return ( 
    <> 
    
<li> {props.todo} <button type="button" onClick={() => props.onRemoveTodo(props.id)}> Remove </button></li>
  </>
);
}


export default TodoListItem;
