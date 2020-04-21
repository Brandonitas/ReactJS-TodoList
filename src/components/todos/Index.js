// src/components/todos/Index.js
import React, { useState } from 'react';

const Index = ({todos, markAsDone, deleteTask}) => {

    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }

    const handleDelete = (event, index) =>{
        deleteTask(index);
    }

    return (
    <table border="1">
      <thead>
        <th>#</th>
        <th>Task</th>
        <th>Status</th>
        <th>Eliminar</th>
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
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Index;