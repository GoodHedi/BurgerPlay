import { NavLink, Link } from 'react-router-dom';

const ORDER_URL = 'https://glovoapp.com/fr/ma/tanger/stores/burger-play-tng';

export default function Nav() {
  return (
    <>
      <Link className="brand-mark" to="/">
        <div className="dot">●</div>
        <div className="wordmark">Burger Play</div>
      </Link>

      <nav className="nav-float">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/produits">Produits</NavLink>
        <NavLink to="/franchise">Franchise</NavLink>
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="order">Commander</a>
      </nav>

      <div className="loc-chip">
        <span className="live"></span>
        <span>TANGER · 35.76°N · OUVERT</span>
      </div>
    </>
  );
}
