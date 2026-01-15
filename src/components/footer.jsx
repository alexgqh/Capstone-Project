import LogoFooter from '../assets/logo-footer.svg';
import { usePage } from '../global/pageContext';

const Footer = () => {
  const { setPageReserve, scrollToTop } = usePage();

  return (
    <footer className="page-padding">
      <a onClick={scrollToTop} aria-label="Scroll to top" title="Scroll to top">
        <img src={LogoFooter} alt="Little Lemon Logo"/>
      </a>
      <section>
        <h4>
          Navigation
        </h4>
        <nav>
          <ul>
            <a onClick={scrollToTop} aria-label="Scroll to top" title="Scroll to top"><li>Home</li></a>
            <li>About</li>
            <li>Menu</li>
            <a onClick={setPageReserve} aria-label="Reserve a table" title="Reserve a table"><li>Reservations</li></a>
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
  );
}

export default Footer;