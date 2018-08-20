// Dependencias
import React, { Component } from 'react';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Css
import cls from './Report.css';

class Report extends Component {
  render() {
    let firstNameUserCurrent = null;
    let lastNameUserCurrent = null;
    let rjd = null;
    let serviceName = null;
    let detailsJob = null;
    let type = null;
    let fncj = null;
    let lncj = null;
    let tncj = null;
    let tiva = null;
    let ctnoc = null;
    let tg = null;
    let tr = [];
    if(this.props.userCurrent){
      firstNameUserCurrent = this.props.userCurrent.first_name
      lastNameUserCurrent = this.props.userCurrent.last_name
    };
    if(this.props.reportjobs.length > 0 ){
      this.props.reportjobs.map( detail => {
        tncj = detail.attributes.total
        tiva = [detail.attributes.total * 12 / 100]
        ctnoc = [detail.attributes.total * 5 / 100]
        tg = [detail.attributes.total * -17 / 100 + detail.attributes.total]
        fncj = detail.attributes.customer.first_name
        lncj = detail.attributes.customer.last_name
        detailsJob = detail.attributes.job_details
        if(detailsJob.length > 0 ){
          // serviceName = 
          // <ul>
            // {
            detailsJob.forEach( type => {
              if (type.service.type_service === 'base') {
                // console.log(type)
                serviceName = type.service.name
                // return (
                //   <li key={type.id}>{type.service.name}</li>
                // )
              };
              return null;
            })
          // </ul>
        }
        tr =  
        <tr key={detail.id}>
          <td className="text-info" scope="row">{serviceName}</td>
          <td className="text-info">{fncj} {lncj}</td>
          <td className="text-info">${tncj}</td>
          <td className="text-info">${tiva}</td>
          <td className="text-info">${ctnoc}</td>
          <td>${tg}</td>
        </tr>
      })
      // props.job.attributes.job_details.forEach(j => {
      //   if (j.service.type_service === 'base') {
      //     service_base = j.service.name;
      //   };
      // });
      // services_addon = 
      // <ul className={cls.Ul}>
      //   {this.props.jobDetails.attributes.job_details.map( detail => {
      //     if (detail.service.type_service === 'addon') {
      //       return (
      //         <li className={cls.Li} key={detail.id}>{detail.service.name}</li>
      //       );
      //     }
      //     return null;
      //   })}
      // </ul>
    }
    return (
      <div className={cls.Table}>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Cliente</th>
              <th scope="col">Total trabajo</th>
              <th scope="col">I.V.A</th>
              <th scope="col">Comicion Noc Noc</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {tr}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Report;