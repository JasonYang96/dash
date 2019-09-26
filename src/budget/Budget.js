import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const mapState = (state, props) => ({
  income: state.income,
  amount: props.budget.amount,
  name: props.budget.name,
  idx: props.idx,
});

const mapDispatch = dispatch => ({
  deleteBudget: (idx) => dispatch.money.deleteBudget(idx),
  updateBudgetName: (idx, name) => dispatch.money.updateBudgetName(idx, name),
});

const Budget = props => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);

  const handleChange = event => {
    props.updateBudgetName(props.idx, event.target.value);
  };

  const deleteBudget = () => {
    props.deleteBudget(props.idx);
  }

  return (
    <Card key={props.idx} className={classes.paper}>
      <CardActions>
        <Grid item xs={1}>
          <IconButton aria-label="edit/save budget" onClick={() => setEditMode(!editMode)}>
            { editMode ?  <SaveIcon /> : <EditIcon /> }
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          { editMode ?
            <TextField
              id="budgetName{props.idx}"
              label="Budget Name"
              className={classes.textField}
              value={props.name}
              onChange={handleChange}
              margin="normal"
            /> :
            <Typography>{props.name}</Typography>
          }
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="delete budget" onClick={deleteBudget}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </CardActions>
      <CardContent>
        <Typography>Budget is ${props.amount}</Typography>
      </CardContent>
    </Card>
  )
}

export default connect(mapState, mapDispatch)(Budget);
