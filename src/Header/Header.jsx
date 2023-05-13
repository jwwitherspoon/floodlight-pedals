import './Header.css';
import logoImg from '../assets/img/logo-symbol.svg';
import logoText from '../assets/img/logo-text.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                <img id="logo-img" src={logoImg} alt="Floodlight Pedals Logo"/>
                <img id="logo-text" src={logoText} alt="Floodlight Pedals Logo Text"/>
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
