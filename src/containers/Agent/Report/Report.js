// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Table from './Table';
// import MyJobsMain from '../../../components/Agent/MyJobsMain/MyJobsMain';
// import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Report.css';

import * as actions from '../../../store/actions';

class Report extends Component {
  state = {
    filter: {
      date_from: moment().startOf('week').format(),
      date_to: moment().endOf('week').format(),
      current_page: 1,
      active: false,
    },
  };
  componentDidMount() {
    this.props.onFetchJobAgentReport(localStorage.getItem('token'), this.state.filter);
    this.props.onFetchUser(localStorage.getItem('token'));
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
  weekBack = () => {
    var date = moment(this.state.filter.date_from).subtract(3, 'days')
    this.setState({
      filter:{
        date_from: moment(date).startOf('week'),
        date_to: moment(date).endOf('week'),
      }
    },function(){
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
      this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
    })
  };
  
  weekNext = () => {
    var date = moment(this.state.filter.date_to).add(3, 'days')
    this.setState({
      filter:{
        date_from: moment(date).startOf('week'),
        date_to: moment(date).endOf('week'),
      }
    },function(){
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
      this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
    })    
  };
  render() {
    let firstNameUser = null;
    let lastNameUser = null;
    let jobsReport = null;
    if (this.props.user.attributes){
      firstNameUser = this.props.user.attributes.first_name
      lastNameUser = this.props.user.attributes.last_name
    }
    if(this.props.reportjobs.length > 0) {
      jobsReport = this.props.reportjobs.map( jR => (
        <Table
          key={jR.id}
          id={jR.id}
          jobDetails={jR.attributes.job_details}
          total={jR.attributes.total}
          customer={jR.attributes.customer}
          // current_page={this.state.filter.current_page}
          // goNext={this.goNext}
          // goBack={this.goBack} 
        />
      ))
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
                      <div className={`${cls.ContenDateCombo} ${"row align-items-center"}`}>
                        <div className={`${cls.ArrowLeft} ${"col-sm-1"}`}>
                          <i className={`${cls.Cursor} ${"material-icons"}`} onClick={() => this.weekBack()}>keyboard_arrow_left</i>
                        </div>
                        <div className={`${cls.Date} ${"col-sm-9"}`}>
                          <p className={cls.Parrafo}>
                            {this.state.filter.date_from &&
                              moment(this.state.filter.date_from).format(' MMM D ').replace(/\b\w/g, l => l.toUpperCase())
                            } - 
                            {this.state.filter.date_from &&
                              moment(this.state.filter.date_to).format(' D YYYY').replace(/\b\w/g, l => l.toUpperCase())
                            }
                          </p>
                          <p className={cls.Icon}>
                            <i className="material-icons">event_note</i>
                          </p>
                        </div>
                        <div className={`${cls.ArrowRight} ${"col-sm-1"}`}>
                          <i className={`${cls.Cursor} ${"material-icons"}`} onClick={() => this.weekNext()}>keyboard_arrow_right</i>
                        </div>
                      </div>
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
                    <Grid item xs={6} sm={12}>
                      <table className="table table-dark">  
                        <thead>
                          <tr>
                            <th scope="col">Servicio</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Total trabajo</th>
                            <th scope="col">I.V.A</th>
                            <th scope="col">Comisión Noc Noc</th>
                            <th scope="col">TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobsReport}
                          <tr class="bg-warning">
                            <td class="bg-success">Total Semanal</td>
                            <td class="bg-success"></td>
                            <td class="bg-success"></td>
                            <td class="bg-success"></td>
                            <td class="bg-success"></td>
                            <td class="bg-success">$999.99</td>
                          </tr>
                        </tbody>
                      </table>
                    </Grid> 
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={1}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Nota:</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={11}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Reporta con nosotros tú inconveniente, si tienes alguna duda.</Typography>
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