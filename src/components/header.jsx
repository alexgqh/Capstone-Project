import LogoHeader from '../assets/logo-header.svg';
import { usePage } from '../global/pageContext';

const Header = ({ scrollToTop, ref }) => {
  const { setPageReserve } = usePage();

  return (
    <header id="header" ref={ref}>
      <a onClick={scrollToTop}><img src={LogoHeader} alt="Little Lemon Logo"/></a>
      <nav id="header-nav">
        <ul id="header-links">
          <li><a onClick={scrollToTop}>Home</a></li>
          <li>About</li>
          <li>Menu</li>
          <li><a onClick={setPageReserve}>Reservations</a></li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;