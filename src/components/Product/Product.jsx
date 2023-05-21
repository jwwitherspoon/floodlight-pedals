import './Product.css';
import { Link } from 'react-router-dom';
import products from '../../data/products.json'

function Product({productKey}) {
    const product = products[productKey];

    return (
        <div className="product">
            <Link to={'/mods/' + productKey}>
                <img src={process.env.PUBLIC_URL + product.images[0]} alt={product.caption}/>
                <p className='caption'>{product.caption}</p>
            </Link>
        </div>
    );
}

export default Product;
