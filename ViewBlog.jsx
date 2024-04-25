import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ViewBlog = () => {
  var [data,setData]= useState([]);
  var[update,setUpdate]=useState(false);
  const navigate=useNavigate();

   useEffect(()=>{
    axios.get("http://localhost:3008/api/viewall")
    .then((res)=>{
      setData(res.data)
    })
   },[])

   const deleteValue =(id)=>{
    console.log("id is",id)
    axios.delete("http://localhost:3008/api/remove/"+id)
    .then((res)=>{
      alert(res.data.message)
      window.location.reload(true)
    })
    .catch((error)=>{
      console.log(error)
    })
   }

const updateBlog=(val)=>{
  console.log("update:",val)
  setUpdate(update=true);
  console.log(update);
  navigate('/add',{state:{val,update}})

}

  return (
    <div>
      <Grid container spacing={2}>
         {data.map((val,i)=>{
          return(
            <Grid item xs={12} sm={4} md={4} key={i}>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {val.post}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='error'
        onClick={()=>{deleteValue(val._id)}}> 
        Delete</Button>
        <Button size="small" color='success'
         onClick={()=>{updateBlog(val)}}> 
          Update</Button>
      </CardActions>
    </Card>
            </Grid>
          )
         })}
        
      </Grid>
    </div>
  )
}

export default ViewBlog