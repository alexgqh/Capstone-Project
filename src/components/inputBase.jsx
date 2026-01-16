import '../styles/input.css'
import { useState } from 'react'

const InputBase = ({ children, caption, id, style, isRequired = true }) => {
  const renderRequiredAstrisk = () => {
    if (isRequired) {
      return <span className="color-peach"> *</span>
    }
  }

  return (
    <div id={id} className="input-container" style={style}>
      <p className="input-caption color-green">{caption}{renderRequiredAstrisk()}</p>
      <div className="input-box">
        {children}
      </div>
    </div>
  )
}

export default InputBase;