import React from 'react';
import AddTodoForm from "./AddTodoForm.js"
import TodoList from "./TodoList";


function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm/>
      <TodoList/>
      
    </div>
  );
};

export default App;
