import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

//Component
import GooglePlay from '../Img/GooglePlay.png';
import AppStore from '../Img/AppStore.png';
import './Download.css';

const stylesDownload = {
  padding: 60,
  paddingTop: 180,
};

const stylePaper = {
  backgroundColor: 'transparent',
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
});

function Download(props) {
  const { classes } = props;

  return (
    <div className="{classes.root}, Download" style={stylesDownload}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>
            <Grid item xs={12} sm={8} lg={6}>
              <Paper className={classes.paper} elevation={0} style={stylePaper}>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={0} style={stylePaper}>
                    <Typography variant="headline" gutterBottom align="left" style={{ fontSize: '2rem' }}>Download our Download</Typography>
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

Download.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Download);