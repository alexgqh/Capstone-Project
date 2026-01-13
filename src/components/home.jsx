import LogoFooter from '../assets/logo-footer.svg';

import Header from './header';
import Hero from './hero';
import Specials from './specials';

const Home = ({ setPage }) => {
  return (
    <>
      <Header setPage={setPage} />
      <main>
        <Hero setPage={setPage} />
        <Specials />
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