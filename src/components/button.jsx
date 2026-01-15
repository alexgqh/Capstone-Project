const Button = ({ children, id, isCTA, onClick, style, keysToInteract = null }) => {
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

  return (
    <button id={id} className={isCTA ? "cta-button" : "reg-button"} onClick={handleClick} style={{...style, height:"77px"}} onKeyDown={handleOnKeyDown}>
      {children}
    </button>
  );
}

export default Button;