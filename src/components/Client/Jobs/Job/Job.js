import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

// Components
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from 'material-ui';

// Css
import cls from './Job.css';


moment.locale('es');
const job = props => {
  let services = null;
  if (props.job_details) {
    services = props.job_details.map(detail => (
      detail.service.name
    ));
  }
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card>
        <CardContent className={cls.Card}>
          <Grid container>
            <Grid className={cls.CardDate} item xs={12}>
              <Typography className={cls.CardDateTypo} color="textSecondary">
                {moment(props.date).format('MMMM D YYYY, h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())}
              </Typography>
            </Grid>
            <Grid className={cls.CardSubTitle} item xs={12}>
              <Typography>
                Servicios:
              </Typography>
            </Grid>
            <Grid className={cls.CardSubTitle} item xs={12}>
              <Typography className={cls.CardParragraph}>
                {services}
              </Typography>
            </Grid>
            <Grid className={cls.CardSubTitle} item xs={12}>
              <Typography>
                Direcion:
              </Typography>
            </Grid>
            <Grid className={cls.CardSubTitle} item xs={12}>
              <Typography className={cls.CardParragraph}>
                San Ignacio, Edificio Working Up
              </Typography>
            </Grid>
            <Grid className={cls.CardSubTitle} item xs={12}>
              <Typography variant="title" className={cls.CardParragraph}>
                Total: {props.total}$ 
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default job;