import React from 'react';
import { withStyles } from 'material-ui/styles';

// Component
import Register from '../../../components/Agent/Register/Register';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#bfbfbf',
    padding: 20,
    borderRadius: 5,
    fontFamily: 'Fabada',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const form = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Register />
    </div>
  );
};


export default withStyles(styles)(form);
