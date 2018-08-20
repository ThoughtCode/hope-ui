import React from 'react';
import $ from 'jquery';

// Components
import {
  Grid,
} from 'material-ui';

import cls from './Payment.css';
const Paymentez = window.Paymentez;

const payment = (props) => {
  
  $( document ).ready(function() {
    Paymentez.init('stg', 'NOC-EC-CLIENT', 'Owo41X6qbItrAcEy7Pz9DAL7wl8gAo');
    
    var form = $("#add-card-form");
    var submitButton = form.find("button");
    var submitInitialText = submitButton.text();

    // var myCard = $('#my-card');

    // var cardNumber = myCard.PaymentezForm('cardNumber');
    // var cardType = myCard.PaymentezForm('cardType');
    // var name = myCard.PaymentezForm('name');
    // var expiryMonth = myCard.PaymentezForm('expiryMonth');
    // var expiryYear = myCard.PaymentezForm('expiryYear');
    // var cvc = myCard.PaymentezForm('cvc');
    // var fiscalNumber = myCard.PaymentezForm('fiscalNumber');
    // var validationOption = myCard.PaymentezForm('validationOption');
    
    form.submit(function(e){
      var myCard = $('#my-card');
      console.log(myCard);
      $('#messages').text("");
      var cardToSave = myCard.PaymentezForm('card');
      if(cardToSave == null){
        $('#messages').text("Invalid Card Data");
      }else{
        submitButton.attr("disabled", "disabled").text("Card Processing...");    
        
        /*
        After passing all the validations cardToSave should have the following structure:
        var cardToSave = {
                            "card": {
                              "number": "5119159076977991",
                              "holder_name": "Martin Mucito",
                              "expiry_month": 9,
                              "expiry_year": 2020,
                              "cvc": "123",
                              "type": "vi"
                            }
                          };
        */
        
        var uid = "2";
        var email = "henry2992@gmail.com";
        /* Add Card converts sensitive card data to a single-use token which you can safely pass to your server to charge the user.
        *
        * @param uid User identifier. This is the identifier you use inside your application; you will receive it in notifications.
        * @param email Email of the user initiating the purchase. Format: Valid e-mail format.
        * @param card the Card used to create this payment token
        * @param success_callback a callback to receive the token
        * @param failure_callback a callback to receive an error
        */
        Paymentez.addCard(uid, email, cardToSave, successHandler, errorHandler);
      }
      
      e.preventDefault();
    });
    
    var successHandler = function(cardResponse) {
      console.log(cardResponse.card);
      if(cardResponse.card.status === 'valid'){
        $('#messages').html('Card Successfully Added<br>'+
                      'status: ' + cardResponse.card.status + '<br>' +
                      "Card Token: " + cardResponse.card.token + "<br>" +
                      "transaction_reference: " + cardResponse.card.transaction_reference
                    );    
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
      submitButton.removeAttr("disabled");
      submitButton.text(submitInitialText);
    };
    
    var errorHandler = function(err) {    
      console.log(err.error);
      $('#messages').html(err.error.type);    
      submitButton.removeAttr("disabled");
      submitButton.text(submitInitialText);
    };
  });

  return (
    <Grid container>
      <div className={cls.BookingForm}>
        <Grid container>
          <form className={cls.Form} id="add-card-form">
            <div class="paymentez-form" id="my-card" data-capture-name="true"></div>
            <button className={cls.btn}>Pagar</button>
            <br/>
            <div id="messages"></div>
          </form>
        </Grid>
      </div>
    </Grid>
  );
};

export default payment;