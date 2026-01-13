import StarEmpty from '../assets/star-empty.svg';
import StarHalf from '../assets/star-half.svg';
import StarFull from '../assets/star-full.svg';

const quoteOpen = '“';
const quoteClose = '”';

const Testimonial = ({ name, PFP, rating, review }) => {
  return (
    <div className="testimonial">
      <span style={{display:"flex", gap: "1rem", alignItems: "center"}}>
        <img src={PFP} alt={`Profile picture of user: ${name}`} />
        <h3>{name}</h3>
      </span>
      <div>rating placeholder</div>
      <p className="color-charcoal">{quoteOpen+review+quoteClose}</p>
    </div>
  );
}

export default Testimonial;