import React from 'react';
import AddTodoForm from "./AddTodoForm.js"
import TodoList from "./TodoList";


function App() {
 // let [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  let addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo = {addTodo} />
      <TodoList todoList={todoList}/>
      
    </div>
  );
};

export default App;
