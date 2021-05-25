import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';

function PostDetail(props) {

    const {id, action, actionEdit, actionDelete} = props;
   const [post, setPost] = useState(['']);
   const [isEdit, setIsEdit] = useState(false);
   const [title, setTitle] =  useState('');
   const [body, setBody] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8001/api/posts/${id}?json=true`)
        .then(response=>{
        setPost(response.data.post);
        setTitle(response.data.post.title);
        setBody(response.data.post.body);
        })
        .catch(error=> {
          console.log(error)
          //this.setState({Message_er: 'Error Retrieving data'});
        })
    }, [id]);

    const deletePost = () => {
        axios.delete(`http://127.0.0.1:8001/api/posts/${id}?json=true`)
        .then(response=>{
        })
        .catch(error=> {
          console.log(error)
          //this.setState({Message_er: 'Error Retrieving data'});
        })
        actionDelete();
    }

    const handleEditClick = event => {
        setIsEdit(true);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8001/api/posts/${id}?json=true`, {
            'title': title,
            'body': body
        })
      .then(response=>{
      })
      .catch(error=> {
        console.log(error)
      })
      actionEdit();
    }
    

    return (
<Container component="main" maxWidth="md">
    <Box p={1}>
        <Paper>
           
            {  isEdit ?
            <Box>
                <Box p={1}>
            <Grid container
                alignItems="center">
                <Button
                    type="submit"
                    onClick={() => setIsEdit(false)}
                >
                <ArrowBackIcon  color="primary"/> 
                </Button>
                </Grid>
            </Box>
            <Box>
                <Card>
                <Grid container
        justify="center"
        alignItems="center">
                    <Box>
                    <form onSubmit={handleSubmit}>
                    <Box m={3}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            value = {title}
                            onChange={e => setTitle(e.currentTarget.value)}
                            autoFocus
                            />
                       
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            required
                            multiline
                            rows={8}
                            fullWidth
                            name="body"
                            variant="outlined"
                            value = {body}
                            onChange={e => setBody(e.currentTarget.value)}
                            />
                        </Box>
                        <Box m={3} mb={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Update
                        </Button>
                        </Box>
                        </form>
                    </Box>
                    </Grid>
                </Card>
                </Box>
                </Box>
               : 
               <Box>
               <Box p={1}>
            <Grid container
                alignItems="center">
                <Button
                    type="submit"
                    onClick={action}
                >
                <ArrowBackIcon  color="primary"/> 
                </Button>
                </Grid>
            </Box>
            <Box>
               <Card>
                    <Box p={3}>
                        <CardHeader
                            title={post.title}
                        />
                        <CardContent>
                            <Typography variant="body2" component="p">
                            {post.body}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" id={id} onClick={handleEditClick}>Edit</Button>
                            <Button size="small" variant="contained" color="primary" onClick={deletePost}>Delete</Button>
                        </CardActions>
                    </Box>
                </Card>
                </Box>
                </Box>
            }   
            
        </Paper>
    </Box>
</Container>
    );
}

export default PostDetail
