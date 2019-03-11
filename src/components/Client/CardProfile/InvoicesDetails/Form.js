import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './InvoicesDetails.css';

var _updated = false;
var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var telephone_pattern = /^\d+$/;
var identification_length = 10;

class Form extends Component {
  constructor (props){
    super(props);
    this.state = {
      id: null,
      attributes: {
        address: '',
        email: '',
        identification: '',
        identification_type: '',
        social_reason: '',
        telephone: '',
      },
      emailErrorText: '',
      idErrorText: '',
      addressErrorText: '',
      srErrorText: '',
      telephoneErrorText: '',
      emailCheck: true,
      idCheck: true,
      addressCheck: true,
      srCheck: true,
      telephoneCheck: true,
      is_disabled: true,
      identification_length: 10,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount (){
    if (this.props.invoiceSelected !== undefined && this.props.invoiceSelected !== null) {
      this.setState({
        id: this.props.invoiceSelected.id || null,
        attributes: {
          address: this.props.invoiceSelected.attributes.address || "",
          email: this.props.invoiceSelected.attributes.email || "",
          identification: this.props.invoiceSelected.attributes.identification || "",
          identification_type: this.props.invoiceSelected.attributes.identification_type || "",
          social_reason: this.props.invoiceSelected.attributes.social_reason || "",
          telephone: this.props.invoiceSelected.attributes.telephone || "",
        },
        identification_length: this.props.invoiceSelected.attributes.identification.length || 10,
      });
    }
    this.validateData();
  }

  validateData = () => {
    var validations = {};

    if (!pattern.test(this.state.attributes.email)){
      validations["emailErrorText"] = "Debe ser un email valido";
      validations["emailCheck"] = true;
    }else{
      validations["emailErrorText"] = "";
      validations["emailCheck"] = false;
    }

    switch (this.state.attributes.identification_type) {
      case 'ruc':
        identification_length = 13;
          validations["identification_length"] = identification_length;
        break;
      case 'consumidor_final':
        validations["attributes"] = {
          ...this.state.attributes,
          identification: "9999999999",
        };
        validations["identification_length"] = identification_length;
        break;
      default:
        validations["identification_length"] = identification_length;
    }
    if (this.state.attributes.identification_type == "consumidor_final") {
      validations["idErrorText"] = "";
      validations["idCheck"] = false;
    }else{
      if (this.state.attributes.identification.length == identification_length) {
        validations["idErrorText"] = '';
        validations["idCheck"] = false
      }else{
        validations["idErrorText"] = `Longitud debe ser igual a ${identification_length}`;
        validations["idCheck"] = true;
      }
    }

    if (this.state.attributes.address.length === 0) {
      validations["addressErrorText"] = "Campo requerido";
      validations["addressCheck"] = true;
    }else{
      validations["addressErrorText"] = "";
      validations["addressCheck"] = false;
    }

    if (!telephone_pattern.test(this.state.attributes.telephone)){
        validations["telephoneErrorText"] = 'Deben ser solo numeros.';
        validations["telephoneCheck"] = true;
    } else if (this.state.attributes.telephone.length != 10){
      validations["telephoneErrorText"] = "Longitud debe ser igual a 10";
      validations["telephoneCheck"] = true;
    }else{
      validations["telephoneErrorText"] = "";
      validations["telephoneCheck"] = false;
    }

    if (this.state.attributes.social_reason.length === 0) {
      validations["srErrorText"] = "Campo requerido";
      validations["srCheck"] = true;
    }else{
      validations["srErrorText"] = "";
      validations["srCheck"] = false;
    }

    var inputsChecked = validations["emailCheck"] || validations["idCheck"] || validations["addressCheck"] || validations["srCheck"] || validations["telephoneCheck"]

    if (!_updated) {
      this.setState({
        ...this.state,
        ...validations,
        is_disabled: inputsChecked
      });
    }
  }
  componentDidUpdate(){
    this.validateData();
    _updated = true;
  }

  handleInputChange(event) {
    _updated = false;
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      attributes: {
        ...this.state.attributes,
        [name]: value
      }
    });
  }

  render() {
    return (
      <form>
        <div className={cls.row}>
          <div className={cls.col25}>
            <label for="address">Dirección:</label>
          </div>
          <input className={cls.Input} name="address" value={this.state.attributes.address} onChange={this.handleInputChange} type=""/>
          <p className={cls.ErrorText}>{this.state.addressErrorText}</p>
        </div>
        <div className={cls.row}>
          <div className={cls.col25}>
            <label for="email">Email:</label>
          </div>
          <input className={cls.Input} name="email" value={this.state.attributes.email} onChange={this.handleInputChange} type=""/>
          <p className={cls.ErrorText}>{this.state.emailErrorText}</p>
        </div>
        <div className={cls.row}>
          <div className={cls.col25}>
            <label for="identification_type">Tipo de identificación:</label>
          </div>
          <div className={`${cls.col25} ${cls.fixNoPadding}`}>
            <select className={cls.Select} value={this.state.attributes.identification_type} onChange={this.handleInputChange} name="identification_type">
              <option value="cedula">Cédula</option>
              <option value="ruc">Ruc</option>
              <option value="consumidor_final">Consumidor final</option>
            </select>
          </div>
        </div>
        <div className={cls.row}>
          <div className={cls.col25}>
            <label for="identification">Identificación:</label>
          </div>
          <input className={cls.Input} name="identification" value={this.state.attributes.identification} onChange={this.handleInputChange} type=""/>
          <p className={cls.ErrorText}>{this.state.idErrorText}</p>
        </div>
        <div className={cls.row}>
          <div className={cls.col25}>
            <label for="telephone">Número celular:</label>
          </div>
          <input className={cls.Input} name="telephone" value={this.state.attributes.telephone} onChange={this.handleInputChange} type=""/>
          <p className={cls.ErrorText}>{this.state.telephoneErrorText}</p>
        </div>
        <div className={cls.row}>
          <div className={cls.col25}>
            <label for="social_reason">Razón social:</label>
          </div>
          <input className={cls.Input} name="social_reason" onChange={this.handleInputChange} value={this.state.attributes.social_reason} type=""/>
          <p className={cls.ErrorText}>{this.state.srErrorText}</p>
        </div>
        <button className={cls.ButtonSave} onClick={() => this.props.handlerClose()}>Cancelar</button>
        <button className={cls.ButtonSave} disabled={this.state.is_disabled} onClick={(e) => this.props.handleSubmitData(e, this.state)}>Guardar</button>
      </form>
    );
  }
}

export default Form;
