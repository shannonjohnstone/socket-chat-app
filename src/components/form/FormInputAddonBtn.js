import React from 'react';
import { string, func } from 'prop-types';
import FormInput from './FormInput';

const FormInputAddonBtn = ({ name, onClick, size, placeholder, btnText }) => (
  <div className="input-addon-btn row">
    <FormInput size={size} name={name} placeholder={placeholder} />
    <button className="c-button c-button--primary" type="submit" onClick={onClick} >{btnText}</button>
  </div>
);

FormInputAddonBtn.defaultProps = {
  btnText: '+',
  placeholder: null,
  size: null
};

FormInputAddonBtn.propTypes = {
  name: string.isRequired,
  onClick: func.isRequired,
  placeholder: string,
  size: string,
  btnText: string
};

export default FormInputAddonBtn;
