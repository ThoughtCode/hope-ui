import React from 'react';
import Grid from 'material-ui/Grid';
import { Typography } from 'material-ui';

// CSS
import cls from './Jumbotron.css';

const jumbotron = () => {
  return (
    <Grid className={cls.Jumbotron} justify="center" align="center" container>
      <Grid item xs={12} sm={8} md={8} lg={8}>
        <Grid justify="center" container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={cls.Title} variant="headline">
                  Encuentra a los mejores profesionales disponibles en tu ciudad
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default jumbotron;