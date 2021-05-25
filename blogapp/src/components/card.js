import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import '../App.css';

function PostCard(props) {

  const { id, title, body, action} = props;


  return (
    <Grid item xs={12} sm={4}>
    <Card onClick={action} id={id} className="card">
    <CardHeader
      title={title}
    />
    <CardContent>
      <Typography variant="body2" component="p">
        {body}
      </Typography>
    </CardContent>
  
</Card>
</Grid>
      /* <div>
    <Card p={5} onClick={action} id={id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         {body}
        </Typography>
      </CardContent>
  </Card>
  </div> */
  

  );
}
export default PostCard;