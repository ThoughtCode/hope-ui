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
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>
            
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Paper className={cls.Paper} elevation={0}>
                <Typography variant="title">
                  <img src={LogoNocNoc} height="100px" alt="Logo"></img>
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={8} lg={5}>
              <Paper className={cls.Paper} elevation={0}>
                <form>
                  <TextField id="email" label="E-mail" className={cls.textField} fullWidth margin="normal" />
                  <TextField id="name" label="Full Name" className={cls.textField} fullWidth margin="normal" />
                  <TextField id="multiline-static" label="Message" className={cls.textField} multiline rows="4" fullWidth margin="normal" />
                  <Grid container justify='flex-end'>
                    <Grid item>
                      <Button className={cls.Button}>ENVIAR</Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={12} lg={5}>
              <Paper className={cls.Paper} elevation={0}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={cls.Paper} elevation={0}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt numquam eius ducimus natus mollitia sequi nemo dicta.
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={cls.Paper} elevation={0}>
                      <Typography gutterBottom style={{color:'#fff'}}>Teléfono:</Typography>
                      <Typography gutterBottom style={{color:'#fff'}}>E-mail:</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Paper className={cls.Paper} elevation={0}>
                      <img src={Facebook} alt="AppLogo" className={cls.Styleicon} />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Paper className={cls.Paper} elevation={0}>
                      <img src={Twitter} alt="AppLogo" className={cls.Styleicon} />
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