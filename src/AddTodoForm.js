import React, {useState} from "react";

let AddTodoForm =({ onAddTodo}) =>{
    const [todoTitle, setTodoTitle] = useState("")

    let handleTitleChange = (e) => {
        let newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    };

    let handleAddTodo = (e) =>{
        e.preventDefault()
        onAddTodo({
            title: todoTitle,
            id: Date.now(),
        }); 
    };
    
    return (
        <form onSubmit = {handleAddTodo}> 
            <label htmlFor = "todoTitle">Title</label>
            <input type = "text" id = "todoTitle" name = "title" value = {todoTitle} onChange = {handleTitleChange}/>
            <button type = "submit">Add</button>
        </form>
    ); 
}
  
export default AddTodoForm;
