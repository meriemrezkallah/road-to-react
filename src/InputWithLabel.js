import React from 'react'

function InputWithLabel(props) {
      //use ref is the new hook for the imperative react
  const inputRef = React.useRef();

  // focus option

//   React.useEffect(() => {
//       inputRef.current.focus();
//   } , []);
React.useEffect(() => {
    if (inputRef){
      inputRef.current.focus();
    }
  } , [inputRef]);
    return (
     <>   
     <label htmlFor="todoTitle" > {props.children} </label>
    <input id="todoTitle" value={props.todoTitle} name="title" type="text" placeholder='Add new task' onChange={props.handleTitleChange} ref={inputRef}/>
   
    </>);
}

export default InputWithLabel;