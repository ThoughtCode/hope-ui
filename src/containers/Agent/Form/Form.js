//Dependencias
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

//Componentes
import cls from './Form.css'

class Form extends React.Component {
  render() {
    return (
      <form className={cls.Form}>
        <Grid container className={cls.containerForm} justify="center">
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom className={cls.None}>LOREM IPSUM.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subheading" gutterBottom className={cls.None}>LOREM IPSUM.</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField id="name" label="Nombre" fullWidth margin = "dense" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="last" label="Apellido" fullWidth margin = "dense" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="email" label="Correo" fullWidth margin = "dense" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" label="Contraseña" type="password" autoComplete="current-password" fullWidth margin="dense" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password-confirmation" label="Confirme contraseña" type="password" autoComplete="current-password" fullWidth margin="dense" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="cedula" label="Cédula" type="number" fullWidth margin="dense" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="celular" label="Celular" type="number" fullWidth margin="dense" />
          </Grid>
        </Grid>
        <Grid container style={{padding: 10}} justify="center">
          <Grid item >
            <Button className={cls.Button}>INICIAR REGISTRO</Button>
          </Grid>
        </Grid>
        <p className={cls.None}>Al registrarte aceptas los <small className={cls.small}>Terminos y politicas de privacidad.</small></p>
        <Grid container justify="center">
          <Grid item >
            <Button className={cls.ButtonLogin} component={Link} to="/agente/login" >INICIAR SESIÓN</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default Form;