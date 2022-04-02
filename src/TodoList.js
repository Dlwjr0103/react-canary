import React from "react"; 

const todoList = [
    {
    id: 1, 
    title: "Work on CTD",
  }, 
    { 
      id: 2, 
      title: "Take puppy out", 
    },
    {
      id: 3, 
      title: "Cook dinner",
  
    }, 
  ]; 

  let TodoList = () =>{
    return(
     <ul>
        {todoList.map((todo) => (
           <li key={todo.id}>{todo.title}</li>
        ))}
        
    </ul>
    );};

    export default TodoList;