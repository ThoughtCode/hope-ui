import React from 'react';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';

// Css
import cls from './HowWorks.css';

const howWorks = props => {
  return (
    <div>
      <Grid container className={cls.HowWorks}>
        <Grid item xs={12}>
          <Typography variant="headline" component="h2">
            Como Funciona
          </Typography>
        </Grid>
        <Grid className={cls.Steps} item xs={12}>
          <Typography variant="subheading" component="h3">
            1 Lorem ipsum dolor
          </Typography>
          <Typography variant="body" component="p">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </Typography>
        </Grid>
        <Grid className={cls.Steps} item xs={12}>
          <Typography variant="subheading" component="h3">
            2 Lorem ipsum dolor
          </Typography>
          <Typography variant="body" component="p">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </Typography>
        </Grid>
        <Grid className={cls.Steps} item xs={12}>
          <Typography variant="subheading" component="h3">
            3 Lorem ipsum dolor
          </Typography>
          <Typography variant="body" component="p">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default howWorks;