import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo AreaVerde" className="logo-img" />
        <span className="logo-text">AreaVerde</span>
      </Link>
      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/areas">Ver Áreas</NavLink>
        <NavLink to="/cadastrar">Cadastrar</NavLink>
      </nav>
    </header>
  );
}

export default Header;