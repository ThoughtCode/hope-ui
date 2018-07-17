// Dependencias
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  Grid,
  Paper,
  Button,
  Typography,
  } from 'material-ui';

// Component
import cls from './Services.css';
import Service1 from '../../../assets/Service1.jpeg';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={cls.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Paper className={cls.Paper} elevation={0}>
            <Typography variant="headline" gutterBottom className={cls.Typogra}>Servicios</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container className={cls.Services} justify="center">
        <Grid item xs={12} sm={6}>
          <Paper className={`${cls.ContentServices} ${classes.paper}`} align="center" elevation={0}>
            <img className={cls.ImageResponsive} src={Service1} alt="pinture" />
            <div className={cls.footerServicios}>
              <Typography variant="headline" gutterBottom className={cls.SubTytle} >Limpieza de hogar</Typography>
              <Button className={cls.pageButtonActive} component={Link} to="/agente/registro">Contrátalo</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);