import LogoHeader from '../assets/logo-header.svg';
import { usePage } from '../global/pageContext';

const Header = ({ ref }) => {
  const { setPageHome, setPageReserve } = usePage();

  return (
    <header id="header" className="page-padding padding-block-sm" ref={ref}>
      <a onClick={setPageHome}><img src={LogoHeader} alt="Little Lemon Logo"/></a>
      <nav id="header-nav">
        <ul id="header-links">
          <li><a onClick={setPageHome}>Home</a></li>
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