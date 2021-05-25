
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NewPost(props) {
    const [title, setTitle] =  useState('');
    const [body, setBody] = useState('');
    const { action, action2} = props;

const handleSubmit = e => {

    axios.post('http://127.0.0.1:8001/api/posts?json=true', {
        'title': title,
        'body': body
    })
  .then(response=>{
  })
  .catch(error=> {
    console.log(error)
  })
  action2();
}

return(
<Container component="main" maxWidth="md">
<Box p={1}  mt={3}>
    <Paper>
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
    <Grid container
        justify="center"
        alignItems="center">
        <form onSubmit={handleSubmit}>
        <Box mb={1}>
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
        <Box mb={5}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Post
          </Button>
          </Box>
        </form>
        </Grid>
        </Box>
        </Paper>
        </Box>
    </Container>

);
}

export default NewPost;