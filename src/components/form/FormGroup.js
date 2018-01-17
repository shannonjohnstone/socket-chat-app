import React from 'react';
import { bool, func, string } from 'prop-types';
import classnames from 'classnames';

const FormGroup = (props) => {
  const { formInput: FormComponent, labelText, name, labelHidden } = props;
  const labelClassnames = classnames({ visuallyhidden: labelHidden });

  return (
    <div className="c-form-group">
      <label className={labelClassnames} htmlFor={name} aria-label={labelText}>{labelText}</label>
      <FormComponent {...props} />
    </div>
  );
};

FormGroup.defaultProps = {
  labelHidden: false
};

FormGroup.propTypes = {
  formInput: func.isRequired,
  labelText: string.isRequired,
  name: string.isRequired,
  labelHidden: bool
};

export default FormGroup;
