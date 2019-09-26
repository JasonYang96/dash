import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core';

import Saving from './Saving';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  }
}));

const mapState = state => ({
  savings: state.money.savings,
});

const mapDispatch = dispatch => ({
  addSaving: () => dispatch.money.addSaving(),
});

const Savings = props => {
  const classes = useStyles();
  const savings = props.savings.map((saving, idx) =>
    <Saving saving={saving} idx={idx} />
  );

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography>Dash saving</Typography>
        {props.savings.length < 5 &&  <Button onClick={props.addSaving}>Add saving</Button>}
        {savings}
      </Paper>
    </Grid>
  )
}

export default connect(mapState, mapDispatch)(Savings);
