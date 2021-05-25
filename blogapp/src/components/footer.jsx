
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import '../App.css';
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center'
  }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position="static" className="footer">
      <Toolbar>
        <Typography className={classes.typographyStyles} component="h1">
          © 2020 Copyright: blogger.com
        </Typography>
      </Toolbar>
    </AppBar>
    )
}