// Dependencias
import React from 'react';

const ListCard = props => {

  let cardTypeList;
  if(props.cardType === "vi" ? (cardTypeList = "Visa"):(null))
  return(
    <div>
      <div className="text-info" scope="row">
        <input
          name="name"
          type="checkbox"
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
        />
      </div>
      <div className="text-info">
        <label>
          LLego
          <p>{cardTypeList} xxxxxxxxxxxx{props.number}</p>
          <p>{props.expiryYear}</p>
          <p>{props.holderName}</p>
        </label>
      </div>
    </div>
  );
}

export default ListCard;