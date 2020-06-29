import React  from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  h1: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%'
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
          <div className={classes.toolbar}>
            <h1 className={classes.h1}>Splio Velib' Finder</h1>
            <h3 className={classes.h1}>Maxime Schneider</h3>
          </div>
      </AppBar>
    </React.Fragment>
  );
}
