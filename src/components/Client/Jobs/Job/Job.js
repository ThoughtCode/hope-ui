import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

// Components
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Button,
} from 'material-ui';

// Css
import cls from './Job.css';
import Profile from './img/0.jpeg';

moment.locale('es');
const job = props => {
  let services = null;
  if (props.job_details) {
    services = props.job_details.map(detail => (
      detail.service.name
    ));
  }
  return (
    <Grid item xs={12} sm={12} md={12} lg={6}>
      <Card className={cls.CardBorder}>
        <Grid container>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Grid container>
              <Grid item xs={12}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" src={Profile}>
                    </Avatar>
                  }
                  title={<Typography className={cls.Title}>
                          Rainiero Romero
                        </Typography>}
                  subheader={<Typography className={cls.Date}>
                              {moment(props.date).format('MMMM D YYYY, h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())}
                            </Typography>}  
                />
              </Grid>
              <Grid item xs={12}>
                <CardContent className={cls.CardMarginTop}>
                  <Grid className={cls.CardSubTitle} item xs={12}>
                    <Typography className={cls.Service}>
                      {services}
                    </Typography>
                  </Grid>
                  <Grid className={cls.CardSubTitle} item xs={12}>
                    <Typography>
                      Propiedad: Working Up
                    </Typography>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} className={cls.TotalContainer}>
            <Grid container className={cls.TotalMargin}>
              <Grid className={cls.CardSubTitle} item xs={12}>
                <Typography className={cls.Total}>
                  {props.total}$
                </Typography>
              </Grid>
              <Grid container alignItems="flex-end">
                <Grid className={cls.ViewDetails} item xs={12}>
                  <Button className={cls.Button}>
                    Ver Detalles
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default job;