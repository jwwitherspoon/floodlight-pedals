import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <a href="index.html" class="logo">
                <img id="logo-img" src="assets/img/logo-symbol.svg" alt="Floodlight Pedals Logo"/>
                <img id="logo-text" src="assets/img/logo-text.svg" alt="Floodlight Pedals Logo Text"/>
            </a>
            <i id="menu-btn" class="fa-solid fa-bars"></i>
            <div class="links">
                <Link to="/">ABOUT</Link>
                <Link to="/mods">MODS</Link>
                <Link to="/">CONTACT</Link>
            </div>
        </header>
    );
}

export default Header;
