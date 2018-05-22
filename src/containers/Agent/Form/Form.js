import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const styleButton = {
  backgroundColor: '#0069a7',
  color: '#fff',
  fontFamily: 'Arial',
}

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

    return (
      <form style={{ backgroundColor: "#bfbfbf", padding: 20, borderRadius: 5, fontFamily: 'Fabada' }}>
        <Typography variant="title" gutterBottom style={{fontFamily: "Fabada" }}>LOREM IPSUM DOLOR SIT</Typography>
        <Typography variant="subheading" gutterBottom style={{fontFamily: "Fabada" }}>LOREM IPSUM DOLOR SIT</Typography>
        <TextField id="name" label="First Name" fullWidth margin = "dense" />
        <TextField id="last" label="Last Name" fullWidth margin = "dense" />
        <TextField id="email" label="E-mail" fullWidth margin = "dense" />
        <TextField id="password" label="Password" type="password" autoComplete="current-password" fullWidth margin="dense" />
        <TextField id="password-confirmation" label="Password Confirmatión" type="password" autoComplete="current-password" fullWidth margin="dense" />
        <TextField id="cedula" label="Cédula ó Pass" type="number" fullWidth margin="dense" />
        <TextField id="celular" label="Celular" type="number" fullWidth margin="dense" />
        <Grid container style={{padding: 10}} justify="center">
          <Grid item>
            <Button style={styleButton}>INICIAR REGISTRO</Button>
          </Grid>
        </Grid>
        <p style={{fontFamily: "Arial"}} >Al registrarte aceptas los <small style={{color: "#0069a7"}}>Terminos y politicas de privacidad.</small></p>
        <Grid container justify="center">
          <Grid item>
            <Button style={{color: "#0069a7"}} component={Link} to="/agente/login" >INICIAR SESIÓN</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);