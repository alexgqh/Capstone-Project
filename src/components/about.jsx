import ImageL from '../assets/footer-img-0.svg';
import ImageR from '../assets/footer-img-1.svg';

const images = [
  {
    src: ImageL,
    alt: "A chef smiling while putting the finishing touches on a dish",
    style: {
      position:"absolute",
      top:"0",
      left:"0",
    },
  },
  {
    src: ImageR,
    alt: "Two chefs smiling while looking down at the food they made",
    style: {
      position:"absolute",
      right:"0",
      bottom:"0",
    },
  },
];

const copy = [
  `At Little Lemon, we believe great food brings people together. What started as a neighborhood bistro has grown into a welcoming space where friends, families, and couples can slow down and enjoy thoughtfully prepared meals.`,
  `Our menu highlights locally sourced ingredients, seasonal flavors, and timeless recipes, all crafted with care by our kitchen team. Whether you’re stopping by for a casual lunch, a celebratory dinner, or a handcrafted cocktail at the bar, Little Lemon is designed to feel familiar, comfortable, and inviting.`,
  `We’re proud to be part of the community we serve, and we look forward to welcoming you at the table.`
];

const About = () => {
  return (
    <section id="about" style={{minHeight:"450px"}} className="page-padding">
      <div style={{flex:"1", alignSelf:"center"}}>
        <h1 className="color-green">About Little Lemon</h1>
        {copy.map((line,i) => {
          return <p className="color-charcoal" style={i==copy.length-1 ? {} : {marginBottom:"1rem"}}>{line}</p>
        })}
      </div>
      <div style={{width:"483px", position:"relative"}}>
        <img {...images[0]} id="about-img-0" />
        <img {...images[1]} id="about-img-1" />
      </div>
    </section>
  );
}

export default About;