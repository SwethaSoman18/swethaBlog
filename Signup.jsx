import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const[inputs,setInputs]=useState({});

  const inputHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value});
    console.log(inputs)
  }

  const submitHandler=()=>{
    console.log("Btn clicked",inputs)
    axios.post("http://localhost:3008/api/post",inputs)
    .then((res)=>{
      console.log(res)
      alert(res.data.message);
      
    })
  }
  return (
    <div>
        <Typography variant='h3' style={{color:"purple"}}> SignUp Form</Typography>
        <br /><br />
        <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Name" fullWidth name='name' onChange={inputHandler}></TextField>
           </Grid>
           <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Email" fullWidth name='email' onChange={inputHandler}></TextField>
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="Address" fullWidth  multiline rows={5} name='address' onChange={inputHandler}></TextField>
           </Grid>
           <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="username" fullWidth name='username' onChange={inputHandler}></TextField>
           </Grid>
           <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Password" fullWidth name='password' onChange={inputHandler}></TextField>
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
            <Button variant='contained' color='secondary' onClick={submitHandler}>Submit</Button>
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
            <Link to={'/'}>Back to login</Link>
           </Grid>
        </Grid>
    </div>
  )
}

export default Signup