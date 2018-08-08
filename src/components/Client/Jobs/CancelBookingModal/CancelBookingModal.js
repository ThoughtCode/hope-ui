import React from 'react';

import cls from './CancelBookingModal.css';

const cancelBookingModal = (props) => {
  let valueTime = null;
  let valueRode = null;
  if(props.config.map(config => {
    if(config.id === 1){
      valueTime = config.value
    }
    if(config.id === 2){
      valueRode = config.value
    }
  }))
  return (
    <div className={cls.CancelBookingModal}>
      <div>
        <h2>Aviso de penalizacion</h2>
      </div>
      <div>
        <p>Recuerda que si cancelas el servicio antes de "{valueTime} HORAS" de inicio de trabajo se cobrará un valor de {valueRode} por cargos administrativos</p>
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