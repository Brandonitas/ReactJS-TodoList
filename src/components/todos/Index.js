// src/components/todos/Index.js
import React, { useState } from 'react';

const Index = ({todos, markAsDone}) => {

    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }
    return (
    <table border="1">
      <thead>
        <th>#</th>
        <th>Task</th>
        <th></th>
      </thead>
      <tbody>
        {todos.map((todo, i) => {
          return (
            <tr key={i} style={{backgroundColor: todo['status'] == 'pending' ? 'green' : 'grey'}}>
              <td>#{i}</td>
              <td>{todo['description']}</td>
              <td>
                {todo['status'] == 'pending' && (
                  <input type="button" value="terminado?" onClick={(event) => handleMarkAsDone(event, i)}/>
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Index;