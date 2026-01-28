import '../styles/input.css'

const InputBase = ({ id, className, children, caption, parentStyle, style, onKeyDown, onClick, role, isRequired = true }) => {

  const renderRequiredAstrisk = () => {
    if (isRequired) {
      return <span className="color-peach"> *</span>
    }
  }

  const handleKeyDown = (e) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  function getClassName() {
    let ret = "input-box";
    if (className) ret += ` ${className}`;
    return ret;
  }

  const fieldID = id + "-field";

  return (
    <div id={id} className="input-container" style={parentStyle} >
      <label className="input-caption color-green" htmlFor={fieldID}>{caption}{renderRequiredAstrisk()}</label>
      <div
        id={fieldID}
        className={getClassName()}
        onKeyDown={handleKeyDown}
        onClick={onClick}
        tabIndex={0}
        role={role}
        style={style}
      >
        {children}
      </div>
    </div>
  )
}

export default InputBase;