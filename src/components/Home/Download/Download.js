import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

//Component
import GooglePlay from '../../../assets/AppPlayStore.svg';
import AppStore from '../../../assets/AppStore.svg';
import Fondo from '../../../assets/MovilNocNoc2.png';
import cls from './Download.css';

const stylePaper = {
  backgroundColor: 'transparent',
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
});

function Download(props) {
  const { classes } = props;

  return (
    <div className={`${cls.Download} ${cls.stylesDownload}`}>
      <Grid container justify="center">
        <Grid item xs={12} md={8} sm={12} lg={8}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Paper className={classes.paper} elevation={0} style={stylePaper}>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={0} style={stylePaper}>
                    <Typography variant="headline" gutterBottom align="left" className={cls.Typogra}>¡Descarga nuestra App y contrata nuestros servicios, es muy fácil!</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  <Paper className={classes.paper} elevation={0} style={stylePaper}>
                    <Typography className={cls.SubheadingTypogra} variant="subheading" gutterBottom align="left">
                      <i className={`${"material-icons"} ${cls.IconosDownload}`}>check</i>
                      Contrata y agenda servicios
                    </Typography>
                    <Typography className={cls.SubheadingTypogra} variant="subheading" gutterBottom align="left">
                      <i className={`${"material-icons"} ${cls.IconosDownload}`}>check</i>
                      Elige el perfil de tu agente
                    </Typography>
                    <Typography className={cls.SubheadingTypogra} variant="subheading" gutterBottom align="left">
                      <i className={`${"material-icons"} ${cls.IconosDownload}`}>check</i>
                      Paga con tus tarjetas preferidas
                    </Typography>
                    <Typography className={cls.SubheadingTypogra} variant="subheading" gutterBottom align="left">
                      <i className={`${"material-icons"} ${cls.IconosDownload}`}>check</i>
                      Recibe notificaciones
                    </Typography>
                    <Typography className={cls.SubheadingTypogra} variant="subheading" gutterBottom align="left">
                      <i className={`${"material-icons"} ${cls.IconosDownload}`}>check</i>
                      Recibe notificaciones
                    </Typography>
                    <img src={GooglePlay} className={cls.iconSocial} alt="GoolglePlay" />
                    <img src={AppStore} className={cls.iconSocial} alt="App Store" />
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img src={Fondo}  alt="fondo" className={cls.img} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Download);