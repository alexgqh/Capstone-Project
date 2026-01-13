const Button = ({ caption, isCTA, onClick }) => {
   return (
      <button className={isCTA ? "cta-button" : "reg-button"} onClick={onClick} style={{height: "77px"}}>
         {caption}
      </button>
   );
}

export default Button;