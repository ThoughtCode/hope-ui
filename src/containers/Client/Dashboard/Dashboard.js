import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Paper,
} from 'material-ui';

// Components
import Jumbotron from '../../../components/Client/Jumbotron/Jumbotron';
import Services from '../../../components/Client/Services/Services';
import NextJobs from '../../../components/Client/NextJobs/NextJobs';
import PastJobs from '../../../components/Client/PastJobs/PastJobs';
import Download from '../../../components/Home/Download/Download';
import Contact from '../../../components/Home/Contact/Contact';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Dashboard.css'

import * as actions from '../../../store/actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.onFetchServices(this.props.token);
    this.props.onFetchNextJobs(this.props.token);
    this.props.onFetchHistoryJobs(this.props.token);
  }

  showServiceClick = (id) => {
    this.props.history.push(`servicio/${id}`);
  }

  render () {
    let pastJobs = null;
    if (this.props.historyjobs) {
      if (this.props.historyjobs.length > 0) {
        pastJobs = <PastJobs historyjobs={this.props.historyjobs} />
      }
    }
    return (
      <div className={cls.Dashboard}>
        <Jumbotron />
        {this.props.loading ? (
          <Grid container className={cls.LoaderContainer}>
            <Spinner />
          </Grid>
        ) : (
          <div>
            <Services clicked={this.showServiceClick} services={this.props.services} />
            <NextJobs nextjobs={this.props.nextjobs} />
            {pastJobs}
            <Grid container justify="center">
              <Grid item xs={12} md={10} className={cls.Download}>
                <Paper elevation={0}>
                  <Download />
                </Paper>
              </Grid>
            </Grid>
          </div>
        )}
        <Contact />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    services: state.service.services,
    nextjobs: state.job.nextjobs,
    historyjobs: state.job.historyjobs,
    loading: state.service.loading || state.job.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchServices: (token) => dispatch(actions.fetchServices(token)),
    onFetchNextJobs: (token) => dispatch(actions.fetchNextJobs(token)),
    onFetchHistoryJobs: (token) => dispatch(actions.fetchHistoryJobs(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
