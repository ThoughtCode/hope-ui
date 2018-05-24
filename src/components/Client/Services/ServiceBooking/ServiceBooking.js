import React from 'react';

// Components
import {
  Grid,
} from 'material-ui';
import BookingForm from '../../BookingForm/BookingForm';
import HowWorks from '../../HowWorks/HowWorks';

const serviceBooking = props => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={8}>
          <Grid container justify="center">
            <Grid item xs={8}>
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
            <Grid item xs={4}>
              <HowWorks />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default serviceBooking;