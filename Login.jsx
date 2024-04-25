import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputs,setInputs]=useState({});
  const navigate=useNavigate();

  const inputHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value});
    console.log("textfield",inputs)
  }

  const submitHandler=()=>{
    console.log("Btn",inputs)
    axios.post("http://localhost:3008/api/login",inputs)
    .then((res)=>{
      console.log(res);
    
      alert(res.data.message);
      if(res.data.message=="Login successful"){
        const userId=res.data.person._id;
        sessionStorage.setItem("id",userId)
           navigate('/view');
      }
      
    })
  }
  return (
    <div style={{margin:'12%'}}>
       <Typography variant='h3' style={{color:'purple'}}>
        Login Form</Typography> 
        <br /><br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} >
            <TextField variant='outlined' label=' Username'
            name='username' onChange={inputHandler}>

            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={12} >
            <TextField variant='outlined' label='Password'
             name='password' onChange={inputHandler}>

            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={12} >
            <Button variant='contained' color='secondary' 
            onClick={submitHandler}>
              LOGIN
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} >
            <Link to={'/sign'}>New users click here</Link>
          </Grid>
        </Grid>
    </div>
  )
}

export default Login