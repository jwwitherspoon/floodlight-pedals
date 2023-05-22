import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';

function ProductDetail() {
    const { productKey } = useParams();
    const product = products[productKey];

    return (
        <div className='product-detail'>
            <img
                src={process.env.PUBLIC_URL + product.images[0]}
                alt={product.caption}
                className='product-image'
            ></img>
            <h2>{product.caption}</h2>
            <div className='content'>
                {product.productText}
            </div>
        </div>
    );
}

export default ProductDetail;
