import React from 'react'

const FormGroup = (props) => {
  const { formInput: FormComponent, labelText, name } = props
  return (
    <div className="c-form-group">
      <label for={name}>{labelText}</label>
      <FormComponent {...props} />
    </div>
  )
}

export default FormGroup
