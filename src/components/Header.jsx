import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Summer Water Festival</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  </header>
);

export default Header;
