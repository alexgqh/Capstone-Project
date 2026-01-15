import '../styles/input.css'
import { useState } from 'react'

const InputBase = ({ children, caption, style, id, isRequired = true }) => {
  const renderRequiredAstrisk = () => {
    if (isRequired) {
      return <span className="color-peach"> *</span>
    }
  }

  return (
    <div id={id} className="input-container" style={style}>
      <h3 className="color-green">{caption}{renderRequiredAstrisk()}</h3>
      <div className="input-box">
        {children}
      </div>
    </div>
  )
}

export default InputBase;