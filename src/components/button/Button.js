import React from 'react'
import { string } from 'prop-types'
import classnames from 'classnames'

const Button = ({ type, btnText, purpose }) => {
  const btnClassNames = classnames(
    'c-button',
    { 'c-button--primary': purpose === 'primary' }
  )
  return <button className={btnClassNames} type={type}>{btnText}</button>
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  type: string.isRequired
}

export default Button
