import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core';

import Budget from './Budget';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  }
}));

const mapState = state => ({
  budgets: state.money.budgets,
});

const mapDispatch = dispatch => ({
  addBudget: () => dispatch.money.addBudget(),
});

const Budgets = props => {
  const classes = useStyles();
  const budgets = props.budgets.map((budget, idx) =>
    <Budget budget={budget} idx={idx} />
  );

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography>Dash Budget</Typography>
        {props.budgets.length < 5 &&  <Button onClick={props.addBudget}>Add Budget</Button>}
        {budgets}
      </Paper>
    </Grid>
  )
}

export default connect(mapState, mapDispatch)(Budgets);