// app.js
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

//Views
import Create from './components/todos/Create';
import Index from './components/todos/Index';
import Todo from './components/todos/Todo';
import TodoList from './components/todos/TodoList';

function App() {
  return(
    <div className="App">
    <BrowserRouter>
      <div>
        
          <Switch>
          <Route path="/" exact component={TodoList}/>
          <Route path="/todo/:id" exact component={Todo}/>

          </Switch>
        
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;