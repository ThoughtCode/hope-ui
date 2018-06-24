import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


//Component
import IconUno from '../../../assets/Icono-03.svg';
import IconDos from '../../../assets/Icono-05.svg';
import IconCuatro from '../../../assets/Icono-06.svg';
import IconTres from '../../../assets/Icono-07.svg';
import cls from './Funtion.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'flex-end',
    backgroundColor: '#ffffff'
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={`${classes.root} ${cls.stylesFuntion}`}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="headline" gutterBottom className={cls.Typogra} align="center" >¿Cómo Funciona?</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <img src={IconUno} alt="AppLogo" className={cls.Styleicon} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Descarga y Registro</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Descarga Noc Noc en la tienda de tu Smartphone y Registrate
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <img src={IconDos} alt="AppLogo" className={cls.Styleicon} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Ingresa tu información y agenda un servicio</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Coloca tu dirección, fecha y selecciona qué necesitas realizar en tu hogar.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <img src={IconTres} alt="AppLogo" className={cls.Styleicon} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Selecciona un Asesor.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Revisa el perfil que más te guste y ¡elígelo!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <img src={IconCuatro} alt="AppLogo" className={cls.Styleicon} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Realiza tu Pago</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Puedes pagar con cualquier tarjeta de crédito o débito.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="headline" gutterBottom className={cls.congratulation}>
              Listo..!! Prepárate para sentir una experiencia inolvidable en tu hogar.
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