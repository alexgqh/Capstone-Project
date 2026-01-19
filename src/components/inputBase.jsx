import '../styles/input.css'

const InputBase = ({ id, className, children, caption, style, ref, onFocus, isFocused, isRequired = true }) => {
  const renderRequiredAstrisk = () => {
    if (isRequired) {
      return <span className="color-peach"> *</span>
    }
  }

  const getClassName = () => isFocused ? "input-box input-focus" : "input-box";

  return (
    <div id={id} className="input-container" style={style}>
      <p className="input-caption color-green">{caption}{renderRequiredAstrisk()}</p>
      <div className={getClassName()} ref={ref} tabIndex={0} onFocus={onFocus}>
        {children}
      </div>
    </div>
  )
}

export default InputBase;