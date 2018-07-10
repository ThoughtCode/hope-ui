// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Component
import cls from './Guarantees.css';
import Profesionales from '../../../assets/Icono-07.svg';
import GuaranteesAlDia from '../../../assets/Icono-02.svg';
import Guarante from '../../../assets/Icono-04.svg'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={cls.Guarante} justify="center">
        <Grid item xs={12} md={10} sm={12}>
          <Grid container>
            
            <Grid container align="center" justify="center" className={cls.TopSeccion}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <img className={cls.icon} src={Profesionales} alt="Profesionales" />
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Profesionales con experiencia</Typography>
                  <Grid item xs={12} className={cls.Text}>
                    Personas que tienen como principal objetivo <br/> <small className={cls.small}>Tu satisfacción</small>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <img className={cls.icon} src={GuaranteesAlDia} alt="Garantias Al Dia"/>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Disponibilidad al día</Typography>
                  <Grid item xs={12} className={cls.Text}>
                    Tú eliges el día que necesitas nuestra visita
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <img className={cls.icon} src={Guarante} alt="Garantias" />
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Seguro de Protección</Typography>
                  <Grid item xs={12} className={cls.Text}>
                    Noc Noc garantiza el servicio con nuestro seguro de protección.
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);