// Dependencias
import React, { Component } from 'react';

// Componentes
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import {AppBar, Grid, Paper} from 'material-ui';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import cls from './MainJobClient.css';
import JobFutures from '../CardJobClient/JobFuturesClient';
import JobPast from '../CardJobClient/JobPastClient';
import TabContainer from '../../../components/Client/TabContainer/TabContainer';

const styles = theme => ({
  root: {
    width: 'auto',
    position: 'relative',
    minHeight: 200,
    backgroundColor: '#f9f9f9',
  },
  indicator: {
    backgroundColor: '#0069a7',
  },
});

class MainJobClient extends Component {
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
    return (
      <div className={classes.root}>
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
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            <JobFutures futureJob={this.props.futureJobsMain} />
          </div>
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            <JobPast jobPast={this.props.jobsPast} />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(MainJobClient);