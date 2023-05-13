import './Pedals.css';
import Product from '../Product/Product';

function Pedals() {
    return (
        <div class="pedals">
            <p>
                These are my own takes on existing circuits.
                If you're interested in one of these, email me
                at <a href="mailto:floodlight.pedals@gmail.com">floodlight.pedals@gmail.com</a>.
            </p>
            <div class="grid-container">
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Pedals;
