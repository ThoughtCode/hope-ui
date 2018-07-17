// Dependencias
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import {
  Paper,
  Grid,
  Typography,
  Button,
} from 'material-ui';


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

class FullWidthGrid extends Component {
  contactUs() {
    // TODO: Send the email here
  }
  render (){
    return (
      <div className={cls.Contact}>
        <Grid container align="center">
          <Grid item xs={6} sm={6} md={3}>
            <Paper className={cls.Paper} elevation={0}>
              <Typography variant="title">
                <img src={LogoNocNoc} height="100px" alt="Logo" className={cls.LogoNocNoc}></img>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className= {`${cls.Paper} ${cls.Border}`} elevation={0}>
              <Grid container>
                <Grid item xs={12}>
                  <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Conócenos</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.Paper} elevation={0}>
                    <ul className={cls.UlContact}>
                      <li className={cls.ListContact}>
                        <NavLink className={cls.Link} to="/">Quiénes Somos?</NavLink>
                      </li>
                      <li className={cls.ListContact}>
                        <NavLink className={cls.Link} to="/agente/registro">Quiero ser agente?</NavLink>
                      </li>
                      <li className={cls.ListContact}>
                        <NavLink className={cls.Link} to="/">Principios y Valores</NavLink>
                      </li>
                      <li className={cls.ListContact}>
                        <NavLink className={cls.Link} to="/politicas">Terminos y Condiciones</NavLink>
                      </li>
                    </ul>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={`${cls.Paper} ${cls.Border}`} elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Contactos</Paper>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <Paper className={`${cls.SubSubTitle} ${cls.Paper}`} elevation={0}>Déjanos tus datos y nos contactaremos contigo.</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.Paper} elevation={0}>
                    <form action="mailto:info@nocnoc.com.ec" method="post" enctype="text/plain">
                      <p>
                        <input type="text" name="username" placeholder="Nombre" />
                      </p>
                      <p>
                        <input type="text" name="celular" placeholder="Telefono" />
                      </p>
                      <p>
                        <input type="email" name="correo" placeholder="Correo" />
                      </p>
                      <Button className={cls.ButtonContratar} type="submit" value="Send" >Enviar</Button>
                    </form>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
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
              <Grid container className={cls.ContentSocial} justify="flex-end" align="right">
                <Grid item xs={8}>
                  <Paper className={cls.PaperSocial} elevation={0}>
                    <img src={Facebook} alt="AppLogo" className={cls.Styleicon} />
                  </Paper>
                  <Paper className={cls.PaperSocial} elevation={0}>
                    <img src={Twitter} alt="AppLogo" className={cls.Styleicon} />
                  </Paper>
                  <Paper className={cls.PaperSocial} elevation={0}>
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
}

export default withStyles(styles)(FullWidthGrid);