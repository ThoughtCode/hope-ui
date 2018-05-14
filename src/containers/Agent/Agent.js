// DEPENDENCIAS
import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// COMPONENTES
import AppLogo from '../../containers/Img/Logo.svg';
import Form from './Form/Form';
import cls from './Agent.css';

const style = {
  paddingTop: 50,
};

const agent = () => (
  <div className={cls.Agent}>
    <img src={AppLogo} className={cls.Applogo} alt="logo" />
    <Grid container className={cls.Agent} spacing={24} justify="center" style={style}>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="headline"
              gutterBottom
              style={{ color: '#0069a7', fontFamily: 'Fabada', fontSize: '2rem' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default agent;
