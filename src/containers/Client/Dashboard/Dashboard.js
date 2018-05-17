import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Jumbotron from '../../../components/Client/Jumbotron/Jumbotron';
import Services from '../../../components/Client/Services/Services';
import NextJobs from '../../../components/Client/NextJobs/NextJobs';
import PastJobs from '../../../components/Client/PastJobs/PastJobs';
import Download from '../../Home/Download';
import Contact from '../../Home/Contact';

// Css
import cls from './Dashboard.css'

import * as actions from '../../../store/actions';

class Dashboard extends Component {
  state = {
    jobs: [
      {
        "id": "5aeb490a483a2766d2d8b681",
        "type": "job",
        "attributes": {
          "id": 34,
          "property_id": 1,
          "started_at": "2018-05-03T21:54:21.000Z",
          "finished_at": "2018-05-04T02:54:21.000Z",
          "duration": 5,
          "total": 50,
          "status": 0,
          "job_details": [
            {
              "id": 100,
              "service_id": 2,
              "value": 1,
              "time": 2,
              "price_total": 20,
              "service": {
                  "id": 2,
                  "service_type_id": 1,
                  "type_service": "addon",
                  "name": "Limpieza de ventanas",
                  "quantity": false,
                  "time": 2,
                  "price": 20
              }
            },    
          ]
        }
      },
    ],
  }

  componentDidMount () {
    this.props.onFetchServices(this.props.token);
  }

  showServiceClick = (id) => {
    this.props.history.push(`servicio/${id}`);
  }

  render () {
    return (
      <div className={cls.Dashboard}>
        <Jumbotron />
        <Services clicked={this.showServiceClick} services={this.props.services} />
        <NextJobs jobs={this.state.jobs} />
        <PastJobs jobs={this.state.jobs} />
        <Download />
        <Contact />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    services: state.service.services
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchServices: (token) => dispatch(actions.fetchServices(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
