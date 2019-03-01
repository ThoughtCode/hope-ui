import React, { Component } from 'react';
import { connect } from 'react-redux';
import Invoice from './invoice'

// Components
import {
  Grid,
} from 'material-ui';
import Form from './Form';

// Css
import cls from './InvoicesDetails.css';

import * as actions from '../../../../store/actions';

var _updated = false;

class InvoicesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm: true,
      invoiceDetails: [],
      invoicesUpdated: false,
      editForm: false,
      invoiceSelected: null
    };
    this.handlerOpenForm = this.handlerOpenForm.bind(this);
    this.handlerClose = this.handlerClose.bind(this);
  }

  componentDidMount () {
    _updated = false;
    this.props.onInvoices(localStorage.getItem('token'));
  }

  componentDidUpdate() {
    if (this.props.invoices && this.state.invoicesUpdated == false) {
      let invoice_details = this.props.invoices
      this.setState({
        ...this.state,
        invoiceDetails: invoice_details,
        invoicesUpdated: true,
      })
    }
  }

  handlerOpenForm = () => {
    this.setState({
      ...this.state,
      openForm: false,
      editForm: false
    })
  }

  handlerClose = () => {
    this.setState({
      ...this.state,
      openForm: true,
      editForm: false
    })
  }

  deleteInvoiceDetail = (id) => {
    this.props.onDeleteInvoice(localStorage.getItem('token'), id)
    this.setState(
      {
        invoiceDetails: this.state.invoiceDetails.filter(function(invoiceDetails)
        {
          return invoiceDetails.id !== id
        }
      )}
    );
  }

  editInvoiceDetail = (data) => {
    this.setState ({
      editForm: true,
      openForm: false,
      invoiceSelected: data
    });
  }

  handleSubmitData = (e, invoiceChanged) => {
    e.preventDefault();

    const invoice_detail = {
      invoice_detail: invoiceChanged.attributes,
    }

    if (this.state.editForm) {
      var invoiceChangedIndex = this.state.invoiceDetails.findIndex(x => x.id === invoiceChanged.id);
      var newInvoiceDetails = this.state.invoiceDetails;
      newInvoiceDetails[invoiceChangedIndex] = invoiceChanged;

      this.setState({
        invoiceDetails: newInvoiceDetails,
      });
      this.props.onUpdateInvoice(localStorage.getItem('token'), invoice_detail, invoiceChanged.id);
    }else {
      this.props.onCreatedInvoice(localStorage.getItem('token'), invoice_detail);
    }

    this.handlerClose();
  }

  render () {
    let formReg = null;
    if (!this.state.openForm) {
      formReg = (
        <Form
          handlerClose={this.handlerClose}
          invoiceSelected={this.state.editForm ? this.state.invoiceSelected : null}
          handleSubmitData={this.handleSubmitData}
        />
      )
    } else if (this.state.invoiceDetails.length > 0 && this.state.openForm) {
      formReg = (
        <Grid container>
          {Object.keys(this.state.invoiceDetails).length > 0 ?
            this.state.invoiceDetails.map(i => (
              <Invoice
                key={i.id}
                id={i.id}
                data={i.attributes}
                object={i}
                deleteInvoice={this.deleteInvoiceDetail}
                editInvoice={this.editInvoiceDetail}
              />
          )) : (
            <h2><strong>No tienes datos para tú factura</strong></h2>
          )}
        </Grid>
      )
    }
    return (
      <div className={cls.Div}>
        {this.props.invoices.length > 0 && this.state.openForm ? (
          <button className={cls.ButtonEdit} onClick={this.handlerOpenForm}><span>Nuevo</span></button>
        ):('')}
        <h3 className={cls.CardTitle}><span>Detalles de facturación</span></h3>
        <Grid className={cls.CardPrincipalAccount} container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={cls.Container}>
              {formReg}
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    invoices: state.service.invoices,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInvoices: (token) => dispatch(actions.invoices(token)),
    onCreatedInvoice: (token, formDataInvoice) => dispatch(actions.createdInvoice(token, formDataInvoice)),
    onDeleteInvoice: (token, id) => dispatch(actions.deleteInvoice(token, id)),
    onUpdateInvoice: (token, formDataInvoice, id) => dispatch(actions.updateInvoice(token, formDataInvoice, id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesDetails);
