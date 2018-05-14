import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


//Component
import IconUno from '../../assets/IconUno.svg';
import IconDos from '../../assets/IconDos.svg';
import IconTres from '../../assets/IconTres.svg';
import Congratulation from '../../assets/Congratulation.svg';
import One from '../../assets/One.png';
import Two from '../../assets/Two.png';
import Three from '../../assets/Three.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'flex-end',
  },
});

const Styleicon = {
  height: '6rem',
};

const stylesFuntion = {
  padding: 100,
};

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={stylesFuntion}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>

            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" gutterBottom style={{textAlign: 'center', fontSize: '2rem'}} >How it Works.</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={IconUno} alt="AppLogo" style={Styleicon} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                      <img src={One} alt="AppLogo" />
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="headline" gutterBottom>Lorem ipsum dolor.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={10} style={{textAlign: 'right'}}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                      <img src={Two} alt="AppLogo" />
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="headline" gutterBottom>Lorem ipsum dolor.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={IconDos} alt="AppLogo" style={Styleicon} />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={IconTres} alt="AppLogo" style={Styleicon} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                      <img src={Three} alt="AppLogo" />
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="headline" gutterBottom>Lorem ipsum dolor.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={10} style={{textAlign: 'right'}}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="headline" gutterBottom>CONGRATULATIONS.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={Congratulation} alt="AppLogo" style={Styleicon} />
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