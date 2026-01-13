import LogoHeader from '../assets/logo-header.svg';
import LogoFooter from '../assets/logo-footer.svg';
import HeroImg from '../assets/hero-img.jpg';
import ImgGreekSalad from '../assets/greek-salad.svg';
import ImgBruschetta from '../assets/bruschetta.svg';
import ImgLemonDessert from '../assets/lemon-dessert.jpg';

import Button from './button';
import Special from './special';

const Home = ({ setPage }) => {
  const greekSalad = {
    image: ImgGreekSalad,
    alt: "An image of a Greek salad",
    title: "Greek Salad",
    desc: "Our Greek Salad is a refreshing and satisfying combination of crisp lettuce, juicy tomatoes, cucumbers, briny olives, tangy feta cheese, and a zesty vinaigrette dressing. Enjoy a taste of the Mediterranean!",
    price: "$12.99",
  };
  const bruschetta = {
    image: ImgBruschetta,
    alt: "An image of bruschetta",
    title: "Bruschetta",
    desc: "Experience the fresh and vibrant flavors of Italy with our classic bruschetta. Toasted rustic bread topped with ripe tomatoes, basil, garlic, and olive oil. A perfect appetizer to start your meal. Buon appetito!",
    price: "$5.99",
  };
  const lemonDessert = {
    image: ImgLemonDessert,
    alt: "An image of a lemon cake",
    title: "Lemon Dessert",
    desc: "Indulge in our refreshing Lemon Dessert, bursting with zesty citrus flavor. Made with freshly squeezed lemons and topped with a tangy lemon glaze, it's the perfect way to end your meal on a sweet note.",
    price: "$4.99",
  };

  return (
    <>
      <header>
        <img src={LogoHeader} alt="Little Lemon Logo"/>
        <nav id="header-nav">
          <ul id="header-links">
            <li><a>Home</a></li>
            <li>About</li>
            <li>Menu</li>
            <li><a onClick={() => setPage("reserve")}>Reservations</a></li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
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
            <Button caption="Reserve a table" isCTA={true} onClick={() => setPage("reserve")} />
          </div>
          <div id="hero-img">
            <img src={HeroImg} alt="A picture of Little Lemon's outdoor dining terrace -- sunny and open." />
          </div>
        </section>
        <section id="specials">
          <div id="specials-top">
            <h1 className="color-charcoal">Specials</h1>
            <Button caption="Online menu" isCTA={true} />
          </div>
          <div id="specials-cards">
            <Special {...greekSalad} />
            <Special {...bruschetta} />
            <Special {...lemonDessert} />
          </div>
        </section>
        <section id="testimonials">
          <hr className="color-charcoal" />
          <div className="space-block-64" aria-hidden="true" />
          <h1 className="color-charcoal">Testimonials</h1>
          <div className="space-block-64" aria-hidden="true" />
          <hr className="color-charcoal" />
        </section>
        <section id="about">
          About
        </section>
      </main>
      <footer>
        <img src={LogoFooter} alt="Secondary Little Lemon Logo"/>
        <section>
          <h4>
            Navigation
          </h4>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </nav>
        </section>
        <section>
          <h4>
            Contact
          </h4>
          <nav>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </nav>
        </section>
        <section>
          <h4>
            Social Media
          </h4>
          <nav>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Twitter / X</li>
            </ul>
          </nav>
        </section>
      </footer>
    </>
  );
}

export default Home;