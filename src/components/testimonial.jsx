import Rating from './rating';

const quoteOpen = '“';
const quoteClose = '”';

const Testimonial = ({ name, PFP, rating, review }) => {
  return (
    <div className="testimonial">
      <span style={{display:"flex", gap: "0.5rem", alignItems: "center"}}>
        <img src={PFP} alt={`Profile picture of user: ${name}`} />
        <h3>{name}</h3>
      </span>
      <Rating rating={rating}/>
      <p className="color-charcoal">{quoteOpen + review + quoteClose}</p>
    </div>
  );
}

export default Testimonial;