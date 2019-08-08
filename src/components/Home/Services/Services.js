// Dependencias
import React, { Component } from 'react';
import { Grid } from 'material-ui';

// Component
import cls from './Services.css';
import ServiceOne from '../../../assets/service1.png';
import ServiceTwo from '../../../assets/service2.png';
import ServiceThree from '../../../assets/service3.png';

class Services extends Component {
  render(){
    return (
      <Grid container direction="row" alignItems="center" justify="center" className={cls.stylesServices}>
        <div className={cls.styleImg}>
          <img src={ServiceOne} alt="AppLogo" />
        </div>
        <div className={cls.styleImg}>
          <img src={ServiceTwo} alt="AppLogo" />
        </div>
        <div className={cls.styleImg}>
          <img src={ServiceThree} alt="AppLogo" />
        </div>
      </Grid>
    );
  }
}

export default Services;
