import React from "react";

let AddTodoForm = (props) => {
<<<<<<< HEAD
    const [todoTitle, setTodoTitle] = React.useState("")
    const handleAddTodo = (event) => {
       event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle)
        props.onAddTodo(event.target.title.value);
        //document.getElementById("my-form").reset();
        event.target.reset();
    
       
=======
   const [todoTitle, setTodoTitle] = React.useState("");
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        console.log(newTodoTitle);
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => {
       event.preventDefault();
        //const todoTitle = event.target.title.value;
        //console.log(todoTitle)
        props.onAddTodo({
            title:todoTitle,
            id: Date.now(),
        });
        //document.getElementById("my-form").reset();
        //event.target.reset();   
        //for empty string
        setTodoTitle("");
        //todoTitle = ' ';    
>>>>>>> assignment
    }
return (
<form id="my-form" onSubmit={handleAddTodo}>
    <label htmlFor="todoTitle" > Title : </label>
<<<<<<< HEAD
    <input id="todoTitle" value={props.todoTitle} name="title" type="text"/>
=======
    <input id="todoTitle" value={todoTitle} name="title" type="text" label="Add new task" onChange={handleTitleChange}/>
>>>>>>> assignment
    <button type="submit">  Add </button>
</form>
);
}




export default AddTodoForm;
