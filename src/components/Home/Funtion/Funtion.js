import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


//Component
import NumberOne from '../../../assets/One.png';
import NumberTwo from '../../../assets/Two.png';
import NumberThree from '../../../assets/Three.png';
import NumberFour from '../../../assets/Four.png';
import IconUno from '../../../assets/Icono-03.svg';
import IconDos from '../../../assets/Icono-05.svg';
import IconCuatro from '../../../assets/Icono-06.svg';
import IconTres from '../../../assets/Icono-07.svg';
import GooglePlay from '../../../assets/AppPlayStore.svg';
import AppStore from '../../../assets/AppStore.svg';
import cls from './Funtion.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'flex-end',
    backgroundColor: 'transparent'
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={`${classes.root} ${cls.stylesFuntion}`}>
      <Grid container align="center">
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant="headline" gutterBottom className={cls.Typogra} >¿Cómo Funciona?</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={`${cls.Separator} ${classes.paper}`} elevation={0}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <img src={NumberOne} className={cls.iconStyleFuntion} alt="One" />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <img src={IconUno} alt="AppLogo" className={cls.Styleicon} />
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Descarga y Registro</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Paper elevation={0}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Descarga Noc Noc en la tienda de tu Smartphone y Regístrate
                  </Typography>
                </Paper>
              </Grid>
              <div elevation={0}>
                <img src={GooglePlay} className={cls.IconDownload} alt="GoolglePlay" />
                <img src={AppStore} className={cls.IconDownload} alt="App Store" />
              </div>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={`${cls.Separator} ${classes.paper}`} elevation={0}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <img src={NumberTwo} className={cls.iconStyleFuntion} alt="Two" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper elevation={0}>
                  <img src={IconDos} alt="AppLogo" className={cls.Styleicon} />
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Ingresa tu información y agenda un servicio</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Paper elevation={0}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Coloca tu dirección, fecha y selecciona qué necesitas realizar en tu hogar.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={`${cls.Separator} ${classes.paper}`} elevation={0}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <img src={NumberThree} className={cls.iconStyleFuntion} alt="Three" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Paper className={classes.paper} elevation={0}>
                  <img src={IconTres} alt="AppLogo" className={cls.Styleicon} />
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Selecciona un Asesor.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Revisa el perfil que más te guste y ¡elígelo!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper} elevation={0}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <img src={NumberFour} className={cls.iconStyleFuntion} alt="Four" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Paper elevation={0}>
                  <img src={IconCuatro} alt="AppLogo" className={cls.Styleicon} />
                  <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Realiza tu Pago</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10} id="Services">
                <Paper elevation={0}>
                  <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                    Puedes pagar con cualquier tarjeta de crédito o débito.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} id="ServiceRes">
                 <img src="https://cache.hbfiles.com/assets/miscellaneous/payment-strip-f751680936dec11c6599aacdd9dbfa9b.png" alt="Card" />
                </Paper>
              </Grid>
            </Grid>
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