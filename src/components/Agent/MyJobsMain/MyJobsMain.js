// Dependencias
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Typography from 'material-ui/Typography';

// Componentes
import cls from './MainMisTrabajos.css';
import JobCurrent from '../CardJob/JobCurrent';
import JobCompleted from '../CardJob/JobCompleted';
import JobPostulated from '../CardJob/JobPostulated';

function TabContainer(props) {
  const { children, dir } = props;
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  indicator: {
    backgroundColor: '#0069a7',
  },
});

class MyJobsMain extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes, theme } = this.props;
    let jobs = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>
        <p>No tienes trabajos actuales</p><br/><p>Aplica trabajos y aumenta tus ingresos</p>
      </Typography>
    );
    if (this.props.jobs.length > 0) {
      jobs = this.props.jobs.map(job => (
        <TabContainer key={job.id} dir={theme.direction}>
          <JobCurrent job={job}/>
        </TabContainer>
      ));
    }
    let jobsCompleted = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>
        <p>No tienes trabajos completados</p><br/><p>Aplica trabajos y aumenta tus ingresos</p>
      </Typography>
    );
    if (this.props.jobsCompleted.length > 0) {
      jobsCompleted = this.props.jobsCompleted.map(job => (
        <TabContainer key={job.id} dir={theme.direction}>
          <JobCompleted
            job={job} />
        </TabContainer>
      ));
    }
    let jobsPostulated = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>
        <p>No te has postulado a ningun trabajo</p><br/><p>Aplica trabajos y aumenta tus ingresos</p>
      </Typography>
    );
    if (this.props.jobsPostulated.length > 0) {
      jobsPostulated = this.props.jobsPostulated.map(job => (
        <TabContainer key={job.id} dir={theme.direction}>
          <JobPostulated
            job={job} />
        </TabContainer>
      ));
    }
    return (
      <div className={cls.root}>
        <AppBar position="static" className={cls.AppBar} elevation={0}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              indicator: classes.indicator
            }}
            fullWidth
          >
            <Tab label={<span style={{
                                      backgroundColor: 'transparent',
                                      color: '#0069a7',
                                      fontWeight: '700',
                                      fontSize: '16px',
                                      textTransform: 'initial',
                                    }}>Actuales</span>} />
            <Tab label={<span style={{
                                      backgroundColor: 'transparent',
                                      color: '#0069a7',
                                      fontWeight: '700',
                                      fontSize: '16px',
                                      textTransform: 'initial',
                                    }}>Completados</span>} />
            <Tab label={<span style={{
                                      backgroundColor: 'transparent',
                                      color: '#0069a7',
                                      fontWeight: '700',
                                      fontSize: '16px',
                                      textTransform: 'initial',
                                    }}>Postulados</span>} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            {jobs} 
          </div>
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            {jobsCompleted}
          </div>
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            {jobsPostulated}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyJobsMain);