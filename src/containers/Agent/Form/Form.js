// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid,
  Button,
  TextField,
  Typography,
  Paper,
  withStyles,
} from 'material-ui';

// Componentes
import cls from './Form.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    margin: 10,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={cls.container}>
        <form className={cls.Form}>
          <Grid container container className={cls.containerForm} justify="center">
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="title" gutterBottom className={cls.None}>LOREM IPSUM.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="subheading" gutterBottom className={cls.None}>LOREM IPSUM.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  fullWidth
                  placeholder="Nombre"
                  id="name"
                  InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                  }}
                  InputLabelProps={{
                  shrink: true,
                  className: classes.bootstrapFormLabel,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  fullWidth
                  placeholder="Apellido"
                  id="last"
                  InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                  }}
                  InputLabelProps={{
                  shrink: true,
                  className: classes.bootstrapFormLabel,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
                <TextField
                  fullWidth
                  placeholder="Correo"
                  id="email"
                  InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                  }}
                  InputLabelProps={{
                  shrink: true,
                  className: classes.bootstrapFormLabel,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  fullWidth
                  placeholder="Contraseña"
                  id="password"
                  InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  fullWidth
                  placeholder="Confirme Contraseña"
                  id="password-confirmation"
                  InputProps={{
                    disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  fullWidth
                  placeholder="Cédula"
                  id="cedula"
                  InputProps={{
                    disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  fullWidth
                  placeholder="Celular"
                  id="celular"
                  InputProps={{
                    disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
                <Button className={cls.pageButton}>Registrar</Button>
            </Grid>
          </Grid>
          <p className={cls.None}>Al registrarte aceptas los <small className={cls.small}>Terminos y politicas de privacidad.</small></p>
          <Grid container justify="center">
            <Grid item >
              <Button className={cls.ButtonLogin} component={Link} to="/agente/login" >INICIAR SESIÓN</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default (withStyles(styles)(Form));