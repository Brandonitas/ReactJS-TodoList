import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Todo = ({}) => {
    let { id } = useParams();
    
    const [singleTodo, setSingleTodos] = useState([]);
    const [createdDate, setCreatedDate] = useState([]);
    const [updateDate, setUpdateDate] = useState([]);

    useEffect(() => {
      const fetchData = async() =>{
      // You can await here
      const response = await axios.get('http://localhost:3000/api/tasks/'+id)
      .then(data =>{
        console.log(data.data);
        //Created Date
        let createDate = new Date(data.data.created_at);
        createDate = createDate.getFullYear()+'-' + (createDate.getMonth()+1) + '-'+createDate.getDate()+' At: '+createDate.getHours()+':'+createDate.getMinutes()+':'+createDate.getSeconds();
        setCreatedDate(createDate);

        //Updated date
        let updatedDate = new Date(data.data.updated_at);
        updatedDate = updatedDate.getFullYear()+'-' + (updatedDate.getMonth()+1) + '-'+updatedDate.getDate()+' At: '+updatedDate.getHours()+':'+updatedDate.getMinutes()+':'+updatedDate.getSeconds();
        setUpdateDate(updatedDate);
        
        setSingleTodos(data.data);
      });
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

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
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={singleTodo['id']} style={{backgroundColor: singleTodo['status'] == 'pending' ? '#8FF3A0' : '#E2DEDE'}}>
              <TableCell component="th" scope="row">
              #{singleTodo['id']}
              </TableCell>
              <TableCell>{singleTodo['description']}</TableCell>
              <TableCell> {singleTodo['status']}</TableCell>
              <TableCell> {createdDate}</TableCell>
              <TableCell> {updateDate}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
      </div>
    )
  
}

export default Todo
