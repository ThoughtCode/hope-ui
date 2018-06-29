// Dependencias
import React, { Component } from 'react';

// Componentes
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
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
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Futuros" />
            <Tab label="Pasados" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <JobFutures />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <JobPast />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(MainJobClient);