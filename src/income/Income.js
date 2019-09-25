import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(20),
  }
}));

const mapState = state => ({
  income: state.money.income,
});

const mapDispatch = dispatch => ({
  addIncome: () => dispatch.money.addIncome(10),
});

const Budget = props => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography>{props.income}</Typography>
        <Button onClick={props.addIncome}>Add Income</Button>
      </Paper>
    </Grid>
  )
}

export default connect(mapState, mapDispatch)(Budget);
