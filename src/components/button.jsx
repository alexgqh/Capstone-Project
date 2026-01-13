const Button = ({ caption, isCTA }) => {
   return (
      <button className={isCTA ? "cta-button" : "reg-button"}>
         {caption}
      </button>
   );
}

export default Button;