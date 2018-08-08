import React from 'react';

import cls from './CancelBookingModal.css';

const cancelBookingModal = (props) => {
  let descriptionTime = null;
  let valueTime = null;
  let descriptionRode = null;
  let valueRode = null;
  if(props.config.map(config => {
    if(config.id === 1){
      descriptionTime = config.description
      valueTime = config.value
    }
    if(config.id === 2){
      descriptionRode = config.description
      valueRode = config.value
    }
  }))
  return (
    <div className={cls.CancelBookingModal}>
      <div>
        <h2>Aviso de penalizacion</h2>
      </div>
      <div>
        <p>{descriptionTime} "{valueTime} Horas" {descriptionRode} {valueRode} por cargos administrativos</p>
      </div>
      <div>
        <span className={cls.ButtonWrapper}>
          <button 
            className={cls.ButtonAccept}
            onClick={() => props.cancelled(localStorage.getItem('token'), props.job_id)}>
              De acuerdo, quiero cancelar.
          </button>
        </span>
        <span className={cls.ButtonWrapper}>
          <button className={cls.ButtonCancell} onClick={props.close}>No quiero cancelar.</button>
        </span>
      </div>
    </div>
  );
};

export default cancelBookingModal;