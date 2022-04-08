import React from "react";

let AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
       event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle)
        props.onAddTodo(event.target.title.value);
        document.getElementById("my-form").reset();
       // props(event.target.title.value);
       
    }
return (
<form id="my-form" onSubmit={handleAddTodo}>
    <label htmlFor="todoTitle" > Title : </label>
    <input id="todoTitle" name="title" type="text"/>
    <button type="submit">  Add </button>
</form>
);
}




export default AddTodoForm;