import React from 'react'
import classnames from 'classnames'

const FormGroup = (props) => {
  const { formInput: FormComponent, labelText, name, labelHidden } = props
  const labelClassnames = classnames(
    { 'visuallyhidden': labelHidden }
  )
  return (
    <div className="c-form-group">
      <label className={labelClassnames} for={name} aria-label={labelText}>{labelText}</label>
      <FormComponent {...props} />
    </div>
  )
}

export default FormGroup
