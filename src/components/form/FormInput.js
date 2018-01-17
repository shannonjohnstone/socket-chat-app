import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';

const FormInput = ({ placeholder, inputSize }) => {
  const inputClassNames = classnames(
    'input', 'c-form-input',
    { 'c-form-input--sm': inputSize === 'sm' },
    { 'c-form-input--med': inputSize === 'md' }
  );

  return <input className={inputClassNames} name="message" placeholder={placeholder} />;
};

FormInput.defaultProps = {
  placeholder: null,
  inputSize: null
};

FormInput.propTypes = {
  placeholder: string,
  inputSize: string
};

export default FormInput;
