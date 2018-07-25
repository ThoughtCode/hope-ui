import React from 'react';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';
import Job from '../Jobs/Job/Job';

// Css
import cls from './PastJobs.css';

const pastJobs = props => {
  let jobs = (
    <Typography className={cls.Title} variant="headline">
      No hay trabajos pasados
    </Typography>
  );
  if (props.historyjobs.length > 0) {
    jobs = props.historyjobs.map(job => (
      <Job
        key={job.id}
        id={job.id}
        date={job.attributes.started_at}
        total={job.attributes.total}
        job_details={job.attributes.job_details}
        property={job.attributes.property}
        agent={job.attributes.agent}/>
    ));
  };
  return (
    <Grid className={cls.PastJobs} container justify="center">
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={cls.Title} variant="headline">
              Historial de Trabajos
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={16} justify="center">
          {jobs}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default pastJobs;