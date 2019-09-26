import React from 'react';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Budgets from './budget/Budgets';
import Income from './income/Income';
import Saving from './saving/Saving';
import * as models from './models';

const store = init({
  models,
});

const useStyles = makeStyles(theme => ({
  app: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Container className={classes.app}>
          <Grid container spacing={5}>
            <Income />
            <Budgets />
            <Saving />
          </Grid>
        </Container>
      </Provider>
    </React.StrictMode>
  );
}
