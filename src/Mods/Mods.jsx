import './Mods.css';
import Product from '../Product/Product';

function Mods() {
    return (
        <div class="mods">
            <p>
                These are the mods I have done before and could do again.
                If you're interested in one of these or want a mod not listed here, email me
                at <a href="mailto:floodlight.pedals@gmail.com">floodlight.pedals@gmail.com</a>. Price is negotiable.
            </p>
            <div class="grid-container">
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Mods;
