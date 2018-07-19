import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import cls from './UpdatePassword.css';
import Logo from '../../../assets/Logo.svg'
import UpdatedPassword from '../../../components/Client/UpdatedPassword/UpdatedPassword'

class UpdatePassword extends Component {
  render() {
    return (
      <div>
        <div className={cls.Reset}>
          <Grid container className={cls.ButtonClose}>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Button component={Link} to="/">
                  <i className="material-icons">clear</i>
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid container className={cls.ResetContainer} justify="center">
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                 <Button className={cls.pageButtonLogin} component={Link} to="/" >
                  <img src={Logo} className={cls.Applogo} alt="logo" />
                 </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Recuperar Contraseña Cliente</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <UpdatedPassword />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default (UpdatePassword);
