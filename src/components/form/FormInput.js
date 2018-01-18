import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';

const FormInput = ({ placeholder, inputSize, name, onChange, value }) => {
  const inputClassNames = classnames(
    'input', 'c-form-input',
    { 'c-form-input--sm': inputSize === 'sm' },
    { 'c-form-input--med': inputSize === 'md' }
  );

  return (
    <input
      className={inputClassNames}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
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
