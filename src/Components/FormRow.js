import React from 'react';
import submitArrow from '../assets/images/icons/submit-arr.svg';

function FormRow({ actionText, placeholder }) {
  return (
    <div className="form-row subscribe-form__wrap">
      <input className="form-row__input" type="email" name="email" placeholder={placeholder} />
      <button className="form-row__btn" type="submit" aria-label={actionText} style={{ backgroundImage: `url(${submitArrow})` }}></button>
    </div>
  );
}

export default FormRow;