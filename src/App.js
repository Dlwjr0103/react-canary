import React, { useState, useEffect} from 'react';
import AddTodoForm from "./AddTodoForm.js"
import TodoList from "./TodoList";


function useSemiPersistentState(){

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || [])

  useEffect(() => {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]
  );

  return [todoList, setTodoList];
};

function App () {
  const [todoList,setTodoList] = useSemiPersistentState();

  

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
