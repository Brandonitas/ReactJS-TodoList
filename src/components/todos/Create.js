// src/components/todos/Create.js
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Create = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    
    const handleTodoChange = (event) => {
        let val = event.target.value;
        setTodo(val);
    }

    const handleCreateClick = (event) => {
        addTodo(todo);
        setTodo('');
    }

    const useStyles = makeStyles({
        inputForm: {
          maxWidth: 650,
          marginTop: '50px',
          margin: 'auto'
  
        },
      });
      const classes = useStyles();

    return (
        <div className={classes.inputForm}>
            <label htmlFor="create-form"></label>
            <TextField id="standard-basic" label="Todo"  value={todo}
                onChange={handleTodoChange}/>
  
            <Button variant="contained" color="primary" 
                onClick={handleCreateClick}>Crear tarea</Button>
        </div>
    )
}

export default Create;