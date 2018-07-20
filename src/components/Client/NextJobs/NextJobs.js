import React from 'react';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';
import Job from '../Jobs/Job/Job';

// Css
import cls from './NextJobs.css'

const nextJobs = props => {
  let jobs = (
    <Typography className={cls.Title} variant="headline">
      No hay trabajos futuros
    </Typography>
  );
  if (props.nextjobs.length > 0) {
    jobs = props.nextjobs.map(job => (
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
    <Grid container justify="center" className={cls.NextJobs}>
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={cls.Title} variant="headline">
              Proximos Trabajos
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center">
          {jobs}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default nextJobs;