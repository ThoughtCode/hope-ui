import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

//Component
import AppLogo from '../Img/AppLogo.png';
import GooglePlay from '../Img/GooglePlay.png';
import AppStore from '../Img/AppStore.png';
import './Download.css';

const stylesDownload = {
  padding: 90,
  paddingTop: 180,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className="{classes.root}, Download" style={stylesDownload}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={0}>
                <img src={AppLogo} alt="AppLogo"/>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={0}>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography variant="headline" gutterBottom align="left">Download our Download</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography variant="subheadin" gutterBottom align="left">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper} elevation={0}>
                    <Grid container spacing={24}>
                      <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={0}>
                          <img src={GooglePlay}  alt="GoolglePlay" />
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={0}>
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

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);