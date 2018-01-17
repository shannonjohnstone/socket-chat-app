import React from 'react'
import { string } from 'prop-types'
import classnames from 'classnames'

const Button = ({ type, btnText, purpose, onClick }) => {
  const btnClassNames = classnames(
    'c-button',
    { 'c-button--primary': purpose === 'primary' }
  )
  return <button onClick={onClick} className={btnClassNames} type={type}>{btnText}</button>
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  type: string.isRequired
}

export default Button
