import '../styles/input.css'
import { useState, createContext, useContext } from 'react'

const FocusContext = createContext();

export const useIsFocused = () => useContext(FocusContext);

const InputBase = ({ id, children, caption, style, onFocus, isRequired = true }) => {
  const [isFocused, setIsFocused] = useState(false);

  const renderRequiredAstrisk = () => {
    if (isRequired) {
      return <span className="color-peach"> *</span>
    }
  }

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  }

  return (
    <FocusContext.Provider value={isFocused}>
      <div id={id} className="input-container" style={style}>
        <p className="input-caption color-green">{caption}{renderRequiredAstrisk()}</p>
        <div
          className={`input-box${isFocused ? " input-focus" : ""}`}
          onFocus={handleFocus}
          onBlur={() => setIsFocused(false)}
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    </FocusContext.Provider>
  )
}

export default InputBase;