const Button = ({ caption, isCTA, onClick }) => {
   return (
      <button className={isCTA ? "cta-button" : "reg-button"} onClick={onClick}>
         {caption}
      </button>
   );
}

export default Button;