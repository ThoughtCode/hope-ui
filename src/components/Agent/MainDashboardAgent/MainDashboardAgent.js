// Dependencias
import React, { Component } from 'react';

// Componentes
import Typography from 'material-ui/Typography';
import CardJob from '../../../components/Agent/CardJob/CardJob';
import cls from './MainDashboardAgent.css'

class MainDashboardAgent extends Component {
  render() {
    let jobs = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>No se encuentran trabajos</Typography>
    );
    if (this.props.jobs.length > 0) {
      jobs = this.props.jobs.map(job => (
        <CardJob
          job={job}
          apply={this.props.applyProposal}/>
      ));
    }
    return (
      <div className="container">
        <div className="services">
          <h2 className={cls.Title}>Trabajos</h2>
          <div className="row">
            {jobs}
          </div>  
        </div>
      </div>
    );
  }
}

export default MainDashboardAgent;