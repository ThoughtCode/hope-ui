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
              <BookingForm />
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