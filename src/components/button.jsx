const Button = ({ children, isCTA, onClick }) => {
   return (
      <button className={isCTA ? "cta-button" : "reg-button"} onClick={onClick} style={{height: "77px"}}>
         {children}
      </button>
   );
}

export default Button;