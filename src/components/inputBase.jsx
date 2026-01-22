import '../styles/input.css'
import { useState, createContext, useContext } from 'react'

const FocusContext = createContext();

export const useIsFocused = () => useContext(FocusContext);

const InputBase = ({ id, className, children, caption, style, onFocus, onBlur, onKeyDown, onClick, isRequired = true }) => {
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
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  }
  const handleKeyDown = (e) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  function getClassName() {
    let ret = "input-box";
    if (isFocused) ret += " input-focus";
    if (className) ret += ` ${className}`;
    return ret;
  }

  const fieldID = id + "-field";

  return (
    <FocusContext.Provider value={isFocused}>
      <div id={id} className="input-container" style={style}>
        <label className="input-caption color-green" htmlFor={fieldID}>{caption}{renderRequiredAstrisk()}</label>
        <div
          id={fieldID}
          className={getClassName()}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onClick={onClick}
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    </FocusContext.Provider>
  )
}

export default InputBase;