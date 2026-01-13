import LogoHeader from '../assets/logo-header.svg';

const Header = ({ setPage }) => {
  return (
    <header>
      <a><img src={LogoHeader} alt="Little Lemon Logo"/></a>
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
  );
}

export default Header;