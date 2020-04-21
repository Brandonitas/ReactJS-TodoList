// app.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Create from './Create';
import Index from './Index';

function App() {

  const [todos, setTodos] = useState([]);


  useEffect(() => {
      const fetchData = async() =>{
      // You can await here
      const response = await axios.get('http://localhost:3000/api/tasks')
      .then(data =>{
        console.log(data.data);
        setTodos(data.data)
      });
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  const addTodo = (description, callback) => {
    let body = {description: description};
    axios.post('http://localhost:3000/api/tasks',body)
      .then(data =>{
        console.log(data);
        getTasks();
      });

  }

  const markAsDone = (task) => {
    axios.put('http://localhost:3000/api/update/'+task)
    .then(data =>{
      console.log(data);
      getTasks();
    })
  }

  const deleteTask = (task) =>{
    axios.delete('http://localhost:3000/api/delete/'+task)
      .then(data =>{
        console.log(data);
        getTasks();
      })
  }

  const getTasks = () =>{
    axios.get('http://localhost:3000/api/tasks')
      .then(data =>{
        setTodos(data.data)
      });
  }

  return (
    <div className="App">
      <Create addTodo={addTodo}/>
      <Index todos={todos} markAsDone={markAsDone} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;