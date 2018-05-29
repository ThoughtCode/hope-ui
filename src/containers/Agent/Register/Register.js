// DEPENDENCIAS
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// COMPONENTES
import AppLogo from '../../../assets/LogoBlanco.svg';
import Form from '../Form/Form';
import cls from './Register.css';

class Register extends Component {
  render () {
    return (
      <div className={cls.Registro}>
        <Button component={Link} to="/" >
          <img src={AppLogo} className={cls.logo} alt="logo" />
        </Button>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={10}>
            <Grid container justify="center" align="center">
              <Grid item xs={12} sm={6} md={6}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Lorem ipsum dolor sit.</Typography>
              </Grid>
              <Grid item xs={11} sm={4} md={4}>
                <Form />
              </Grid>
            </Grid>
          </Grid>          
        </Grid>
      </div>
    );
  }
}

export default Register;