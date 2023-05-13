import './Mods.css';
import Product from '../Product/Product';

function Mods() {
    return (
        <div className="mods">
            <p>
                These are the mods I have done before and could do again.
                If you're interested in one of these or want a mod not listed here, email me
                at <a href="mailto:floodlight.pedals@gmail.com">floodlight.pedals@gmail.com</a>. Price is negotiable.
            </p>
            <div className="grid-container">
                <Product src="./assets/img/mods/ch-1-vibrato.jpg" caption="Tigress Mod (Boss DS-1 shown here)" />
                <Product src="./assets/img/mods/ds-1-tigress.jpg" caption="Boss CH-1 Vibrato Mod" />
            </div>
        </div>
    );
}

export default Mods;
