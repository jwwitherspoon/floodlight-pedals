import './Mods.css';
import mods from '../../data/mods';
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
                {mods.map(mod => {
                    return <Product key={mod.caption} src={mod.image} caption={mod.caption} />;
                })}
            </div>
        </div>
    );
}

export default Mods;
