import React from 'react';
import Grid from 'material-ui/Grid';
import { Typography, Button } from 'material-ui';

// CSS
import cls from './Jumbotron.css';

const jumbotron = () => {
  return (
    <Grid className={cls.Jumbotron} justify="center" container>
      <Grid item xs={8} sm={8} md={8} lg={8}>
        <Grid justify="center" container>
          <Grid item xs={8} sm={6} md={8} lg={9}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="headline">
                  lorem ipsum
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="subheading">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={6} md={4} lg={3}>
            <Typography variant="button">
              <Button className={cls.Button} color="secondary">
                Crear trabajo nuevo
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default jumbotron;