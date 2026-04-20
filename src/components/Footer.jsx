import { Link } from 'react-router-dom';

const ORDER_URL = 'https://glovoapp.com/fr/ma/tanger/stores/burger-play-tng';

export default function Footer() {
  return (
    <footer>
      <div className="big-mark">Burger Play</div>
      <div className="foot-grid">
        <div>
          <h4>Maison</h4>
          <p className="foot-tag">Un fast-food marocain qui a poussé avec la manette dans une main et un burger dans l'autre.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/produits">Produits</Link></li>
            <li><Link to="/franchise">Franchise</Link></li>
            <li><a href={ORDER_URL} target="_blank" rel="noopener noreferrer">Commander</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Tanger, Maroc</li>
            <li><a href="mailto:franchise@burgerplay.ma">franchise@burgerplay.ma</a></li>
            <li>Min. commande 50 MAD</li>
          </ul>
        </div>
        <div>
          <h4>Suivre</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© Burger Play · Tous droits réservés</span>
        <span>Press start to eat ●</span>
      </div>
    </footer>
  );
}
