// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Component
import cls from './Testimonio.css'
import IconUser from '../../../assets/Icono2.png'

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
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper} elevation={0}>
            <img src={IconUser} alt="IconUser" className={cls.StyleIcon} />
            <img src={IconUser} alt="IconUser" className={cls.StyleIcon} />
            <Typography variant="headline" gutterBottom className={cls.SubTitle} >Nuestros Clientes</Typography>
            <Typography variant="headline" gutterBottom className={cls.SubTypogra}>
              En Noc Noc buscamos siempre la excelencia por eso te compartimos algunos comentarios de nuestros clientes.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={`${classes.paper} ${cls.Testimonio}`} elevation={0}></Paper>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" id="Download"></Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);