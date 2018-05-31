// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Component
import cls from './Testimonio.css'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    backgroundColor: 'transparent',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={`${cls.TopSeccion} ${classes.root}`} align="center">
      <Grid container className={cls.Testimonio} align="left" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant="headline" gutterBottom className={cls.Typogra} >Amado por los clientes</Typography>
            <Typography variant="headline" gutterBottom className={cls.SubTypogra}>
              NocNoc es el proveedor líder de servicios para el hogar. Los clientes de Handy Professionals son calificados y revisados ​​por clientes como usted. Elija el profesional con el que desea trabajar agregándolo a su equipo profesional.
            </Typography>
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