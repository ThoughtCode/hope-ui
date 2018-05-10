import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import MenuBar from './MenuBarRes';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
});

function MediaQuery(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MenuBar />
    </div>
  );
}

MediaQuery.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(MediaQuery);
