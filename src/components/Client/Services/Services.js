import React from 'react';

// Componentes
import Grid from 'material-ui/Grid';
import {
  Typography,
} from 'material-ui';
import Service from './Service/Service';


const services = props => {
  const services = props.services.map(service => (
    <Service key={service.id} name={service.name} />
  ));
  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="headline">
              Servicios
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          {services}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default services;
