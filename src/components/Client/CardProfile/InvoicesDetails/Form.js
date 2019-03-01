import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './InvoicesDetails.css';

var _updated = false;

class Form extends Component {
  constructor (props){
    super(props);
    this.state = {
      id: null,
      attributes: {
        address: null,
        email: null,
        identification: null,
        identification_type: null,
        social_reason: null,
        telephone: null,
      },
      emailErrorText: null,
      idErrorText: null,
      addressErrorText: null,
      srErrorText: null,
      telephoneErrorText: null,
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
          address: this.props.invoiceSelected.attributes.address || null,
          email: this.props.invoiceSelected.attributes.email || null,
          identification: this.props.invoiceSelected.attributes.identification || null,
          identification_type: this.props.invoiceSelected.attributes.identification_type || null,
          social_reason: this.props.invoiceSelected.attributes.social_reason || null,
          telephone: this.props.invoiceSelected.attributes.telephone || null,
        },
        identification_length: this.props.invoiceSelected.attributes.identification.length || 10,
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      attributes: {
        ...this.state.attributes,
        [name]: value
      }
    });

    switch (name) {
      case 'email':
        var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        pattern.test(value) ? this.setState({emailErrorText: ''}) : this.setState({emailErrorText: 'Debe ser un email valido.'});
        break;
      case 'address':
        value == 0 ? this.setState({addressErrorText: 'Campo requerido'}) : this.setState({addressErrorText: ''});
        break;
      case 'identification_type':
        var identification_length = 10;
        if (value == 'ruc'){
          identification_length = 13;
          this.setState({
            identification_length: identification_length
          })
        } else if (value == 'consumidor_final'){
          this.setState({
            attributes: {
              ...this.state.attributes,
              identification: "9999999999",
              [name]: value
            },
            identification_length: identification_length,
          });
        }else {
          this.setState({
            identification_length: identification_length
          })
        }
        if (value == "consumidor_final") {
          this.setState({idErrorText: ''})
        }else{
          this.state.attributes.identification.length == identification_length ? this.setState({idErrorText: ''}) : this.setState({idErrorText: `Longitud debe ser igual a ${identification_length}`});
        }
        break;
      case 'identification':
        if (this.state.identification_type == "consumidor_final") {
          this.setState({idErrorText: ''})
        }else{
          value.length == this.state.identification_length ? this.setState({idErrorText: ''}) : this.setState({idErrorText: `Longitud debe ser igual a ${this.state.identification_length}`});
        }
        break;
      case 'social_reason':
        value == 0 ? this.setState({srErrorText: 'Campo requerido'}) : this.setState({srErrorText: ''});
        break;
      case 'telephone':
        var pattern = /^\d+$/;
        if (!pattern.test(value)){
          this.setState({telephoneErrorText: 'Deben ser solo numeros.'});
        } else if (value.length != 10){
          this.setState({telephoneErrorText: 'Longitud debe ser igual a 10'});
        } else {
          this.setState({telephoneErrorText: ''})
        }
        break;
    }

    this.setState({
      is_disabled: !!this.state.emailErrorText || !!this.state.idErrorText || !!this.state.addressErrorText || !!this.state.srErrorText || !!this.state.telephoneErrorText,
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
