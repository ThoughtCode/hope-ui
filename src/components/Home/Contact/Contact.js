// Dependencias
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


// Component
import LogoNocNoc from '../../../assets/LogoBlanco.svg';
import Twitter from '../../../assets/twittericon.svg';
import Facebook from '../../../assets/facebookicon.svg';
import Instagram from '../../../assets/InstagramIcon.svg';
import GooglePlay from '../../../assets/AppPlayStore.svg';
import AppStore from '../../../assets/AppStore.svg';
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
      <Grid container align="center">
        <Grid item xs={6} sm={3}>
          <Paper className={cls.Paper} elevation={0}>
            <Typography variant="title">
              <img src={LogoNocNoc} height="100px" alt="Logo" className={cls.LogoNocNoc}></img>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={cls.Paper} elevation={0}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Conócenos</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={`${cls.Border} ${cls.Paper}`} elevation={0}>
                  <ul className={cls.UlContact}>
                    <li className={cls.ListContact}>
                      <NavLink className={cls.Link} to="/">Quiénes Somos?</NavLink>
                    </li>
                    <li className={cls.ListContact}>
                      <NavLink className={cls.Link} to="/">Principios y Valores</NavLink>
                    </li>
                    <li className={cls.ListContact}>
                      <NavLink className={cls.Link} to="/politicas">Politicas de Calidad</NavLink>
                    </li>
                  </ul>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={cls.Paper} elevation={0}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Contactos</Paper>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Paper className={`${cls.SubSubTitle} ${cls.Paper}`} elevation={0}>Déjanos tus datos y nos contactaremos contigo.</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={cls.Paper} elevation={0}>Formulario</Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={cls.Paper} elevation={0}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Descarga</Paper>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Paper className={`${cls.SubSubTitle} ${cls.Paper}`} elevation={0}>Descarga Noc Noc desde la tienda de tu Smatphone</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={cls.Paper} elevation={0}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={6}>
                      <Paper className={cls.Paper} elevation={0}>
                        <img src={GooglePlay} className={cls.iconSocial} alt="GoolglePlay" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Paper className={cls.Paper} elevation={0}>
                        <img src={AppStore} className={cls.iconSocial} alt="App Store" />
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={cls.Paper} elevation={0}>
            <Grid container justify="flex-end" align="center">
              <Grid item xs={4} sm={1}>
                <Paper className={cls.Paper} elevation={0}>
                  <img src={Facebook} alt="AppLogo" className={cls.Styleicon} />
                </Paper>
              </Grid>
              <Grid item xs={4} sm={1}>
                <Paper className={cls.Paper} elevation={0}>
                  <img src={Twitter} alt="AppLogo" className={cls.Styleicon} />
                </Paper>
              </Grid>
              <Grid item xs={4} sm={1}>
                <Paper className={cls.Paper} elevation={0}>
                  <img src={Instagram} alt="AppLogo" className={cls.Styleicon} />
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