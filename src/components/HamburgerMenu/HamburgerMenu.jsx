import './HamburgerMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function HamburgerMenu() {
    return (
        <>
            <FontAwesomeIcon
                icon={faBars}
                size='3x'
                id='menu-btn'
            />
        </>
    );
}

export default HamburgerMenu;
