import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import axios from 'axios';

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


    return (
      <div>
        <table border="1">
          <thead>
            <th>#</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created at</th>
            <th>Updated at</th>
          </thead>
          <tbody>
                <tr key={singleTodo['id']} style={{backgroundColor: singleTodo['status'] == 'pending' ? 'green' : 'grey'}}>
                  <td>#{singleTodo['id']}</td>
                  <td>{singleTodo['description']}</td>
                  <td>{singleTodo['status']}</td>
                  <td>{createdDate}</td>
                  <td>{updateDate}</td>
                </tr>
          </tbody>
        </table>
      </div>
    )
  
}

export default Todo
