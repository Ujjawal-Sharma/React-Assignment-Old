import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import NewPost from './form';
import Box from '@material-ui/core/Box';
import PostCard from './card';
import PostDetail from './postDetail';

class ListPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            Message : '',
            isAdd:false,
            isDetail:false,
            postId: '',
            isEdit: false,
            isUpdate: false,
            isMsg: false
        };
        
    }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8001/api/posts?json=true')
    .then(response=>{
      this.setState({posts:response.data.posts});
    })
    .catch(error=> {
      console.log(error)
      this.setState({Message_er: 'Error Retrieving data'});
    })
  //  let copy = this.fetchData();
  //  this.setState({posts:copy.response.data.posts});
  }

  componentDidUpdate() {
    axios.get('http://127.0.0.1:8001/api/posts?json=true')
    .then(response=>{
      //console.log(this.state.isUpdate)
     if(this.state.isUpdate === true){
       //console.log("true")
      this.setState({
        posts:response.data.posts,
      })
      this.setState({
        isUpdate: false
      })
    } 
    })
    .catch(error=> {
      console.log(error)
      //this.setState({Message_er: 'Error Retrieving data'});
    })
  
  }

  // fetchData = () => {
  //   axios.get('http://127.0.0.1:8001/api/posts?json=true')
  //   .then(response=>{
  //     console.log(response)
  //   })
  //   .catch(error=> {
  //     console.log(error)
  //     this.setState({Message_er: 'Error Retrieving data'});
  //   })
  // }

  handleClickAdd = event => {
    this.setState({
      isAdd:true
    });
  }

  handlePostDetail = event => {
    this.setState({
      isDetail:true,
      postId:event.currentTarget.id
    });
  }

  handleClickEdit = event => {
    this.setState({
      isDetail:false,
    });
  }

  handleSubmit = () => {
    this.setState({
      isAdd:false
    });
    this.setState({
      isUpdate:true
    });
    this.getNotify("New post has been added.")
  }

  handleEdit = () => {
    this.setState({
      isDetail:false
    });
    this.setState({
      isUpdate:true
    });
    this.getNotify("Post has been updated.")
  }

  handleDelete = () => {
    this.setState({
      isDetail:false
    });
    this.setState({
      isUpdate:true
    });
    this.getNotify("Post has been deleted.")
  }

  closePostDetail = event => {
    this.setState({
      isDetail:false
    });
  }

  closeAddForm = event => {
    this.setState({
      isAdd:false
    });
  }

  closeEditForm = event => {
    this.setState({
      isEdit:false
    });
  }

  getNotify = msg => {
    this.setState({
      Message:msg,
      isMsg:!this.state.isMsg
    });
  }

  // setMsg = () => {
  //   this.setState({
  //     isMsg:!this.state.isMsg
  //   });
  // }

  render() {
    const { posts } = this.state
    return (
      <div className="bgb">
      {
       this.state.isAdd ? 
       <NewPost action={this.closeAddForm} action2 = {this.handleSubmit}/>
       : 
       this.state.isDetail ?
        <PostDetail id={this.state.postId} action={this.closePostDetail} actionEdit={this.handleEdit} actionDelete= {this.handleDelete}/>
        : <Container maxWidth="lg">
          {
            this.state.isMsg ?
            <Grid>
          <p className="msg">{this.state.Message}
          {/* <Button color="default" onClick={this.setMsg}>
          <CloseIcon /></Button> */}
          </p>
          </Grid>
            : null
          }
        <Grid  container
          direction="column"
          justify="center"
          alignItems="center">
            <Box p={2}>
              <Button variant="contained" color="primary" className="btn"
              startIcon={<AddIcon />} onClick={this.handleClickAdd}>New</Button>
            </Box>
        </Grid>
        <Grid container spacing={2}>
          { 
              posts.length ?
              posts.map(post => 
                <PostCard key={post.id} id={post.id} title={post.title} body={post.body} 
                action={this.handlePostDetail}/>) 
                : "No posts available"
          }
         </Grid>
          </Container>
      }
      </div>
    );
  }
}
export default ListPosts;