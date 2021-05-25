
import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/header";
import ListPosts from './components/test';
import Footer from "./components/footer";
import './App.css';
function App() {
  return (
    <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8} className="content">
      <ListPosts />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
    <Grid item>
      <Footer />
    </Grid>
  </Grid>
  );
}

export default App;
