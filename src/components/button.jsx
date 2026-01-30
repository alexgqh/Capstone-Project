const Button = ({ children, id, className, isCTA, onClick, style, keysToInteract = null }) => {
  const handleOnKeyDown = (e) => {
    if (keysToInteract) {
      e.preventDefault();
      if (keysToInteract.includes(e.key)) {
        onClick();
      }
    }
  }
  const handleClick = (e) => {
    onClick ? onClick() : e.preventDefault();
  }

  function getClassName() {
    let ret = isCTA ? "cta-button" : "reg-button";
    if (className) ret += " " + className;
    return ret
  }

  return (
    <button id={id} className={getClassName()} onClick={handleClick} style={{...style, height:"77px"}} onKeyDown={handleOnKeyDown} type="button">
      {children}
    </button>
  );
}

export default Button;