const Button = ({ children, isCTA, onClick, style, keysToInteract = null }) => {
  const handleOnKeyDown = (e) => {
    if (keysToInteract) {
      e.preventDefault();
      if (keysToInteract.includes(e.key)) {
        onClick();
      }
    }
  }
  return (
    <button className={isCTA ? "cta-button" : "reg-button"} onClick={onClick} style={{...style, height:"77px"}} onKeyDown={handleOnKeyDown}>
      {children}
    </button>
  );
}

export default Button;