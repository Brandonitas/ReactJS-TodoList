// src/components/todos/Index.js
import React, { useState } from 'react';
import { useParams, Route, Link } from 'react-router-dom';


const Index = ({todos, markAsDone, deleteTask}) => {

    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }

    const handleDelete = (event, index) =>{
        deleteTask(index);
    }

    return (
    <div>
        <table border="1">
          <thead>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
            <th>Eliminar</th>
            <th>Ver info</th>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo['id']} style={{backgroundColor: todo['status'] == 'pending' ? 'green' : 'grey'}}>
                  <td>#{todo['id']}</td>
                  <td>{todo['description']}</td>
                  <td>
                    {todo['status'] == 'pending' && (
                      <input type="button" value="terminado?" onClick={(event) => handleMarkAsDone(event, todo['id'])}/>
                    )}
                  </td>
                  <td>
                  <input type="button" value="Eliminar" onClick={(event) => handleDelete(event, todo['id'])}/>
                  </td>
                  <td>
                    <Link to={`/todo/${todo['id']}`}>Info</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        
    </div>
  );
}

export default Index;