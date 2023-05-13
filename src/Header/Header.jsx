import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                <img id="logo-img" src="./assets/img/logo-symbol.svg" alt="Floodlight Pedals Logo"/>
                <img id="logo-text" src="./assets/img/logo-text.svg" alt="Floodlight Pedals Logo Text"/>
            </Link>
            <i id="menu-btn" className="fa-solid fa-bars"></i>
            <div className="links">
                <Link to="/">ABOUT</Link>
                <Link to="/pedals">PEDALS</Link>
                <Link to="/mods">MODS</Link>
            </div>
        </header>
    );
}

export default Header;
