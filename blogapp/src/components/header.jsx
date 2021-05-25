import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import '../App.css';
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
    fontSize: 25
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography className={classes.typographyStyles} component="h1">
          Blogger
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;