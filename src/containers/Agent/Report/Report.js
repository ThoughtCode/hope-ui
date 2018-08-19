// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Table from './Table';
import DatetimeReport from './DatetimeReport';
// import MyJobsMain from '../../../components/Agent/MyJobsMain/MyJobsMain';
// import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Report.css';

import * as actions from '../../../store/actions';

class Report extends Component {
  state = {
    filter: {
      date_from: null,
      date_to: null,
      current_page: 1,
      active: false,
    },
  };
  componentDidMount() {
    let filter = {};
    filter.date_from = null;
    filter.date_to = null;
    filter.current_page = this.state.filter.current_page;
    this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
    this.props.onFetchUser(localStorage.getItem('token'));
  };
  filterHandler = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        active: true,
      }
    });
    let filter = {};
    if (this.state.filter.date_from !== null) {
      filter.date_from = moment(this.state.filter.date_from).format();
    } else {
      filter.date_from = null;
    }
    if (this.state.filter.date_to !== null) {
      filter.date_to = moment(this.state.filter.date_to).format();
    } else {
      filter.date_to = null;
    }
    filter.current_page = this.state.filter.current_page;
    this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
  };
  handleChange = (event, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: event.target.value,
      },
    });
  };
  changeDatetimeHandler = (dateTime, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: moment(dateTime).format(),
      }
    })
  };
  goNext = () => {
    if (this.state.filter.current_page === parseInt(this.props.total_pages, 10)) {
 
    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page: this.state.filter.current_page + 1,
        }
      });
      if (this.state.filter.active) {
        let filter = {};
        filter.date_from = moment(this.state.filter.date_from).format();
        filter.date_to = moment(this.state.filter.date_to).format();
        this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
      } else {
        let filter = {};
        filter.date_from = null;
        filter.date_to = null;
        filter.current_page = this.state.filter.current_page + 1;
        this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
      }
    }
  };
  goBack = () => {
    if (this.state.filter.current_page === 1) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page: this.state.filter.current_page - 1,
        }
      });
    }
    if (this.state.filter.active) {
      let filter = {};
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.date_from = null;
      filter.date_to = null;
      filter.current_page = this.state.filter.current_page - 1;
      this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
    }
  };
  render() {
    let firstNameUser = null;
    let lastNameUser = null;
    if (this.props.user.attributes){
      firstNameUser = this.props.user.attributes.first_name
      lastNameUser = this.props.user.attributes.last_name
    }
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10} md={8}>
            <Paper elevation={0}>
              <Typography variant="title" gutterBottom className={cls.Typogra}>Reporte</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper elevation={0}>
              <Grid container alignItems="center">
                <Grid item>
                  <Paper className={cls.ContenDatetime} elevation={0}>
                    <Grid item xs={6} sm={12} className={cls.ContenDate}>
                      <Typography variant="title" gutterBottom>Semana</Typography>
                    </Grid>  
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={cls.ContenDatetime} elevation={0}>
                    <Grid item xs={6} sm={12} className={cls.ContenDate}>                    
                      <DatetimeReport
                        filter={this.state.filter}
                        filterHandler={this.filterHandler}
                        handleChange={this.handleChange}
                        changeDatetimeHandler={this.changeDatetimeHandler}
                      />
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Grid container>
              <Grid item xs={6} sm={12}>
                <Paper elevation={0}>
                  <Grid container>
                    <Grid item xs={6} sm={2}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Usuario</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={10}>                    
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>{firstNameUser} {lastNameUser}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={2}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Periodo</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={10}>                    
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>
                        {moment().format('MMMM D YYYY h:mm a').replace(/\b\w/g, l => l.toUpperCase())}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={12}>
                      <Table
                        userCurrent={this.props.user.attributes}
                        reportjobs={this.props.reportjobs}
                        total_pages={this.props.total_pages}
                        current_page={this.state.filter.current_page}
                        goNext={this.goNext}
                        goBack={this.goBack} 
                      />
                    </Grid> 
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={1}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Nota:</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={11}>                    
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Los reportes se actualizan cada hora.</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchUser: (token) => dispatch(actions.fetchCurrentAgent(token)),
  onFetchJobAgentReport: (token, filter) => dispatch(actions.fetchJobAgentReport(token, filter)),
});

const mapStateToProps = state => ({
  user: state.user.user,
  reportjobs: state.job.reportjobs,
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);