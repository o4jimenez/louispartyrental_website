const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <p id="banner-text">(805) 915-7089</p>
        <a href="">
          <span lang="es">En Español</span>
        </a>
      </div>
    </div>
  );
};

const Navigator = (props) => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <h1>Louis Party Rental</h1>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Rentals</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Banner />
      <Navigator />
    </header>
  );
};

export default Header;
