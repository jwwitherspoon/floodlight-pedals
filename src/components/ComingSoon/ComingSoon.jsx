import './ComingSoon.css';
import FloodLoader from '../FloodLoader/FloodLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faInstagramSquare,
    faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logoText from '../../assets/img/logo-text.svg';

function ComingSoon() {
    return (
        <div className='coming-soon-main'>
            <div className='coming-soon-logo'>
                <FloodLoader />
                <img className="logo-text" src={logoText} alt="Floodlight Pedals Logo Text"/>
            </div>
            <h1>
                Pedals coming soon!
                <br></br>
                Follow us on social media for updates!
            </h1>
            <div class="coming-soon-social">
                <Link to="https://www.facebook.com/people/Floodlight-Pedals/61561247655629/">
                    <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
                </Link>
                <Link to="https://www.instagram.com/floodlightpedals">
                    <FontAwesomeIcon icon={faInstagramSquare} size='2x' />
                </Link>
                <Link to="https://x.com/floodlightpedal">
                    <FontAwesomeIcon icon={faSquareXTwitter} size='2x' />
                </Link>
            </div>
        </div>
    );
}

export default ComingSoon;
