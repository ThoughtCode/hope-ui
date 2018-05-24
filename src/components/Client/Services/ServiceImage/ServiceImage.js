import React from 'react';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';

// Css
import cls from './ServiceImage.css';

const serviceImage = props => {
  return (
    <div>
      <Grid container justify="center" className={cls.ServiceContainer}>
        <div className={cls.ServiceImage}></div>
        <Grid item xs={8} md={8}>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Typography className={cls.ServiceTitle} variant="headline" gutterBottom>
               {props.title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default serviceImage;