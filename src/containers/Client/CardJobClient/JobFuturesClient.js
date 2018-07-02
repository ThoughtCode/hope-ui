// Dependencias
import React from 'react';
import { withStyles } from 'material-ui/styles';
import {Grid, Paper, Typography} from 'material-ui';
import PropTypes from 'prop-types';

// Css
import cls from './CardJobClient.css';

// Component
import CardJobFutures from './CardJobFutures';

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 1,
    },
});

function CardJob(props) {
  const { classes } = props;

  let jobs = (
    <Typography className={cls.Title} variant="headline">
      No hay trabajos futuros
    </Typography>
  );
  if (props.futureJob.length > 0) {
    jobs = props.futureJob.map(job => (
      <CardJobFutures
        key={job.id}
        id={job.id}
        date={job.attributes.started_at}
        total={job.attributes.total}
        job_details={job.attributes.job_details}
        property={job.attributes.property}
        agent={job.attributes.agent}
        frequency={job.attributes.frequency}
        avatar={job.attributes.customer.avatar.url}
        first_name={job.attributes.customer.first_name}
        last_name={job.attributes.customer.last_name}
      />
    ));
  };
  console.log(props.futureJob)
  return (
    <div className={cls.root}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper} elevation={0}>
            <div className={cls.Card}>{jobs}</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CardJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (CardJob);