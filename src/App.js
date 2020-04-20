// app.js
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import Create from './components/todos/Create';
import Index from './components/todos/Index';

function App() {

  let todosList;

  const [todos, setTodos] = useState([]);


  useEffect(() => {
      const fetchData = async() =>{
      // You can await here
      const response = await axios.get('http://localhost:3000/api/tasks')
      .then(data =>{
        setTodos(data.data)
        console.log(data.data[0].description)
      });
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  const addTodo = (description, callback) => {
    /*let cTodos = Object.assign([], todos);
    cTodos.push({description: description, status: 'pending'});
    setTodos(cTodos);*/
    let body = {description: description};
    axios.post('http://localhost:3000/api/tasks',body)
      .then(data =>{
        console.log(data);
      });

  }

  const markAsDone = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos[task].status = 'done';
    setTodos(cTodos);
  }

  return (
    <div className="App">
      <Create addTodo={addTodo}/>
      <Index todos={todos} markAsDone={markAsDone}/>
    </div>
  );
}

export default App;