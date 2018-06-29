import React from 'react';

import cls from './CancelBookingModal.css';

const cancelBookingModal = (props) => {
  return (
    <div className={cls.CancelBookingModal}>
      <div>
        <h2>Aviso de penalizacion</h2>
      </div>
      <div>
        <p>Si cancelas este servicio tendras que pagar una penalizacion</p>
      </div>
      <div>
        <span className={cls.ButtonWrapper}>
          <button 
            className={cls.ButtonAccept}
            onClick={() => props.cancelled(localStorage.getItem('token'), props.job_id)}>
              Aceptar
          </button>
        </span>
        <span className={cls.ButtonWrapper}>
          <button className={cls.ButtonCancell} onClick={props.close}>Cancelar</button>
        </span>
      </div>
    </div>
  );
};

export default cancelBookingModal;