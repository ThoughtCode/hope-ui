import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

//Component
import GooglePlay from '../../assets/GooglePlay.png';
import AppStore from '../../assets/AppStore.png';
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
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>
            <Grid item xs={12} sm={8} lg={6}>
              <Paper className={classes.paper} elevation={0} style={stylePaper}>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={0} style={stylePaper}>
                    <Typography variant="headline" gutterBottom align="left" className={cls.Typogra}>Download our Download</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={0} style={stylePaper}>
                    <Typography variant="subheading" gutterBottom align="left">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} >
                  <Paper className={classes.paper} elevation={0} style={stylePaper}>
                    <Grid container spacing={24}>
                      <Grid item xs={12} sm={6} md={6} xl={6}>
                        <Paper className={classes.paper} elevation={0} style={stylePaper}>
                          <img src={GooglePlay}  alt="GoolglePlay" />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} xl={6}>
                        <Paper className={classes.paper} elevation={0} style={stylePaper}>
                          <img src={AppStore}  alt="App Store" />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Download);