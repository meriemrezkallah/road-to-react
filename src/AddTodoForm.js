import React from "react";

let AddTodoForm = (props) => {
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
    }
return (
<form id="my-form" onSubmit={handleAddTodo}>
    <label htmlFor="todoTitle" > Title : </label>
    <input id="todoTitle" value={todoTitle} name="title" type="text" label="Add new task" onChange={handleTitleChange}/>
    <button type="submit">  Add </button>
</form>
);
}




export default AddTodoForm;
