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
import cls from './Funtion.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'flex-end',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={`${classes.root} ${cls.stylesFuntion}`}>
      <Grid container justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>

            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra} align="center" >How it Works.</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={IconUno} alt="AppLogo" className={cls.Styleicon} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                      <img src={One} alt="AppLogo" className={cls.imgicon} />
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Lorem ipsum dolor.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
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
                      <img src={Two} alt="AppLogo" className={cls.imgicon}/>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Lorem ipsum dolor.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={IconDos} alt="AppLogo" className={cls.Styleicon} />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={IconTres} alt="AppLogo" className={cls.Styleicon} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                      <img src={Three} alt="AppLogo" className={cls.imgicon} />
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Lorem ipsum dolor.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
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
                      <Typography variant="subheading" gutterBottom className={cls.congratulation}>CONGRATULATIONS.</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="subheading" gutterBottom className={cls.SubSubTypogra}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper} elevation={0}>
                <img src={Congratulation} alt="AppLogo" className={cls.Styleicon} />
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