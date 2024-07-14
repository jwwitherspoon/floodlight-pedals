import './Header.css';
import logoImg from '../../assets/img/logo-symbol.svg';
import logoText from '../../assets/img/logo-text.svg';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                <img id="logo-img" src={logoImg} alt="Floodlight Pedals Logo"/>
                <img id="logo-text" src={logoText} alt="Floodlight Pedals Logo Text"/>
            </Link>
            <HamburgerMenu />
            <div className="links">
                <Link to="/">ABOUT</Link>
                <Link to="/pedals">PEDALS</Link>
                <Link to="/mods">MODS</Link>
                <Link to="/shoutouts">SHOUTOUTS</Link>
            </div>
        </header>
    );
}

export default Header;
