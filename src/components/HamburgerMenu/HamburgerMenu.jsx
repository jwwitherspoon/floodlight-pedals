import './HamburgerMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function openMenu() {
    document.getElementById('side-menu-wrapper').classList.add('open');
}

function closeMenu() {
    document.getElementById('side-menu-wrapper').classList.remove('open');
}

function HamburgerMenu() {
    return (
        <>
            <FontAwesomeIcon
                icon={faBars}
                size='3x'
                id='menu-btn'
                onClick={openMenu}
            />
            <div id='side-menu-wrapper' onClick={closeMenu}>
                <div id='side-menu' onClick={event => event.stopPropagation()}>
                    <FontAwesomeIcon
                        id='close-menu-btn'
                        icon={faX}
                        size='xl'
                        onClick={closeMenu}
                    />
                    <Link onClick={closeMenu} to="/">ABOUT</Link>
                    <Link onClick={closeMenu} to="/pedals">PEDALS</Link>
                    <Link onClick={closeMenu} to="/mods">MODS</Link>
                </div>
            </div>
        </>
    );
}

export default HamburgerMenu;
