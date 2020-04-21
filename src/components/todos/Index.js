// src/components/todos/Index.js
import React, { useState } from 'react';
import { useParams, Route, Link } from 'react-router-dom';

//Styles

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const Index = ({todos, markAsDone, deleteTask}) => {

    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }

    const handleDelete = (event, index) =>{
        deleteTask(index);
    }

    const useStyles = makeStyles({
      table: {
        maxWidth: 650,
        margin: 'auto',

      },
    });
    const classes = useStyles();

    return (
    <div>
  

      <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Eliminar</TableCell>
            <TableCell>Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo['id']} style={{backgroundColor: todo['status'] == 'pending' ? '#8FF3A0' : '#E2DEDE'}}>
              <TableCell component="th" scope="row">
              #{todo['id']}
              </TableCell>
              <TableCell>{todo['description']}</TableCell>
              <TableCell> {todo['status'] == 'pending' && (
                          <Button variant="contained" color="primary" onClick={(event) => handleMarkAsDone(event, todo['id'])}>Done</Button>
                          )}</TableCell>
              <TableCell><Button variant="contained" color="secondary" onClick={(event) => handleDelete(event, todo['id'])}>Eliminar</Button></TableCell>
              <TableCell><Button variant="contained"><Link to={`/todo/${todo['id']}`}>Info</Link></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    </div>
  );
}

export default Index;