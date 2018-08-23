// Dependencias
import React from 'react';

// Css
import cls from './Report.css';

const report = props => {
  let nameService = null;
  let customerFirstName = null;
  let customerLastName = null;
  let totalJob = null;
  let iva = null;
  let comision = null;
  let total = null;
  if(props.jobDetails){
    nameService = props.jobDetails.map( nS => {
      if(nS.service.type_service === 'base'){
        return nS.service.name
      }
      return null;
    })
  }
  if(props.customer){
    customerFirstName = props.customer.first_name
    customerLastName = props.customer.last_name
  }
  if(props.total){
    totalJob = props.total
    iva = props.total * 12 / 100
    comision = props.total * 5 / 100
    total = props.total - [iva + comision]
  }
  return(
    <tr>
      <th className="text-info" scope="row">{nameService}</th>
      <td className="text-info">{customerFirstName} {customerLastName}</td>
      <td className="text-info">{Math.trunc(totalJob)}.{Math.ceil(totalJob)}</td>
      <td className="text-info">{Math.trunc(iva)}.{Math.ceil(iva)}</td>
      <td className="text-info">{Math.trunc(comision)}.{Math.ceil(comision)}</td>
      <td className="text-info">{Math.trunc(total)}.{Math.ceil(total)}</td>
    </tr>
  );
}

export default report