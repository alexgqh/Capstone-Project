const Button = ({ children, isCTA, onClick, style }) => {
   return (
      <button className={isCTA ? "cta-button" : "reg-button"} onClick={onClick} style={{...style, height:"77px"}}>
         {children}
      </button>
   );
}

export default Button;