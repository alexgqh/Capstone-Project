import HeroImg from '../assets/hero-img.jpg';
import Button from './button';
import { usePage } from './global/PageContext';

const Hero = () => {
  const { setPageReserve } = usePage();

  return (
    <section id="hero" className="page-padding padding-block-lg">
      <div id="hero-left">
        <div id="hero-text">
          <div id="hero-title">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
          Little Lemon is a warm and welcoming neighborhood bistro
          that blends Mediterranean flavors with a modern, casual atmosphere.
          Our menu features thoughtfully prepared dishes made with fresh,
          locally sourced ingredients, alongside classic cocktails and seasonal specials.
          Whether you’re joining us for a relaxed lunch, an intimate dinner, or a celebratory evening with friends,
          Little Lemon offers a vibrant dining experience that feels both familiar and special.
          </p>
        </div>
        <div style={{display:"flex",position:"static",gap:"1rem",width:"calc(200% + 4rem)"}}>
          <Button isCTA={true} onClick={setPageReserve} style={{flex:"1"}}>Reserve a table</Button>
          <div style={{flex:"1"}} />
          <div style={{flex:"1"}} />
        </div>
      </div>
      <div id="hero-img">
        <img src={HeroImg} alt="A picture of Little Lemon's outdoor dining terrace -- sunny and open." />
      </div>
    </section>
  );
}

export default Hero;