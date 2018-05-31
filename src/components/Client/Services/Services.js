import React from 'react';

// Componentes
import Grid from 'material-ui/Grid';
import {
  Typography,
} from 'material-ui';
import Service from './Service/Service';

import cls from './Services.css';

const services = props => {
  const services = props.services.map(service => (
    <Service
      clicked={props.clicked}
      key={service.id}
      id={service.id}
      name={service.attributes.name}
      image={service.attributes.image.url}/>
  ));
  return (
    <Grid container justify="center">
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={12} className={cls.Item}>
            <Typography className={cls.Title} variant="headline">
              Servicios Recomendados
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={40}>
          {services}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default services;
