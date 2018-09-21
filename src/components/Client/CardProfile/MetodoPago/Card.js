import React from 'react';

// Css
import cls from './Card.css';

const Card = (props) => {
  return (
    <div className={cls.formContainer}>
      <div className={cls.text_info}>
        <label className={cls.textCardSelect}>
          <span>{props.cardType}</span>
          <p className={cls.card_label}> Numero de tarjeta XXXX-XXXX-XXXX-{props.number}</p>
          <p className={cls.card_label}> Fecha de expiración: {props.expiryMonth}/{props.expiryYear}</p>
          <p className={cls.card_label}> Nombre: {props.holderName}</p>
        </label>
      </div>
      <div className={cls.buttonDeleteCard}>
        <a
          className={cls.lickDelete}
          onClick={() => props.deleteCard(localStorage.getItem('token'), props.id)} 
        >- Eliminar tarjeta</a>
      </div>
    </div>
  );
}

export default (Card);