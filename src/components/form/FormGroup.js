import React from 'react';
import { bool, string, shape } from 'prop-types';
import classnames from 'classnames';

const FormGroup = (props) => {
  const { labelText, name, labelHidden } = props;
  const labelClassnames = classnames({ visuallyhidden: labelHidden });
  return (
    <div className="c-form-group">
      <label className={labelClassnames} htmlFor={name} aria-label={labelText}>{labelText}</label>
      {props.children}
      <p className="c-form-group__message">This is a validation message</p>
    </div>
  );
};

FormGroup.defaultProps = {
  labelHidden: false
};

FormGroup.propTypes = {
  children: shape({}).isRequired,
  labelText: string.isRequired,
  name: string.isRequired,
  labelHidden: bool
};

export default FormGroup;
