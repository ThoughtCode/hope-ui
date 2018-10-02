import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

//Component
import GooglePlay from '../../../assets/AppPlayStore.svg';
import AppStore from '../../../assets/AppStore.svg';
import Fondo from '../../../assets/MovilNocNoc2.png';
import cls from './Download.css';

const styles = theme => ({
  paper: {
    backgroundColor: 'transparent',
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
});

function Download(props) {
  const { classes } = props;

  return (
    <div className={`${cls.Download} ${cls.stylesDownload}`}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper} elevation={0}>
            <h1 className={cls.SubTitle} variant="headline" gutterBottom>
              Descarga Noc Noc desde la tienda de tu Smartphone
            </h1>
            <div container className={cls.ContentDownload} align="center">
              <div className={cls.ContentDownloadImg}>
                <img className={cls.IconDownload} src={GooglePlay} alt="GoolglePlay" />
                <img className={cls.IconDownload} src={AppStore} alt="App Store" />
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} align="right">
          <img className={cls.Img} src={Fondo} alt="celular" />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Download);