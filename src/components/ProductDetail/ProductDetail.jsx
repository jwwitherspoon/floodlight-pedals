import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';

function ProductDetail() {
    const { productKey } = useParams();
    const product = products[productKey];

    return (
        <>
            <img src={process.env.PUBLIC_URL + product.images[0]} alt={product.caption}></img>
            <div className='content'>
                {product.productText}
            </div>
        </>
    );
}

export default ProductDetail;
