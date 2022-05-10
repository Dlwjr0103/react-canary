import React from "react"; 
import TodoListItem from "./TodoListItem"

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
        {todoList.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
           
        })}
        
    </ul>
    );};

    export default TodoList;