// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


// Component
import LogoNocNoc from '../../../assets/LogoBlanco.svg';
import Twitter from '../../../assets/twittericon.svg';
import Facebook from '../../../assets/facebookicon.svg';
import Instagram from '../../../assets/InstagramIcon.svg';
import GooglePlay from '../../../assets/GooglePlay.png';
import AppStore from '../../../assets/AppStore.png';
import cls from './Contact.css';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  return (
    <div className={cls.Contact}>
      <Grid container justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>
            
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <Paper className={cls.Paper} elevation={0}>
                <Typography variant="title">
                  <img src={LogoNocNoc} height="100px" alt="Logo" className={cls.LogoNocNoc}></img>
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={5} lg={5}>
              <Paper className={cls.Paper} elevation={0}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={cls.Paper} elevation={0}>
                      ¿Quieres contratar un servicio o quieres conversar con uno de nuestros asesores?
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={cls.Paper} elevation={0}>
                      <Typography gutterBottom style={{color:'#fff'}}>Teléfono:</Typography>
                      <Typography gutterBottom style={{color:'#fff'}}>E-mail:</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4} sm={3}>
                    <Paper className={cls.Paper} elevation={0}>
                      <img src={Facebook} alt="AppLogo" className={cls.Styleicon} />
                    </Paper>
                  </Grid>
                  <Grid item xs={4} sm={3}>
                    <Paper className={cls.Paper} elevation={0}>
                      <img src={Twitter} alt="AppLogo" className={cls.Styleicon} />
                    </Paper>
                  </Grid>
                  <Grid item xs={4} sm={3}>
                    <Paper className={cls.Paper} elevation={0}>
                      <img src={Instagram} alt="AppLogo" className={cls.Styleicon} />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Paper className={cls.Paper} elevation={0}>
                      Puedes tambien descarga nuestra APP en la tienda de tu smatphone
                    </Paper>
                    <img src={GooglePlay} className={cls.iconSocial} alt="GoolglePlay" />
                    <img src={AppStore} className={cls.iconSocial} alt="App Store" />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={5}>
              <Paper className={cls.Paper} elevation={0}>
                <Paper className={cls.Paper} elevation={0}>
                  Siempre es un gusto atenderte, déjanos tus datos:
                </Paper>
                <form>
                  <TextField id="email" label="E-mail" className={cls.textField} fullWidth margin="dense" />
                  <TextField id="name" label="Full Name" className={cls.textField} fullWidth margin="dense" />
                  <TextField id="ciudad" label="Ciudad" className={cls.textField} fullWidth margin="dense" />
                  <TextField id="telefono" label="Telefono" className={cls.textField} fullWidth margin="dense" />
                  <TextField id="multiline-static" label="Message" className={cls.textField} multiline rows="4" fullWidth margin="dense" />
                  <Grid container justify='flex-end'>
                    <Grid item>
                      <Button className={cls.Button}>ENVIAR</Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
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