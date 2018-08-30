
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

// Components
import {
  Grid,
} from 'material-ui';
import ListCard from './ListCard';

import cls from './Payment.css';

import * as actions from '../../../../../store/actions';

class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardValidatorForm: {
        number_card: {
          elementType: 'number',
          label: 'Numero de tarjeta',
          value: '',
          validation: {
            required: true,
            isCredCard: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        first_name_card: {
          elementType: 'text',
          label: 'Contraseña',
          value: '',
          validation: {
            required: true,
            isAlphabetic: true,
          },
          valid: false,
          touched: false,
        },
        expiration_card_MM: {
          elementType: 'number',
          label: 'Mes de Expedición',
          value: '',
          validation: {
            required: true,
            // isExpirationDate: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        expiration_card_YY: {
          elementType: 'number',
          label: 'Año de Expedición',
          value: '',
          validation: {
            required: true,
            // isExpirationDate: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        cvc_card: {
          elementType: 'number',
          label: 'CVC',
          value: '',
          validation: {
            required: true,
            isCVC: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
      },
      check: false,
      formIsValid: false,
      selectedOption: false,
      cardId: null,
    }

    this.handlecardChecked = this.handlecardChecked.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  

  componentDidMount() {
    this.props.onFetchUser(localStorage.getItem('token'));
    this.props.onListCard(localStorage.getItem('token'));
  };
  
  inputChangedHandler(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }
    
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = 'Requerido.';
    }
    
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser solo numerico.';
    }

    if (rules.isCredCard) {
      isValid = this.validateCCNum(value) && isValid;
      errorText = 'No es un número de tarjeta válido';
    }

    if (rules.isExpirationDate) {
      isValid = this.validateCCExpiration(value) && isValid;
      errorText = 'No es una fecha de expiración validad.';
    }

    if (rules.isCVC) {
      const pattern = /^[0-9]{3,4}$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'CVC Inválido.';
    }

    if (rules.isAlphabetic) {
      const pattern = /^[a-zA-Z ]{2,30}$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Nombre inválido';
    }

    return {
      isValid,
      errorText,
    };
  }

  handleCheckImput = () => {
    this.setState({
      check: !this.state.check,
    });
  }

  changeValidator = (event, controlName) => {
    const updatedControls = {
      ...this.state.cardValidatorForm,
      [controlName]: {
        ...this.state.cardValidatorForm[controlName],
        value: event.target.value,
        valid: this.inputChangedHandler(
          event.target.value,
          this.state.cardValidatorForm[controlName].validation,
        ).isValid,
        errorText: this.inputChangedHandler(
          event.target.value,
          this.state.cardValidatorForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      cardValidatorForm: updatedControls,
      formIsValid,
    });
  }

  validateCCNum = (ccnum) => {
    const ccCheckRegExp = /[^\d\s-]/;
    var isValid = !ccCheckRegExp.test(ccnum);
    var i;

    if (isValid) {
        var cardNumbersOnly = ccnum.replace(/[\s-]/g,"");
        var cardNumberLength = cardNumbersOnly.length;

        var arrCheckTypes = ['visa', 'mastercard', 'amex', 'discover', 'dinners', 'jcb'];
        for(i=0; i<arrCheckTypes.length; i++) {
            var lengthIsValid = false;
            var prefixIsValid = false;
            var prefixRegExp;

            switch (arrCheckTypes[i]) {
                case "mastercard":
                    lengthIsValid = (cardNumberLength === 16);
                    prefixRegExp = /^5[1-5]/;
                    break;

                case "visa":
                    lengthIsValid = (cardNumberLength === 16 || cardNumberLength === 13);
                    prefixRegExp = /^4/;
                    break;

                case "amex":
                    lengthIsValid = (cardNumberLength === 15);
                    prefixRegExp = /^3([47])/;
                    break;

                case "discover":
                    lengthIsValid = (cardNumberLength === 15 || cardNumberLength === 16);
                    prefixRegExp = /^(6011|5)/;
                    break;

                case "dinners":
                    lengthIsValid = (cardNumberLength === 14);
                    prefixRegExp = /^(300|301|302|303|304|305|36|38)/;
                    break;

                case "jcb":
                    lengthIsValid = (cardNumberLength === 15 || cardNumberLength === 16);
                    prefixRegExp = /^(2131|1800|35)/;
                    break;

                default:
                    prefixRegExp = /^$/;
            }

            prefixIsValid = prefixRegExp.test(cardNumbersOnly);
            isValid = prefixIsValid && lengthIsValid;

            // Check if we found a correct one
            if(isValid) {
                break;
            }
        }
    }

    if (!isValid) {
        return false;
    }

    // Remove all dashes for the checksum checks to eliminate negative numbers
    ccnum = ccnum.replace(/[\s-]/g,"");
    // Checksum ("Mod 10")
    // Add even digits in even length strings or odd digits in odd length strings.
    var checksum = 0;
    for (i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) {
        checksum += parseInt(ccnum.charAt(i - 1));
    }

    // Analyze odd digits in even length strings or even digits in odd length strings.
    for (i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
        var digit = parseInt(ccnum.charAt(i - 1)) * 2;
        if (digit < 10) {
            checksum += digit;
        } else {
            checksum += (digit - 9);
        }
    }

    return (checksum % 10) === 0;
  }
  
  validateCCExpiration = (expire) => {
    var result = true;
    if(!expire.match(/(0[1-9]|1[0-2])[/][0-9]{2}/)){
      result = false;
    } else {
      // get current year and month
      var d = new Date();
      var currentYear = d.getFullYear();
      var currentMonth = d.getMonth() + 1;
      // get parts of the expiration date
      var parts = expire.split('/');
      var year = parseInt(parts[1], 10) + 2000;
      var month = parseInt(parts[0], 10);
      // compare the dates
      if (year < currentYear || (year == currentYear && month < currentMonth)) {
        result = false;
      }
    }
    return result;
  }

  paymentHandle = (event) => {
    event.preventDefault();
    var saved_props = this.props;
    window.Paymentez.init('stg', 'NOC-EC-CLIENT', 'Owo41X6qbItrAcEy7Pz9DAL7wl8gAo');
    var form = $("#add-card-form");
    var submitButton = form.find("button");
    var submitInitialText = submitButton.text();

    var number = this.state.cardValidatorForm.number_card.value
    var holder_name = this.state.cardValidatorForm.first_name_card.value
    var expiry_month = parseInt(this.state.cardValidatorForm.expiration_card_MM.value)
    var expiry_year = parseInt(this.state.cardValidatorForm.expiration_card_YY.value)
    var cvc = this.state.cardValidatorForm.cvc_card.value

    var cardToSave = {
                        "card": {
                          "number": number,
                          "holder_name": holder_name,
                          "expiry_month": expiry_month,
                          "expiry_year": expiry_year,
                          "cvc": cvc,
                          "type": "vi"
                        }
                      };
    var successHandler = function(cardResponse) {
        if(cardResponse.card.status === 'valid'){
          $('#messages').html('Card Successfully Added<br>'+
                        'status: ' + cardResponse.card.status + '<br>' +
                        "Card Token: " + cardResponse.card.token + "<br>" +
                        "transaction_reference: " + cardResponse.card.transaction_reference
                      );
                      var c_type = cardResponse.card.type
                      var c_number = cardResponse.card.number
                      var c_token = cardResponse.card.token
                      var c_status = cardResponse.card.status
                      var c_em = cardResponse.card.expiry_month
                      var c_ey = cardResponse.card.expiry_year
          saved_props.onPaymentAddCard(localStorage.getItem('token'),  holder_name, c_type, c_number, c_token, c_status, c_em, c_ey);
          saved_props.nextPage(event, 'Payment')
        }else if(cardResponse.card.status === 'review'){
          $('#messages').html('Card Under Review<br>'+
                        'status: ' + cardResponse.card.status + '<br>' +
                        "Card Token: " + cardResponse.card.token + "<br>" +
                        "transaction_reference: " + cardResponse.card.transaction_reference
                      ); 
        }else{
          $('#messages').html('Error<br>'+
                        'status: ' + cardResponse.card.status + '<br>' +
                        "message Token: " + cardResponse.card.message + "<br>"
                      ); 
        }
      };
    var errorHandler = function(err) {   
      console.log('hubo un error') 
      console.log(err.error);
      $('#messages').html(err.error.type);  
    };
    var email = null;
    if(this.props.user.attributes){
      email=this.props.user.attributes.email
    }
    window.Paymentez.addCard(this.props.user.id, email, cardToSave, successHandler, errorHandler);
  }

  handlecardChecked = (event, id) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
  
    this.setState({
      cardId: id,
      selectedOption: value,
    })

    console.log(this.state)
  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    let id = this.state.selectedOption;

    console.log(this.state);
    console.log(id);
  }

  render() {
    let validadData = null;
    let creditForm;
    let creditCard;
    if(this.props.listCard.data != undefined){
      if (this.props.listCard.data.length > 0) {
        validadData = this.props.listCard.data.length
        creditForm = this.props.listCard.data.map(d => {
          return(
            <div>
              <div className="text-info" scope="row">
                <input
                  name="cardId"
                  type="radio"
                  checked={this.state.selectedOption === d.id}
                  onClick={(event) => this.handlecardChecked(event, d.id)}
                  value={d.id}
                />
              </div>
              <div className="text-info">
                <label>
                  <p>{d.id}</p>
                  <p>{d.attributes.card_type} xxxxxxxxxxxx{d.attributes.number}</p>
                  <p>{d.attributes.expiry_year}</p>
                  <p>{d.attributes.holder_name}</p>
                </label>
              </div>
            </div>
          )
          }
        )
      }
    }
    const { props } = this.props;
    return (
      <Grid container>
        <div className={cls.BookingForm}>
          <Grid container>
            <form className={cls.Form}>
              <div className={cls.ContentWrapper}>
                <div className={cls.ServiceSection}>
                  <Grid container>
                    <div className={cls.Row}>
                      <div>
                      <span onClick={(event) => this.props.backPage(event, 'Payment')} className={cls.ButtonBack}>{'<<'} Volver</span>
                        <h3 className={cls.SubHeaderText}>
                          <span>Ingresa tu forma de Pago</span>
                        </h3>
                      </div>
                    </div>
                      {validadData <= 0 && validadData != null ? (
                        <div>
                          <div className={cls.Row}>
                            <Grid container>
                              <div className={cls.MarginBottom}>
                                <Grid container>
                                  <Grid item xs={12} sm={12} md={12} lg={6}>
                                    <Grid container>
                                      <div className={cls.Columns}>
                                        <Grid container>
                                          <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <label>Número de Tarjeta de Credito</label>
                                            <div className={cls.Relative}>
                                              <div className={cls.CardNumber}>
                                                <input
                                                  className={cls.Input}
                                                  value={this.state.cardValidatorForm.number_card.value}
                                                  onChange={(event) => this.changeValidator(event, 'number_card')}
                                                />
                                                {!this.state.cardValidatorForm.number_card.valid && this.state.cardValidatorForm.number_card.touched ? (
                                                  <div className={cls.ErrorText}>
                                                    {this.state.cardValidatorForm.number_card.errorText}
                                                  </div>
                                                ) : null}
                                              </div>
                                            </div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={12} sm={12} md={12} lg={6}>
                                    <Grid container>
                                      <div className={cls.ColumnsIcon}>
                                        <Grid container>
                                          <img 
                                            alt="Credit Cards" 
                                            className={cls.CreditCardIcon} 
                                            src="https://cache.hbfiles.com/assets/miscellaneous/payment-strip-f751680936dec11c6599aacdd9dbfa9b.png"/>
                                        </Grid>
                                      </div>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                          </div>
                          <div className={cls.Row}>
                            <div className={cls.MarginBottom}>
                              <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                  <Grid container>
                                    <div className={cls.Columns}>
                                      <label>Nombre de la tarjeta de credito</label>
                                      <div className={cls.Relative}>
                                        <div className={cls.CardName}>
                                          <input
                                            className={cls.Input}
                                            value={this.state.cardValidatorForm.first_name_card.value}
                                            onChange={(event) => this.changeValidator(event, 'first_name_card')}
                                          />
                                          {!this.state.cardValidatorForm.first_name_card.valid && this.state.cardValidatorForm.first_name_card.touched ? (
                                            <div className={cls.ErrorText}>
                                              {this.state.cardValidatorForm.first_name_card.errorText}
                                            </div>
                                          ) : null}
                                        </div>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                          <div className={cls.Row}>
                            <div className={cls.MarginBottom}>
                              <Grid container>
                                <Grid item xs={6} sm={6} md={6} lg={3}>
                                  <Grid container>
                                    <div className={cls.Columns}>
                                      <label>Expiracion</label>
                                      <div className={cls.Relative}>
                                        <div className={cls.CardNumber}>
                                          <input
                                            className={cls.InputSmall}
                                            value={this.state.cardValidatorForm.expiration_card_MM.value}
                                            onChange={(event) => this.changeValidator(event, 'expiration_card_MM')}
                                            placeholder="MM"
                                          />
                                          {!this.state.cardValidatorForm.expiration_card_MM.valid && this.state.cardValidatorForm.expiration_card_MM.touched ? (
                                            <div className={cls.ErrorText}>
                                              {this.state.cardValidatorForm.expiration_card_MM.errorText}
                                            </div>
                                          ) : null}
                                          <input
                                            className={cls.InputSmall}
                                            value={this.state.cardValidatorForm.expiration_card_YY.value}
                                            onChange={(event) => this.changeValidator(event, 'expiration_card_YY')}
                                            placeholder="YYYY"
                                          />
                                          {!this.state.cardValidatorForm.expiration_card_YY.valid && this.state.cardValidatorForm.expiration_card_YY.touched ? (
                                            <div className={cls.ErrorText}>
                                              {this.state.cardValidatorForm.expiration_card_YY.errorText}
                                            </div>
                                          ) : null}                                    
                                        </div>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={3}>
                                  <Grid container>
                                    <div>
                                      <label>CVC</label>
                                      <div className={cls.Relative}>
                                        <div className={cls.CardNumber}>
                                          <input
                                            className={cls.InputSmall}
                                            value={this.state.cardValidatorForm.cvc_card.value}
                                            onChange={(event) => this.changeValidator(event, 'cvc_card')}
                                            placeholder="989"
                                          />
                                          {!this.state.cardValidatorForm.cvc_card.valid && this.state.cardValidatorForm.cvc_card.touched ? (
                                            <div className={cls.ErrorText}>
                                              {this.state.cardValidatorForm.cvc_card.errorText}
                                            </div>
                                          ) : null}
                                        </div>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>
                            <div className={cls.ButtonBooking}>
                              <Grid container>
                                <div className={cls.Row}>
                                  <button 
                                    onClick={(event) => this.paymentHandle(event)}
                                    className={cls.ButtonBookingCore}
                                  >Pagar</button>
                                </div>
                              </Grid>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <form onSubmit={this.handleFormSubmit}>
                            {creditForm}
                            {/* <div className={cls.ButtonBooking}>
                              <Grid container>
                                <div className={cls.Row}>
                                  <button 
                                    onClick={(event) => this.props.nextPage(event, 'Payment')}
                                    className={cls.ButtonBookingCore}
                                  >Seleccionar tarjeta</button>
                                </div>
                              </Grid>
                            </div> */}
                            <input value="Submit" type='submit'>Escoger Tarjeta</input>
                          </form>
                        </div>
                      )}
                  </Grid>
                </div>  
              </div>
            </form>
          </Grid>
        </div>
      </Grid>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onFetchUser: (token) => dispatch(actions.fetchCurrentUser(token)),
  onListCard: (token) => dispatch(actions.listCard(token)),
  onPaymentAddCard: (token, holder_name, c_type, c_number, c_token, c_status, c_em, c_ey) => dispatch(actions.paymentAddCard(token, holder_name, c_type, c_number, c_token, c_status, c_em, c_ey)),
});

const mapStateToProps = state => ({
  user: state.user.user,
  paymenData: state.paymenData.paymenData,
  listCard: state.listCard.listCard,
});

export default connect(mapStateToProps, mapDispatchToProps) (Payment);