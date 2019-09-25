import React from 'react';
//import connect from 'react-redux';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(20),
  }
}));

export default function Budget() {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography>Dash Budget</Typography>
      </Paper>
    </Grid>
  )
}
