import React from "react";

let AddTodoForm = (props) => {
    const [todoTitle, setTodoTitle] = React.useState("")
    const handleAddTodo = (event) => {
       event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle)
        props.onAddTodo(event.target.title.value);
        //document.getElementById("my-form").reset();
        event.target.reset();
    
       
    }
return (
<form id="my-form" onSubmit={handleAddTodo}>
    <label htmlFor="todoTitle" > Title : </label>
    <input id="todoTitle" value={props.todoTitle} name="title" type="text"/>
    <button type="submit">  Add </button>
</form>
);
}




export default AddTodoForm;
