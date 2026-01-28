

const RadioButton = ({ toggledOn, onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick?.();
  }
  return (
    <span className="radio-group" onClick={handleClick} role="radio">
      <button className="radio-button" tabIndex={-1}>
        {toggledOn && <div className="radio-button-inner" />}
      </button>
      <p className="input-font">{children}</p>
    </span>
  )
}

export default RadioButton;