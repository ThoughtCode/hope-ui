import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import axios from '../../../../axios-instance';

import cls from './invoice.css';

import * as actions from '../../../../store/actions';


class Invoice extends Component {
  deleteInvoice (e, id) {
    const headers = {
      headers: {
        Authorization: `Token token=${localStorage.getItem('token')}`,
      },
    };
    axios.delete(`/customers/invoice_details/${id}`, headers)
    .then((res) => {
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      Alert.error(err.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
  }
  render () {
    let socialReason = this.props.data.social_reason;
    let identificationType = null;
    let identification = this.props.data.identification;
    let address = this.props.data.address;
    let telephone = this.props.data.telephone;
    if(this.props.data.identification_type === "consumidor_final" ) {
      identificationType = "Consumidor final"
    }else if(this.props.data.identification_type === "cedula") {
      identificationType = "Cédula"
    }else if(this.props.data.identification_type === "ruc") {
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
          <a className={cls.LinkDelete} onClick={(e) => this.deleteInvoice(e, this.props.id)} >Borrar</a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteInvoice: (token, id) => dispatch(actions.deleteInvoice(token, id)),
  }
}

export default connect(null, mapDispatchToProps)(Invoice);