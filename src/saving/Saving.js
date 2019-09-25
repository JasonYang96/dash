import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '10px',
    padding: theme.spacing(2),
  }
}));

const mapState = state => ({
  savings: state.money.savings,
});

const mapDispatch = dispatch => ({
  addSaving: () => dispatch.money.addSaving(),
});

const Saving = props => {
  const classes = useStyles();
  const savings = props.savings.map((saving, idx) =>
    <Paper key={idx} className={classes.paper}>
      <Typography>saving is {saving}</Typography>
    </Paper>
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

export default connect(mapState, mapDispatch)(Saving);