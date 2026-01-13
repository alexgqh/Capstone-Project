import LogoFooter from '../assets/logo-footer.svg';

const Footer = () => {
  return (
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
  );
}

export default Footer;