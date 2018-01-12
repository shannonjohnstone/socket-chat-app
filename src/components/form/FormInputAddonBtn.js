import React from 'react'
import { string } from 'prop-types'
import FormInput from './FormInput'

const FormInputAddonBtn = ({ name, onClick, size, placeholder, btnText }) => {
  return (
    <div className="input-addon-btn row">
      <FormInput size={size} name={name} placeholder={placeholder} />
      <button className="c-button c-button--primary" type="submit" onClick={onClick} >{btnText}</button>
    </div>
  )
}

FormInputAddonBtn.defaultProps = {
  btnText: '+'
}

FormInputAddonBtn.propTypes = {
  placeholder: string,
  size: string,
  btnText: string
}

export default FormInputAddonBtn
