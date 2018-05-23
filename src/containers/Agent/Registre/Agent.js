// DEPENDENCIAS
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// COMPONENTES
import AppLogo from '../../../assets/Logo.svg';
import From from '../Form/Form';
import cls from './Agent.css';

class Agent extends Component {
  render () {
    return (
      <div className={cls.Agent}>
        <Button component={Link} to="/" >
          <img src={AppLogo} className={cls.logo} alt="logo" />
        </Button>
        <Grid container justify='center' className={ cls.AppPaddingTop }>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <From />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Agent;