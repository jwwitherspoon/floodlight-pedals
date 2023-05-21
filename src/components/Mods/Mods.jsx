import './Mods.css';
import Product from '../Product/Product';
import mods from '../../data/mods.json';

function Mods() {
    return (
        <div className="mods">
            <p>
                These are the mods I have done before and could do again.
                If you're interested in one of these or want a mod not listed here, email me
                at <a href="mailto:floodlight.pedals@gmail.com">floodlight.pedals@gmail.com</a>. Price is negotiable.
            </p>
            <div className="grid-container">
                {
                    Object.keys(mods).map(modKey => {
                        return <Product key={modKey} product={mods[modKey]} />;
                    })
                }
            </div>
        </div>
    );
}

export default Mods;
