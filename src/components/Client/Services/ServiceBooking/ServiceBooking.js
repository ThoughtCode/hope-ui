import React from 'react';

// Components
import {
  Grid,
} from 'material-ui';
import BookingForm from '../../BookingForm/BookingForm';
import HowWorks from '../../HowWorks/HowWorks';

// Css
import cls from './ServiceBooking.css';

const serviceBooking = props => {
  return (
    <div className={cls.ServiceBooking}>
      <Grid container justify="center">
        <Grid item lg={8}>
          <Grid container justify="center">
            <Grid item lg={8}>
              <Grid container>
                <BookingForm
                  service_base={props.service_base}
                  services_addons={props.services_addons}
                  properties={props.properties}
                  cities={props.cities}
                  neightborhoods={props.neightborhoods}
                  fetchNeightborhoods={props.fetchNeightborhoods}
                  createProperty={props.createProperty}
                  createJob={props.createJob}/>
              </Grid>
            </Grid>
            <Grid item lg={4}>
              <HowWorks />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default serviceBooking;