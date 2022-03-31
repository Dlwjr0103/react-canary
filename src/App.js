import React from 'react';

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
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
        
      </ul>

    </div>
  );
}

export default App;
