import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  app: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  paper: {
    padding: theme.spacing(20),
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.app} spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Dash Budget</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Dash Savings</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
