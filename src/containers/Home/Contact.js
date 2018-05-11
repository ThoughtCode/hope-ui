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
import LogoNocNoc from '../Img/LogoBlanco.svg';
import Twitter from '../Img/twittericon.svg';
import Facebook from '../Img/facebookicon.svg';
import './Contact.css';

const stylesContact = {
  backgroundColor: '#0069a7',
  color: '#fff',
  padding: 90,
  textField: {
    color: "#ffffff",
  },
};

const styleButton = {
  backgroundColor: '#eee',
  color: '#0069a7',
  fontFamily: 'Arial',
};

const stylePaper = {
  backgroundColor: 'transparent',
  textAlign: 'left',
  color: '#fff'
};

const Styleicon = {
  height: '3rem',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={stylesContact}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>
            
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Paper className={classes.paper} elevation={0} style={stylePaper}>
                <Typography variant="title">
                  <img src={LogoNocNoc} height="100px" alt="Logo"></img>
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={8} lg={5}>
              <Paper className={classes.paper} elevation={0} style={stylePaper}>
                <form>
                  <TextField id="email" label="E-mail" fullWidth margin = "normal" />
                  <TextField id="name" label="Full Name" fullWidth margin = "normal" />
                  <TextField id="multiline-static" label="Message" multiline rows="4" fullWidth margin = "normal" />
                  <Grid container justify='flex-end'>
                    <Grid item>
                      <Button style={styleButton}>ENVIAR</Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={12} lg={5}>
              <Paper className={classes.paper} elevation={0} style={stylePaper}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0} style={stylePaper}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt numquam eius ducimus natus mollitia sequi nemo dicta.
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0} style={stylePaper}>
                      <Typography gutterBottom style={{color:'#fff'}}>Teléfono:</Typography>
                      <Typography gutterBottom style={{color:'#fff'}}>E-mail:</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={0} style={stylePaper}>
                      <img src={Facebook} alt="AppLogo" style={Styleicon} />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={0} style={stylePaper}>
                      <img src={Twitter} alt="AppLogo" style={Styleicon} />
                    </Paper>
                  </Grid>
                </Grid>
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