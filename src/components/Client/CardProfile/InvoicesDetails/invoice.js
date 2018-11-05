import React from 'react';
import { connect } from 'react-redux';

import cls from './invoice.css';

import * as actions from '../../../../store/actions';

const Invoice = (props) => {
  let socialReason = props.data.social_reason;
  let identificationType = null;
  let identification = props.data.identification;
  let address = props.data.address;
  let telephone = props.data.telephone;
  if(props.data.identification_type === "consumidor_final" ) {
    identificationType = "Consumidor final"
  }else if(props.data.identification_type === "cedula") {
    identificationType = "Cédula"
  }else if(props.data.identification_type === "ruc") {
    identificationType = "RUC"
  }else{
    identificationType = "Sin tipo de identificación"
  }
  return (
    <div className={cls.centradoComment}>
      <div className={cls.Conten}>
        <p>Razón social: {socialReason}</p>
        <p>Identificación: {identificationType} {identification}</p>
        <p>Dirección: {address}</p>
        <p>Teléfono: {telephone}</p>
      </div>
      <div className={cls.deleteButton}>
        <a className={cls.LinkDelete} onClick={() => props.onDeleteInvoice(localStorage.getItem('token'), props.id)} >Borrar</a>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteInvoice: (token, id) => dispatch(actions.deleteInvoice(token, id)),
  }
}

export default connect(null, mapDispatchToProps)(Invoice);